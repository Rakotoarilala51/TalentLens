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
      <div className="">
        <span className="font-bold">1400</span><span className="text-xs text-gray-400">$/month</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="border border-gray-400 text-xs flexitems-center justify-center text-gray-400 rounded-sm p-0.5">Fulltime</span>
        <span className="border border-gray-400 text-xs flexitems-center justify-center text-gray-400 rounded-sm p-0.5">technology</span>
      </div>
    </div>
  );
}
