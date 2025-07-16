"use client";
import CvUpload from "./cv-matching-components/CvUpload";
import { useState } from "react";
export default function aiCvMatching(){
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<string>("") //mbola ovaina koa bakany
    return (
        <div className="mt-5">
            <h2 className="font-semibold">CV matching</h2>
            <div className="flex justify-between">
                {/*cv */}
                <CvUpload setData={setData} setIsLoading={setIsLoading}/>
            </div>
        </div>
    );
}