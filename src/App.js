import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import { useState } from 'react';
import { faqData } from './constants/faq';

function App() {

  const [mode, setmode] = useState('light')
  console.log(faqData)
  return (
    <div className={mode=='light'?"light main-container":"dark main-container"}>
      <div className='row align-tems-center justify-content-center'>
        <div className='col-10'><button className='toggle-button' onClick={()=>mode=='light'?setmode('night'):setmode('light')}>{mode=='light'?'Dark':'Light'}</button></div>
        <div className='col-10 faq-text'>Frequenty asked questions</div>
        <div className='col-10'>
        {faqData && faqData?.map(faq=>(
     
           <Question mode={mode} faq={faq}/>
        ))}
        </div>
        </div>
    </div>
  );
}

export default App;
