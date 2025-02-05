//post create user
import {NextRequest, NextResponse} from "next/server";
import {createUser,getUserDataByID} from "@/lib/firebaseUtils";

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
export async function GET(req:NextRequest)
{
    try{
        const data= await req.json();
        if(!data.userID)
            return NextResponse.json({error:"Missing user ID",status:400});
        const userData= await getUserDataByID(data.userID);
        return NextResponse.json({success:true,userData},{status:200});
    }
    catch(e)
    {
        console.log(`${e}`);
        return NextResponse.json({error:"Internal Server Error"},{status:500});
    }

}