import { ToolboxConfig } from '@editorjs/editorjs';
import { useCallback, useMemo, useState } from 'react';
import BlockPlugin, { EditorJSPluginProps } from './BlockPlugin';
import ContentEditable from './ContentEditable';

const isValidUrl = (string: string) => {
  let url: URL;

  try {
    url = new URL(string.trim());
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};

interface SimpleImageData {
  url?: string;
  caption?: string;
}

function SimpleImageComponent(
  {
    initialData,
    onDataChange,
  }: EditorJSPluginProps<SimpleImageData>,
) {
  const [data, setData] = useState(initialData);

  const isValid = useMemo(() => {
    return isValidUrl(data.url ?? '');
  }, [data.url]);

  const updateUrl = useCallback((newUrl: string) => {
    setData((prevData: SimpleImageData) => {
      const newData: SimpleImageData = {
        ...prevData,
        url: newUrl,
      };
      onDataChange(newData);
      return newData;
    });
  }, [onDataChange]);

  const updateCaption = useCallback((newCaption: string) => {
    setData((prevData: SimpleImageData) => {
      const newData = {
        ...prevData,
        caption: newCaption.replace(/<br>$/, ''),
      };
      onDataChange(newData);
      console.log('update data', newCaption);
      return newData;
    });
  }, [onDataChange]);

  const caption = useMemo(() => {
    console.log('compute', data.caption);
    if (data.caption) {
      return (
        <ContentEditable
          initialInnerHTML={initialData.caption ?? ''}
          onContentChange={updateCaption}
          className="input input-bordered input-primary input-sm w-full"
          spellCheck={false}
        />
      );
    } else {
      return (
        <input
          type="text"
          className="input input-bordered input-primary input-sm w-full"
          placeholder="Caption"
          onChange={e => updateCaption(e.target.value)}
        />
      );
    }
  }, [data.caption, initialData.caption, updateCaption]);

  if (!isValid) {
    return (
      <input
        type="text"
        className="input input-bordered input-primary input-sm w-full"
        value={data.url}
        onChange={e => updateUrl(e.target.value)}
        placeholder="Paste an image URL..."
      />
    );
  } else {
    return (
      <div className="flex flex-col gap-4 items-start">
        <img
          src={data.url}
          alt={data.url}
        />
        {caption}
      </div>
    );
  }
}

export default class SimpleImage extends BlockPlugin<SimpleImageData> {
  static toolbox: ToolboxConfig = {
    title: 'Image',
    icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
  };

  componentFunction = SimpleImageComponent;
}
