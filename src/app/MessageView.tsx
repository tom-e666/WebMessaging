import { useChatContext } from "@/app/context";
import React, { useEffect, useState } from "react";

interface MessageProps {
    sender?: string;
    type?: string;
    content?: string;
    timestamp?: string;
}

const mockMessageData = [
    {
        sender: "bottle",
        type: "message",
        content:
            "If you want something miracle, why don't you go work for yourself? The best solution forever.",
    },
    { sender: "", type: "message", content: "Hello World!" },
    { sender: "", type: "message", content: "Hello World!" },
    { sender: "bottle", type: "message", content: "Hello World!" },
];

export default function MessageView() {
    const [messageData, setMessageData] = useState<MessageProps[]>([]);
    const { context: chatContext } = useChatContext();
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const groupID = chatContext?.groupID;
        if (groupID === "1") {
            setMessageData(mockMessageData);
        } else {
            setMessageData([]);
        }
        console.log("Updated chatContext:", chatContext);
    }, [chatContext]);

    return (
        <div className="bg-pink-700 w-full flex flex-col p-1">
            {messageData.map((childProps: MessageProps, key) => (
                <SingleMessageBox key={key} {...childProps} />
            ))}
        </div>
    );
}

const SingleMessageBox = (props: MessageProps) => {
    if (props.sender === "") {
        return (
            <div dir="ltr">
                <div className="bg-blue-500 w-fit max-w-96 rounded-md px-2 py-1 my-1">
                    {props.content}
                </div>
            </div>
        );
    } else {
        return (
            <div dir="rtl">
                <div
                    dir="ltr"
                    className="bg-blue-500 w-fit max-w-96 rounded-md px-2 py-1 my-1 place-content-evenly"
                >
                    {props.content}
                </div>
            </div>
        );
    }
};
