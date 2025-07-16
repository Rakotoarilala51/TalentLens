import { IconType } from "react-icons"
export type cardProps = {
    icon:IconType;
    title:string;
    description:string;
}
export type route ={
    href:string,
    label:string
}
export type summary ={
    generalSummary:string,
    linkedInBio:string,
    keySkills:string[],
    softSkills:string[],
    suggestions:string
}
export type job = {
    title: string,
    city:string,
    country: string,
    salary: string,
    tags:string[]
}