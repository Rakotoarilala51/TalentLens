"use client";
import { useState } from "react";
import {FaRegClipboard} from "react-icons/fa"
import {CiLinkedin} from "react-icons/ci"
export default function LinkedInBio() {
const [summary, setSummary] =useState("");
  return (
  <div className="bg-white h-20 rounded-lg">
    <div className="flex justify-between p-1">
        <div className="flex items-center">
        <CiLinkedin className="inline text-xs mr-1 font-bold"/>
        <p className="text-xs font-bold inline">LinkedIn Bio</p>
        </div>

        <span className="text-xs font-semibold flex items-center hover:cursor-pointer">
            <FaRegClipboard className="inline"/>
            <p className="inline">Copy</p>
        </span>
    </div>
    <div className="m-1 text-sm">
        {summary}
    </div>
  </div>);
}
