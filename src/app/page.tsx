'use client'
import React, {useEffect} from "react";
import GroupsView from "@/app/GroupsView";
import MessageView from "@/app/MessageView";
import LogForm from "@/app/login"
import {AuthProvider, ChatProvider, useAuthContext} from "@/app/context";
import {isEmpty} from "@firebase/util";
export default function Page(){
    return(
        <AuthProvider>
            <ChatProvider>
                <Home/>
            </ChatProvider>
        </AuthProvider>
    )
}
function Home() {
    const [refreshKey, setRefreshKey] = React.useState<number>(0);
    const {context} = useAuthContext();
    useEffect(() => {
        console.log(context);
    }, [context]);
    if(isEmpty(context))
        return (

            <div className="w-screen h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 flex items-center justify-center flex-col ">
                    <p className="font-serif text-blue-200 text-2xl">Let's have a talk!</p>
                    <button
                        type="button"
                        onClick={()=>{setRefreshKey(refreshKey+1)}}
                        className="bg-blue-400 items-center content-center rounded px-5 py-1.5"
                    >let's go</button>
                {refreshKey>=1 && <LogForm key={refreshKey}/>}
        </div>
        )
    return (

                <div className="flex flex-row"   >
                <GroupsView></GroupsView>
                    <MessageView></MessageView>
                </div>
    )
}

