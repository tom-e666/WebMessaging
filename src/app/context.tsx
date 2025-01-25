import React, {createContext, useContext} from "react";
type ContextType ={
    context:object;
    setContext: (context:object) => void;
}
const AuthContext=createContext<ContextType>({
    context:{},
    setContext:()=>{
        throw new Error("setContext is not overloaded")
    }
});
const AuthProvider=({children}:{children:React.ReactNode}) => {
    const [context, setContext] = React.useState<object>({});
    return (
        <AuthContext.Provider value={{context, setContext}}>
            {children}
    </AuthContext.Provider>)
}
const useAuthContext=()=>{
    const auth=useContext(AuthContext);
    if(!auth) {
        throw new Error("Auth provider uninitialized")
    }
    return auth;
}
const ChatContext=createContext<ContextType>({
    context:{},
    setContext():void{
        throw new Error("setContext is not overloaded")
}
})
const ChatProvider=({children}:{children:React.ReactNode})=> {
    const [context, setContext] = React.useState<object>({});
    return (
        <ChatContext.Provider value={{context, setContext}}>
            {children}
        </ChatContext.Provider>
    )
}
const useChatContext=()=>{
    const chat=useContext(ChatContext);
    if(!chat)
    {
        throw new Error("useChatContext is not overloaded")
    }
    return chat;
}
export {AuthProvider,useAuthContext,ChatProvider,useChatContext};
