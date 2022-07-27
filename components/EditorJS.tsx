import RawEditorJS, { OutputData } from '@editorjs/editorjs';
import { ToolConstructable, ToolSettings } from '@editorjs/editorjs/types/tools';
import { Dispatch, SetStateAction, useCallback, useEffect, useId, useRef } from 'react';

interface EditorJSProps {
  tools?: { [toolName: string]: ToolConstructable | ToolSettings };
  initialData: OutputData;
  setData: Dispatch<SetStateAction<OutputData>>;
}

export default function EditorJS(
  {
    tools = {},
    initialData,
    setData,
  }: EditorJSProps,
) {
  const holderID = useId();

  const editorInstance = useRef<RawEditorJS>();

  const needToDestroy = useRef(false);
  const destroyIfNeeded = useCallback(() => {
    if (!needToDestroy.current) return;

    editorInstance.current?.destroy?.();
  }, []);

  const initEditor = useCallback(() => {
    editorInstance.current = new RawEditorJS({
      holder: holderID,
      tools,
      data: initialData,
      onReady: () => {
        setData(initialData);
        destroyIfNeeded();
      },
      onChange: async () => {
        const content = await editorInstance.current!.saver.save();
        setData(content);
      },
    });
  }, [destroyIfNeeded, holderID, initialData, setData, tools]);

  useEffect(() => {
    needToDestroy.current = false;

    if (editorInstance.current) return;

    initEditor();

    return () => {
      needToDestroy.current = true;
      destroyIfNeeded();
    };
  }, [initEditor, destroyIfNeeded]);

  return (
    <div id={holderID}></div>
  );
};
