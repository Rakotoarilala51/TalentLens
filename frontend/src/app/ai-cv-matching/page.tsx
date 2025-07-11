import CvUpload from "@/components/CvUpload";
export default function aiCvMatching(){
    return (
        <div className="mt-5">
            <h2 className="font-semibold">CV matching</h2>
            <div className="flex justify-between">
                {/*cv */}
                <CvUpload/>
            </div>
        </div>
    );
}