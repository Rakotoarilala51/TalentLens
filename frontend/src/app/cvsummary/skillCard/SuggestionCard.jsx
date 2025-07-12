"use client";
import { IoBulbOutline } from "react-icons/io5";
export default function SuggestionCard(){
    return (
        <div className="bg-white text-black w-70 h-60 rounded-xl p-1">
            <div className="text-xs font-bold flex items-center space-x-1">
             <IoBulbOutline className="inline"/>
             <p className="inline">Suggestions</p>
            </div>
        </div>
    );
}