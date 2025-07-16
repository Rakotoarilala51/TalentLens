"use client";
import { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

type GeneralSummaryProps = {
  generalSum: string;
  isLoading: boolean;
};

export default function GeneralSummary({ generalSum, isLoading }: GeneralSummaryProps) {
  function handleCopy() {
    if (!generalSum) return;
    navigator.clipboard.writeText(generalSum);
  }

  return (
    <div className="bg-white h-20 rounded-lg p-1">
      <div className="flex justify-between">
        <div className="flex items-center">
          <CiGlobe className="text-xs mr-1 font-bold" />
          <p className="text-xs font-bold">General Summary</p>
        </div>

        <span
          className={`text-xs font-semibold flex items-center cursor-pointer ${
            isLoading ? "pointer-events-none opacity-50" : ""
          }`}
          onClick={handleCopy}
        >
          <FaRegClipboard className="mr-1" />
          Copy
        </span>
      </div>

      <div className="p-1 text-sm max-h-12 overflow-y-auto">
        {isLoading ? (
          <div className="animate-pulse bg-gray-300 h-12 rounded w-full" />
        ) : (
          <span className="whitespace-pre-wrap">{generalSum}</span>
        )}
      </div>
    </div>
  );
}
