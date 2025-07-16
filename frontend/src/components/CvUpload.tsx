"use client";
import { useState, FormEvent } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import { summary } from "@/types";
type childProps = {
  setIsLoading : React.Dispatch<React.SetStateAction<boolean>>;
  setData : React.Dispatch<React.SetStateAction<summary>>;
}

export default function CvUpload({setIsLoading, setData}:childProps) {
  const [selectedDocs, setSelectedDocs] = useState<File | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  async function onSubmit(event:FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    formData.append("file", selectedDocs);
    const response = await fetch(`http://localhost:8000/ask/summarize-cv`, {
      method:'POST',
      body: formData
    })
    const data = await response.json()
    console.log(data)
    setData(data)
    setIsLoading(false)

  }
  return (
    <div className="flex flex-col bg-white p-2 rounded-lg font-bold">
      <span className="ml-2">Upload your CV Here</span>

      <div className="m-2 h-[400px] bg-stone-100 rounded-lg w-100 overflow-hidden p-3 relative">
        {selectedDocs && (
          <DocViewer
            documents={[
              {
                uri: window.URL.createObjectURL(selectedDocs),
                fileName: "",
              },
            ]}
            style={{ height: "50%", width: "100%" }}
            pluginRenderers={DocViewerRenderers}
          />
        )}

        {selectedDocs && (
          <div
            className="absolute top-1 right-2 z-10 bg-red-600/40 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-600 cursor-pointer"
            onClick={() => setSelectedDocs(null)} 
          >
            <FaTrash className="m-1" />
          </div>
        )}
      </div>

      <form
        action="#"
        onSubmit={onSubmit}
      >
        {!selectedDocs ? (
          <div className="m-2 border border-pink-500 p-1 rounded-lg flex flex-col items-center justify-center">
            <label htmlFor="cv-upload" className="text-pink-500 flex items-center cursor-pointer">
              Import CV
              <IoCloudUploadOutline className="text-pink-500 m-1" />
            </label>
            <input
              type="file"
              className="hidden"
              name="file"
              id="cv-upload"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (file) {
                  setSelectedDocs(file);
                }
              }}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-gradient-to-b from-violet-700 to-violet-400 text-white m-2 rounded-lg w-30 ring-3 ring-violet-200 px-3 py-1"
          >
            ✨ Generate
          </button>
          </div>
        )}
      </form>
    </div>
  );
}
