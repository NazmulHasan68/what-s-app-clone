import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { InputBase } from '@mui/material';
import { useEffect } from 'react';
import { uploadFile } from '../../../service/api';




export default function Footer({sendText,text, setText, file, setfile, setImage}) {

  const onFileChange =(e) =>{
    console.log(e);
    setfile(e.target.files[0])
    setText(e.target.files[0].name)
  }

  useEffect(()=>{
    const getImage = async() =>{
      if(file){
        const data = new FormData()
        data.append("name",file.name)
        data.append('file', file)

       let res =  await uploadFile(data)
       setImage(res.data)
      }
    }
    getImage()
  },[file])

  return (
    <div className="h-22vh shadow-md">
      <div className=' w-full bg-slate-300 py-2 flex gap-2 px-4 items-center'>
        <SentimentSatisfiedAltIcon className='cursor-pointer' style={{ fontSize: '25px',  }}/>
        <label htmlFor='fileInput'>
          <input type='file' className=' hidden' id='fileInput' onChange={(e)=>onFileChange(e)}/>
          <AttachFileIcon className="rotate cursor-pointer" style={{ transform: 'rotate(45deg)',fontSize: '25px',  }}/>
        </label>
        <InputBase onChange={(e)=>setText(e.target.value)} value={text} onKeyPress={(e)=>sendText(e)} className='border w-[85%] rounded-lg px-2 bg-slate-50 text-sm text-slate-600' placeholder='Enter text here'/>
        <MicIcon style={{ fontSize: '25px',  }} className=' cursor-pointer'/>
        </div>
    </div>
  )
}
