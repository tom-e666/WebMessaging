//post create user
import {NextRequest, NextResponse} from "next/server";
import {createUser} from "@/lib/firebaseUtils";

export async function POST(req:NextRequest)
{

    try {
        const data= await req.json();
        if(!data.name)
            return NextResponse.json({error:"Missing name"},{status:400});
        const user=await createUser(data);
        return NextResponse.json({success:true,user},{status:201});

    }catch(e)
    {
        console.log(`${e}`);
        return NextResponse.json({error:"Internal Server Error"},{status:500});
    }
}