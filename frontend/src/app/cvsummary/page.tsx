"use client";
import CvUpload from "@/components/CvUpload";
import SummaryList from "./SummaryList";
import { useState } from "react";
import { summary } from "@/types";
export default function cvsummary() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, SetData] = useState<summary>({
    generalSummary: "",
    linkedInBio: "",
    keySkills: [],
    softSkills: [],
    suggestions: "",
  });
  return (
    <div className="mt-5">
      <h2 className="font-semibold">CV SUMMARY</h2>
      <div className="flex justify-between">
        {/*cv */}
        <CvUpload setData={SetData} setIsLoading={setIsLoading}/>
        <SummaryList isLoading={isLoading} resume={data}/>
      </div>
    </div>
  );
}
