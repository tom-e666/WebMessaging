'use client'
import React, {createContext} from "react";
import GroupsView from "@/app/GroupsView";
import MessageView from "@/app/MessageView";
const Context=createContext({messageID:"null"})

export default function Home() {
    const [useCase] = React.useState<string>("Initial");
    return (
        <>
        <Context.Provider value={{messageID:"null"}}>
            {useCase === "Initial" &&
                <div className="flex"   >
                <GroupsView></GroupsView>
                    <MessageView></MessageView>
                </div>}
        </Context.Provider>
        </>
    )
}
export {Context}

