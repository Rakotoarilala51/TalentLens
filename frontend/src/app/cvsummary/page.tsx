"use client"
import CvUpload from "@/components/CvUpload";
import SummaryList from "./SummaryList"
export default function cvsummary(){
    return (
        <div className="mt-5">
            <h2 className="font-semibold">CV SUMMARY</h2>
            <div className="flex justify-between">
                {/*cv */}
                <CvUpload/>
                <SummaryList/>
            </div>
        </div>
    );
}