import React, { useState } from 'react'
import './question.css'

const Question = ({mode,faq}) => {
  const [collapse, setcollapse] = useState(true)
  return (
    <div className={collapse ?'questioncardcollapsed': 'questioncard'}>
        {collapse}
        <div className='row'><div className='col-11'>{faq?.question}</div><div className={'col-1 d-flex justify-content-end align-items-center'} onClick={()=>collapse ?setcollapse(false):setcollapse(true) }>{collapse?<div className={'toggle-icon rotate fade-in'} color={mode=='light'?'white':'black'}>+</div>:<div className={'toggle-icon unrotate fade-in'} src={'/minus.svg'} color={mode=='light'?'white':'black'}>-</div>}</div></div>
        <div className={collapse?'row answer fade-out':'row answer fade-in'}><div className='col-12'>{faq?.answer}</div></div>
      </div>
  )
}

export default Question