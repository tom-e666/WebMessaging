'use client'
import {useState} from "react";
import * as Utils from "@/lib/firebaseUtils"
type FunctionType=((input:string)=>string)|(()=>string);
const Component=({fn,name}:{fn:FunctionType,name:string})=>
{
    const [functionValue,setFunctionValue]=useState("");
    const [functionOutput,setFunctionOutput]=useState("");

    return (
        <div className="w-full h-8 bg-pink-500 mb-2 flex flex-row gap-1 ">
            <input
            value={functionValue}
            onChange={event=>setFunctionValue(event.target.value)}
            className="p-1 w-1/3 h-fit"
            />
            <p className="w-1/4">
            {name}</p>
            <div className="w-1/12">
                <button onClick={() => {
                    setFunctionOutput(fn(functionValue))
                }} className="rounded-md bg-blue-600 h-full" >Run
                </button>
            </div>
            <p className="px-1 w-1/3 bg-black ">{functionOutput}</p>
        </div>
    )
}
export default function Page() {
    return (
        <div className=" w-full h-full flex flex-col bg-white p-2 inset-2">
            {
                Object.entries(Utils).map(([name,func],index)=>(<Component fn={func as FunctionType} name={name} key={index}/> ))
            }
        </div>
    )
}



