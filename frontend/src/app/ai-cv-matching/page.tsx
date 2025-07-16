"use client";
import CvUpload from "./cv-matching-components/CvUpload";
import { useState } from "react";
import { MatchingResult } from "./cv-matching-components/MatchingResult";
import { job } from "@/types";
export default function aiCvMatching() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<string>(""); //mbola ovaina koa bakany
  const [poste, setPoste] = useState<job>({
    title: "",
    city: "",
    country: "",
    salary: "",
    tags: [],
  });
  return (
    <div className="mt-5">
      <h2 className="font-semibold">CV matching</h2>
      <div className="flex justify-between gap-1">
        {/*cv */}
        <CvUpload setData={setData} setIsLoading={setIsLoading} />
        <MatchingResult job={poste}/>
      </div>
    </div>
  );
}
