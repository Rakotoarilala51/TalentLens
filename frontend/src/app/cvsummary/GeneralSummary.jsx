"use client";
import { useState } from "react";
import {FaRegClipboard} from "react-icons/fa"
import {CiGlobe} from "react-icons/ci"
export default function GeneralSummary({generalSum}) {
const [summary, setSummary] =useState("");
function handleCopy(){
  if(!generalSum) return

  navigator.clipboard.writeText(generalSum)
}
  return (
  <div className="bg-white h-20 rounded-lg">
    <div className="flex justify-between p-1">
        <div className="flex items-center">
        <CiGlobe className="inline text-xs mr-1 font-bold"/>
        <p className="text-xs font-bold inline">General Summary</p>
        </div>

        <span className="text-xs font-semibold flex items-center hover:cursor-pointer" onClick={handleCopy}> 
            <FaRegClipboard className="inline"/>
            <p className="inline">Copy</p>
        </span>
    </div>
    <div className="p-1 text-sm max-h-12 overflow-y-auto">
      <span className="p-1">
          {generalSum}
      </span>
        
    </div>
  </div>);
}
