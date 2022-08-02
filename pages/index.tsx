import { OutputData } from '@editorjs/editorjs';
import { ToolConstructable, ToolSettings } from '@editorjs/editorjs/types/tools';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import SimpleImage from '../components/editorjsTools/SimpleImage';
import NavBar from '../components/NavBar';

const EditorJS = dynamic(() => import('../components/EditorJS'), {
  ssr: false,
});

interface Tools {
  [toolName: string]: ToolConstructable | ToolSettings;
}

const tools: Tools = {
  image: {
    // FIXME types bugged in current version of EditorJS
    // @ts-ignore
    class: SimpleImage,
    inlineToolbar: true,
  },
};

const Home: NextPage = () => {
  const [editorData, setEditorData] = useState<OutputData>({
    time: 0,
    blocks: [
      {
        type: 'image',
        data: {
          url: 'https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg',
          caption: 'Tutturu!!',
        },
      },
    ],
  });

  return (
    <div>
      <NavBar/>
      <div className="grid grid-cols-2">
        <EditorJS
          tools={tools}
          data={editorData}
          onChange={async (api) => {
            const content = await api.saver.save();
            setEditorData(content);
          }}
        />
        <div className="mx-auto">
          <pre>{JSON.stringify(editorData, undefined, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Home;
