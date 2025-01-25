'use client'
import React, { useEffect} from "react";
import Image from 'next/image';
import {useAuthContext,useChatContext} from "@/app/context";

function GroupsView(){
    const [badgeData,setBadgeData] = React.useState<BadgeData[]>([]);
    const [selectedBadge,setSelectedBadge]= React.useState<number>(-1);

    const {context:chatContext,setContext:setChatContext} = useChatContext();
    console.log(chatContext);
    useEffect(() => {
        //handle obtaining data

        setBadgeData([{
            groupID:'1',
            imgPath:'/file.svg',
            title:'Sample',
        },
            {
                groupID:'2',
            imgPath:'/file.svg',
            title:'Sample',
        },
            {
                groupID:'3',
                imgPath:'/file.svg',
                title:'Sample',
            },
            {
                groupID:'4',
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
                        onClick={()=>{setSelectedBadge(index);setChatContext((context:object)=>{return {...context,groupID:badgeData[index].groupID}})}}>
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
    groupID:string,
    imgPath:string,
    title:string,
}
export default GroupsView;