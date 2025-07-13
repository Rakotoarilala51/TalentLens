"use client";
import Link from "next/link";
import Image from "next/image";
import {route} from "@/types"
const links:route[]=[
    {href:"/cvsummary", label:"CV Summary"},
    {href:"/ai-cv-matching", label:"AI CV Matching"},
    {href:"/interview-prep", label:"Interview preparation"},
    {href:"/job-searching", label:"Offer Searching"},
]
export default function Navbar(){

    return (
        <div className="bg-white w-full p-1 flex justify-between rounded-xl">
            <Link href="/">
             <Image alt="" src="/Logo.png" width={80} height={50}/>
            </Link>
            
            <div className="flex justify-between space-x-5">
                {
                    links.map((link, idx)=>(
                         <Link key={idx} href={link.href} className="font-bold">{link.label}</Link>
                    ))
                }
               
            </div>
            <div>

            </div>
        </div>
    );
}