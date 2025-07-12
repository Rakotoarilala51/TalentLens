"use client";
import GeneralSummary from "./GeneralSummary"
import LinkedInBio from "./LinkedInBio"
import HardSkillCard from "./skillCard/HardSkillCard"
import SoftSkillCard from "./skillCard/SoftSkillCard"
import SuggestionCard from "./skillCard/SuggestionCard"
export default function SummaryList(){
    return (
        <div className="bg-white w-210 rounded-2xl">
            <div className="bg-gradient-to-r from-orange-300 to-pink-600 rounded-t-2xl h-10 p-2">
                <h3 className="font-bold text-white">Summary Lists</h3>
                <div className="bg-stone-200 h-110 w-[100%] mt-4 rounded-lg p-2 space-y-1">
                    <GeneralSummary/>
                    <LinkedInBio/>
                    <div className="flex justify-between space-x-2">
                        <HardSkillCard/>
                        <SoftSkillCard/>
                        <SuggestionCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}