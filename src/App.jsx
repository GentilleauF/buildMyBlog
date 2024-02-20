import { useState } from 'react';
import SettingPannel from './SettingPannel';
import ContentInput from './ContentInput';

function App() {

  const [styleContent,setStyleContent] = useState({});
  const [i,setI] = useState(0);

  return (
    <div className='p-10 bg-slate-600 min-h-screen space-y-3'>
      <h1 className='text-center text-4xl font-semibold pb-10 text-white'>SKYBLOG</h1>
      <SettingPannel key={i} i={i} setI={setI} setStyleContent={setStyleContent} styleContent={styleContent} />
      <ContentInput style={styleContent} />
    </div>
  )
}

export default App
