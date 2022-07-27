import { OutputData } from '@editorjs/editorjs';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import NavBar from '../components/NavBar';

const EditorJS = dynamic(() => import('../components/EditorJS'), {
  ssr: false,
});

const Home: NextPage = () => {
  const [editorData, setEditorData] = useState<OutputData>({
    time: 0,
    blocks: [],
  });

  return (
    <div>
      <NavBar/>
      <div className="grid grid-cols-2">
        <div className="bg-white text-black">
          <EditorJS setData={setEditorData} initialData={editorData}/>
        </div>
        <div className="mx-auto">
          <pre>{JSON.stringify(editorData, undefined, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Home;
