import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { InputBase } from '@mui/material';


export default function Footer() {
  return (
    <div className="h-[22vh]">
      <div className=' w-full bg-white py-2 flex gap-2 px-4 items-center'>
        <SentimentSatisfiedAltIcon className='cursor-pointer' style={{ fontSize: '25px',  }}/>
        <AttachFileIcon className="rotate cursor-pointer" style={{ transform: 'rotate(45deg)',fontSize: '25px',  }}/>
        <InputBase className='border w-[85%] rounded-lg px-2 text-sm text-slate-600' placeholder='Enter text here'/>
        <MicIcon style={{ fontSize: '25px',  }} className=' cursor-pointer'/>
        </div>
    </div>
  )
}
