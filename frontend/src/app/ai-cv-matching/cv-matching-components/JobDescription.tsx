"use client";
import { job } from "@/types";
type Props = {
  job: job;
};
export default function JobDescription({ job }: Props) {
  return (
    <div className="">
      <h3 className="text-xl font-bold">Dev Full Stack</h3>
      <span className="text-xs text-gray-400">
        <p className="inline">Akata goavana</p>
        <span className="bg-gray-400 h-1 w-1 rounded-full inline-block m-0.5"></span>
        <p className="inline">Fianarantsoa,</p>
        <p className="inline">Madagascar</p>
      </span>
      <div>
        <span>1400</span>
      </div>
    </div>
  );
}
