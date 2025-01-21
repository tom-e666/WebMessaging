import React, {createContext, useContext} from "react";

const AuthContext:React.Context<{ userID: string; setUserID: (s: string) => void }>= createContext(
    {userID:"",setUserID:(s:string)=>{}}
)
type MessageInf={
    sender:string;
    type:string;
    content:string;
    timestamp?:string;
}
type MessageGroup={
    name?:string;
    id:string;
    icon?:string;
    MessageInf?:MessageInf[];
}
type GroupContext={
    userID:string;
    messageGroup?:MessageGroup[];
}
const GroupContext:React.Context<GroupContext>= createContext({userID:"",});

export {AuthContext,GroupContext}

