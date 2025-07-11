"use client"

import {IoCloudUploadOutline} from "react-icons/io5"
export default function cvsummary(){
    return (
        <div className="mt-5">
            <h2 className="font-semibold">CV SUMMARY</h2>
            <div className="flex justify-between">
                {/*cv */}
                <div className="flex flex-col bg-white p-2 rounded-lg">
                    Upload your CV
                    <div className="m-2 h-100 bg-stone-100 rounded-lg w-100">
                        {/*render the first page of pdf here bro */}
                    </div>
                    <div className="m-2 border border-pink-500 p-1 rounded-lg flex items-center justify-center">
                        <label htmlFor="cv-upload" className=" text-pink-500">
                            Upload CV
                        </label>
                         <IoCloudUploadOutline className="text-pink-500 m-1"/>
                        <input type="file" className="hidden" id="cv-upload" />
                    </div>
                </div>
            </div>
        </div>
    );
}