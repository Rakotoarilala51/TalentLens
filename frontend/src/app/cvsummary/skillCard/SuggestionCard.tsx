"use client";
import { IoBulbOutline } from "react-icons/io5";

type SuggestionCardProps = {
  suggestions: string[];
  isLoading: boolean;
};

export default function SuggestionCard({ suggestions, isLoading }: SuggestionCardProps) {
  return (
    <div className="bg-white text-black w-70 h-60 rounded-xl p-2">
      <div className="text-xs font-bold flex items-center space-x-1 mb-2">
        <IoBulbOutline />
        <p className="inline font-bold">Suggestions</p>
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
          suggestions.length > 0 ? (
            <ul className="list-disc list-inside">
              {suggestions.map((suggestion, idx) => (
                <li key={idx}>{suggestion}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No suggestions available.</p>
          )
        )}
      </div>
    </div>
  );
}
