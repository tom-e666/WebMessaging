import {useContext} from "react";
import {Context} from "@/app/page"
export default function MessageView()
{
    const {messageID}=useContext(Context);
    if(messageID==="null")
        return (
            <div className="w-lvw h-dvh bg-blue-400">
                Please choose a conversation
            </div>
        )
    else
        return (<div>hello to folk</div>)
}
