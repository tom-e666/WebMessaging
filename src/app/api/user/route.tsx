import {NextRequest, NextResponse} from "next/server";

export async function GET(){
    return NextResponse.json(
        { message: "Welcome to the Education!" },
        {status: 200}
    );
}
export async function POST(req: NextRequest){
    try {
        const body= await req.json();
        if(!body.name || !body.email)
        {
            return NextResponse.json(
                {error: "Please enter a valid email address"},
            {status:400}
            );
        }
        const user ={
            id:Date.now(),
            name:body.name,
            email:body.email,
        };
        return NextResponse.json(user,{status:200});
    }catch (error)
    {
        console.log(error);
        return NextResponse.json({error:"Something went wrong"},{status:200});
    }
}