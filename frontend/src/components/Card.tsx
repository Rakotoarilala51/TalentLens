import { IconType } from "react-icons";
import { cardProps } from "@/types";

export default function Card({
  icon: Icon,
  title: Titre,
  description: Desc,
}: cardProps) {
  return (
    <div
      className="bg-white shadow-2xl 
    rounded-xl flex flex-col w-64 space-x-1 p-2 
    transition-transform duration-300 
    hover:scale-105 hover:ring-2 
    hover:ring-pink-500/60
    hover:ring-offset-2
    hover:ring-offset-pink-300
    "
    >
      <div className="p-2">
        <Icon className="text-pink-500" size={50} />
      </div>
      <h1 className="font-bold">{Titre}</h1>
      <p>{Desc}</p>
    </div>
  );
}
