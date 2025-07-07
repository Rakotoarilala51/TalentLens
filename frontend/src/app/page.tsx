"use client";

import { motion } from "framer-motion";
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
  },
  {
    icon:MdRecordVoiceOver,
    title:"Interview Prep",
    description:"Prepare HR interview + a little bit of technical interview based on you cv"
  }
]
const contenairVarient = {
  hidden:{},
  visible:{
    transition:{
      staggerChildren: 0.3,
    }
  }
}
const cardVarient={
  hidden:{opacity:0, y: 30},
    visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
export default function Home() {
  return (
    <div>
      <div className="flex items-center space-x-2">

          <motion.div className="w-xl "
            initial={{opacity:0, y:-50}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.8, ease:"easeOut"}}
          >
            <h1 className="font-bold lg:text-6xl md:text-xl">Unlock Your <span className="bg-gradient-to-br from-pink-500 via-pink-400 to-orange-400 bg-clip-text text-transparent">Career</span> Potential with <span className="bg-gradient-to-br from-pink-500 via-pink-400 to-orange-400 bg-clip-text text-transparent">AI</span></h1>
            <p className="m-2 lg:text-xl md:text-sm">Leverage the power of Artifical Intelligence to find your next job opportunity</p>
          </motion.div>

          <motion.div className="ml-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
              <Image alt="logo" src="/logooo.png" width={600} height={100}/>
          </motion.div>
      </div>
      <motion.div className="flex justify-between gap-1"
        variants={contenairVarient}
        initial="hidden"
        animate="visible"
      >
        {
          cardList.map(({icon,title, description}, idx)=>(
            <motion.div key={idx} variants={cardVarient}>
            <Card  icon={icon} title={title} description={description}/>
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}
