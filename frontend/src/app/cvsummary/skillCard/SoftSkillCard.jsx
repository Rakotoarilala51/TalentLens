"use client";
import { TbTargetArrow } from "react-icons/tb";
export default function SoftSkillCard(){
    return (
        <div className="bg-white text-black w-70 h-60 rounded-xl p-1">
            <div className="text-xs font-bold flex items-center space-x-1">
             <TbTargetArrow className="inline"/>
             <p className="inline">Soft Skills</p>
            </div>
        </div>
    );
}