'use client'
import React, {createContext} from "react";
import GroupsView from "@/app/GroupsView";
import MessageView from "@/app/MessageView";
import LogForm from "@/app/login"
import {AuthContext,GroupContext} from "@/app/context";
type MessageContextType = {
    ChatRoomID:string;
    userID:string;
    setChatRoomID(id:string):void;
    setUserID(userID:string):void;
};
const MessageContext=createContext<MessageContextType|undefined>(undefined)

export default function Home() {
    const [useCase] = React.useState<string>("Initial");
    const [ChatRoomID, setChatRoomID] = React.useState<string>("");
    const [userID, setUserID] = React.useState<string|undefined>(undefined);
    const [logFormState, setLogFormState] = React.useState<boolean>(false);
    const [refreshKey, setRefreshKey] = React.useState<number>(0);
    if(!userID)
        return (
            <div className="w-screen h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 flex items-center justify-center flex-col ">
                    <p className="font-serif text-blue-200 text-2xl">Let's have a talk!</p>
                    <button
                        type="button"
                        onClick={()=>{setRefreshKey(refreshKey+1)}}
                        className="bg-blue-400 items-center content-center rounded px-5 py-1.5"
                    >let's go</button>
                {refreshKey>=1 && <LogForm key={refreshKey}/>}
        </div>)
    return (
        <GroupContext value={null}>
        <AuthContext value={null}>
        <MessageContext.Provider value={{ChatRoomID,userID,setChatRoomID,setUserID}}>
            {useCase === "Initial" &&
                <div className="flex"   >
                <GroupsView></GroupsView>
                    <MessageView></MessageView>
                </div>}
        </MessageContext.Provider>
        </AuthContext>
        </GroupContext>
    )
}
export {MessageContext}

