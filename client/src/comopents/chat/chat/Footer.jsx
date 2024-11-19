import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { InputBase } from '@mui/material';
import { useState } from 'react';



export default function Footer({sendText,text, setText}) {


  return (
    <div className="h-[22vh] shadow-md">
      <div className=' w-full bg-slate-200 py-2 flex gap-2 px-4 items-center'>
        <SentimentSatisfiedAltIcon className='cursor-pointer' style={{ fontSize: '25px',  }}/>
        <AttachFileIcon className="rotate cursor-pointer" style={{ transform: 'rotate(45deg)',fontSize: '25px',  }}/>
        <InputBase onChange={(e)=>setText(e.target.value)} value={text} onKeyPress={(e)=>sendText(e)} className='border w-[85%] rounded-lg px-2 bg-slate-50 text-sm text-slate-600' placeholder='Enter text here'/>
        <MicIcon style={{ fontSize: '25px',  }} className=' cursor-pointer'/>
        </div>
    </div>
  )
}
