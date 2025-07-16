"use client";
import { FaRegClipboard } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

type LinkedInBioProps = {
  linkedinBio: string;
  isLoading: boolean;
};

export default function LinkedInBio({ linkedinBio, isLoading }: LinkedInBioProps) {
  function handleCopy() {
    if (!linkedinBio) return;
    navigator.clipboard.writeText(linkedinBio);
  }

  return (
    <div className="bg-white h-30 rounded-lg p-1">
      <div className="flex justify-between">
        <div className="flex items-center">
          <CiLinkedin className="text-xs mr-1 font-bold" />
          <p className="text-xs font-bold">LinkedIn Bio</p>
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

      <div className="m-1 text-sm min-h-[4.5rem]">
        {isLoading ? (
          <div className="animate-pulse bg-gray-300 h-full rounded w-full" />
        ) : (
          <pre className="whitespace-pre-wrap">{linkedinBio}</pre>
        )}
      </div>
    </div>
  );
}
