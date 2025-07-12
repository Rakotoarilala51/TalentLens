"use client";
import { FaCode } from "react-icons/fa";
export default function HardSkillCard(){
    return (
        <div className="bg-white text-black w-70 h-60 rounded-xl p-1">
            <div className="text-xs font-bold flex items-center space-x-1">
             <FaCode className="inline"/>
             <p className="inline text-bol">Key Skills</p>
            </div>
        </div>
    );
}