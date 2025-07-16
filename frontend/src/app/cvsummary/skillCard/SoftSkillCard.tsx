"use client";
import { TbTargetArrow } from "react-icons/tb";

type SoftSkillCardProps = {
  softSkills: string[];
  isLoading: boolean;
};

export default function SoftSkillCard({ softSkills, isLoading }: SoftSkillCardProps) {
  return (
    <div className="bg-white text-black w-70 h-60 rounded-xl p-2">
      <div className="text-xs font-bold flex items-center space-x-1 mb-2">
        <TbTargetArrow />
        <p className="inline font-bold">Soft Skills</p>
      </div>

      <div className="text-sm overflow-y-auto max-h-[calc(100%-2.5rem)]">
        {isLoading ? (
          <div className="space-y-2 animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          </div>
        ) : (
          softSkills.length > 0 ? (
            <ul className="list-disc list-inside">
              {softSkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No soft skills available.</p>
          )
        )}
      </div>
    </div>
  );
}
