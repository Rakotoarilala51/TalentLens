"use client";
import GeneralSummary from "./GeneralSummary";
import LinkedInBio from "./LinkedInBio";
import HardSkillCard from "./skillCard/HardSkillCard";
import SoftSkillCard from "./skillCard/SoftSkillCard";
import SuggestionCard from "./skillCard/SuggestionCard";
import { summary } from "@/types";

type Props = {
  resume: summary;
  isLoading: boolean;
};

export default function SummaryList({ resume, isLoading }: Props) {
  return (
    <div className="bg-white w-210 rounded-2xl">

      <div className="bg-gradient-to-r from-orange-300 to-pink-600 rounded-t-2xl h-10 p-2">
        <h3 className="font-bold text-white">Summary Lists</h3>
      </div>


      <div className="bg-stone-200 h-110 mt-4 rounded-lg p-2 m-2 space-y-1 overflow-y-auto">
        <GeneralSummary
          generalSum={resume.generalSummary}
          isLoading={isLoading}
        />
        <LinkedInBio
          linkedinBio={resume.linkedInBio}
          isLoading={isLoading}
        />
        <div className="flex justify-between space-x-2">
          <HardSkillCard
            hardSkills={resume.keySkills}
            isLoading={isLoading}
          />
          <SoftSkillCard
            softSkills={resume.softSkills}
            isLoading={isLoading}
          />
          <SuggestionCard
            suggestions={resume.suggestions}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
