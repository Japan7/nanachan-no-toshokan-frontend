import RawEditorJS, { EditorConfig } from '@editorjs/editorjs';
import { useCallback, useEffect, useId, useRef } from 'react';

export default function EditorJS(
  config: EditorConfig,
) {
  const holderID = useId();

  const editorInstance = useRef<RawEditorJS>();
  const destroyEditor = useRef(false);

  const initEditor = useCallback(() => {
    editorInstance.current = new RawEditorJS({
      ...config,
      holder: holderID,
    });
  }, [config, holderID]);

  useEffect(() => {
    destroyEditor.current = false;

    if (editorInstance.current) return;

    initEditor();

    return () => {
      destroyEditor.current = true;
      editorInstance.current!.isReady.then(() => {
        if (!destroyEditor.current) return;
        editorInstance.current!.destroy();
      });
    };
  }, [initEditor]);

  return (
    <div id={holderID}></div>
  );
};
