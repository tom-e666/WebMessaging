
import {useChatContext} from "@/app/context";
import {isEmpty} from "@firebase/util";

export default function MessageView()
{
    const {context:ChatContext} = useChatContext();
    if(!!ChatContext && !isEmpty(ChatContext) && ('groupID' in ChatContext))
        return <div className="w-lvw h-dvh bg-blue-400 flex justify-center items-center">
            {ChatContext['groupID']}
        </div>
    return <div className="w-lvw h-dvh bg-blue-400 flex justify-center items-center">
        Please find for yourself a conversation
    </div>


}
