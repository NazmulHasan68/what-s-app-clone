import { InputBase } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
export default function Search() {
  return (
    <div className="bg-white w-full h-16 flex border-b-2 px-2">
      <div className="flex items-center relative w-full">
        <div>
          <IoIosSearch className="text-gray-900 absolute top-5 text-2xl font-semibold left-2 z-10"/>
        </div>
        <InputBase placeholder="Search or start new chat" className="bg-gray-100 p-1 pl-12 text-sm w-full rounded-lg "/>
      </div>
    </div>
  )
}
