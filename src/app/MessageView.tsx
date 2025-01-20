import {useContext} from "react";
import {MessageContext} from "@/app/page"

export default function MessageView()
{
    const context=useContext(MessageContext);
    if(!context)
        return <div className="w-lvw h-dvh bg-blue-400 flex justify-center items-center">
            Please choose a conversation!
        </div>

    return (<div>group chat {context.messageID}</div>)
}
