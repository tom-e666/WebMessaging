
import {useChatContext} from "@/app/context";
import React, {useEffect, useState} from "react";
interface MessageProps
{
    sender?:string;
    type?:string;
    content?:string;
    timestamp?:string;
}
const mockMessageData=[
    {sender:"bottle",
    type:"message",
    content:"Hello World!"},
    {sender:"",
        type:"message",
        content:"Hello World!"},
    {sender:"",
        type:"message",
        content:"Hello World!"},
    {sender:"bottle",
        type:"message",
        content:"Hello World!"},
]
export default function MessageView()
{

    const [groupID, setGroupID] = useState<string>("");
    const [messageData,setMessageData]=React.useState<MessageProps[]>([]);
    const {context:chatContext} = useChatContext();
    useEffect(() => {
        setGroupID(()=>{
            return chatContext['groupID']})
        if(groupID==='1')
        {
            setMessageData(mockMessageData)
        }
    }, [chatContext]);

    return (
        <div className= "bg-pink-700 w-full ">
            hey, where is my content?
        </div>
    )

}
// const SingleMessageBox=(props:MessageProps) => {
//     return (
//         <div className={`w-fit h-fit p-1 bg-blue-700 text-amber-50`}>
//
//         </div>
//     )
// }