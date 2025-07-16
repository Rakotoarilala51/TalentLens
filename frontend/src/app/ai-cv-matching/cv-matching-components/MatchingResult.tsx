"use client";
import { job } from "@/types";
import JobDescription from "./JobDescription";
type Props = {
    job:job
}
export function MatchingResult({job}:Props) {
  return (
    <div className="bg-white w-210 rounded-2xl">
      <div className="bg-gradient-to-r from-orange-300 to-pink-600 rounded-t-2xl h-10 p-2">
        <h3 className="font-bold text-white">Matching Results</h3>
      </div>
      <div className="p-1">
        <JobDescription job={job}/>
      </div>
    </div>
  );
}
