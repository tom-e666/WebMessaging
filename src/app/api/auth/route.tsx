import {NextResponse} from "next/server";

export async function GET(){//temporary, get userID, chat ID
    try {
        return NextResponse.json({
            "userId":1
        },{status:200})
    }catch(e)
    {
        return NextResponse.json({
            "message": `Failed to fetch users`,
            "errorcode":`${e}`
        },{status:400})
    }
}