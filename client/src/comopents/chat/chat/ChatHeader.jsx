import { TextField } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

export default function ChatHeader({person}) {

  return (
    <div className="flex justify-between px-4 py-2 bg-slate-200 items-center">
        <div className="flex gap-2 items-center">
            <img  src={person.picture} alt="dp" className="w-10 h-10 rounded-full border-2"/>
            <div>
                <p className="text-md font-semibold">{person.name}</p>
                <p className="text-xs text-slate-500">offline</p>
            </div>
        </div>
        <div className="flex gap-2 text-slate-700">
            <SearchIcon className=" "/>
            <MoreVertIcon/>
        </div>
       
    </div>
  )
}
