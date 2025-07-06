import { div } from "framer-motion/client";
import Image from "next/image";
import Card from "@/components/Card";
import { TbFileCv } from "react-icons/tb";
import { MdWorkOutline, MdRecordVoiceOver } from "react-icons/md";
import { cardProps} from "@/types";

const cardList:cardProps[]=[
  {
    icon:TbFileCv,
    title:"AI CV summary",
    description:"get a full cv breakpoint by ai"
  },
  {
    icon:MdWorkOutline,
    title:"Job Matching",
    description:"Check how much your skills match with a job offer"
  },
  {
    icon:MdRecordVoiceOver,
    title:"Interview Prep",
    description:"Prepare HR interview + a little bit of technical interview based on you cv"
  }
]
export default function Home() {
  return (
    <div>
      <div className="flex items-center space-x-2 m-10">
          <div className="m-4 w-xl ">
            <h1 className="font-bold text-6xl">Unlock Your <span className="bg-gradient-to-br from-pink-500 via-pink-400 to-orange-400 bg-clip-text text-transparent">Career</span> Potential with <span className="bg-gradient-to-br from-pink-500 via-pink-400 to-orange-400 bg-clip-text text-transparent">AI</span></h1>
            <p className="m-2 text-xl">Leverage the power of Artifical Intelligence to find your next job opportunity</p>
          </div>
          <div className="ml-2">
              <Image alt="logo" src="/logooo.png" width={600} height={100}/>
          </div>
      </div>
      <div className="flex justify-between ml-20 mr-20 gap-1">
        {
          cardList.map(({icon,title, description}, idx)=>(
            <Card key={idx} icon={icon} title={title} description={description}/>
          ))
        }
      </div>
    </div>
  )
}
