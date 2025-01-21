'use client'
import React, {useContext, useEffect} from "react";
import Image from 'next/image';
import {MessageContext} from "@/app/page"
function GroupsView(){
    const [badgeData,setBadgeData] = React.useState<BadgeData[]>([]);
    const [selectedBadge,setSelectedBadge]= React.useState<number>(-1);
    const chatContext=useContext(MessageContext);
    if(!chatContext){
        console.log("can context is not provided!")
    }
    useEffect(() => {
        //handle obtaining data

        setBadgeData([{
            chatId:'1',
            imgPath:'/file.svg',
            title:'Sample',
        },
            {
                chatId:'2',
            imgPath:'/file.svg',
            title:'Sample',

        },
            {
                chatId:'3',
                imgPath:'/file.svg',
                title:'Sample',
            },
            {
                chatId:'4',
                imgPath:'/file.svg',
                title:'Sample',
            },
        ])
    },
        []);
    return (
        <div className="w-2/5 h-dvh bg-white p-2">
            <div className="w-full h-full  decoration-amber-950">
                {!badgeData &&
                    <div className="justify-center">
                            Available Chats are loading, please wait
                    </div>
                }
                {!!badgeData &&
                <ul className="flex-row justify-center  divide-y">
                    {badgeData.map((item, index) => (
                        <li key={index}
                            className={`flex w-full bg-amber-200 p-1 ${selectedBadge===index ? "bg-blue-400" : "bg-white"} hover:bg-blue-400`}
                        onClick={()=>{setSelectedBadge(index);chatContext!.setChatRoomID(badgeData[index].chatId)}}>
                            <div className="w-10 h-1 0 rounded-full">
                                <Image src={item.imgPath} width="15" height="15" alt="image title"/>
                            </div>
                            <div>
                                <div className="text-small font-bold text-black overflow-x-hidden">{item.title}</div>
                                <div>
                                    <div className="text-small text-black overflow-x-hidden">some sample</div>

                                </div>
                            </div>
                        </li>
                    ))
                    }
                </ul>}
            </div>
        </div>
    )
}
interface BadgeData{
    chatId:string,
    imgPath:string,
    title:string,
}
export default GroupsView;