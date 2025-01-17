'use client'
import React, {createContext} from "react";
import GroupsView from "@/app/GroupsView";
import MessageView from "@/app/MessageView";
type MessageContextType = {
    messageID:string;
    userID:string;
    setMessageID(id:string):void;
    setUserID(userID:string):void;
};
const MessageContext=createContext<MessageContextType|undefined>(undefined)

export default function Home() {
    const [useCase] = React.useState<string>("Initial");
    const [messageID, setMessageID] = React.useState<string>("");
    const [userID, setUserID] = React.useState<string>("");
    return (
        <>
        <MessageContext.Provider value={{messageID,userID,setMessageID,setUserID}}>
            {useCase === "Initial" &&
                <div className="flex"   >
                <GroupsView></GroupsView>
                    <MessageView></MessageView>
                </div>}
        </MessageContext.Provider>
        </>
    )
}
export {MessageContext}

