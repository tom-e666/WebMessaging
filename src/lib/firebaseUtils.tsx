import {addDoc, arrayRemove, arrayUnion, collection, doc, getDoc, updateDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase";

export interface User{
    userID:string,
    name:string,
    icon:string,
    groupChats:string[],
}
export interface GroupBadge{
    groupID:string,
    icon:string,
    lastMessage:string,
    upTime:string,
}
export interface Message{
    senderId:string,
    type:string,
    content:string,
    upTime:string,
}
export interface GroupChat{
    groupID:string,
    groupName:string,
    members:string[],
    owners:string[],
    body:Message[],
    meta:{}
}

export async function createUser(userData:User)
{
    if(!userData?.userID || !userData?.name)
        return {"message":"error! User ID not provided"}
    try{
        const docRef=await addDoc(collection(db,"users"),userData)
        return {"message":"successfully created user",userID:docRef.id,}
    }catch(error){
        return {"message":"error creating user",error:(error as Error).message}
    }
}
export async function getUserDataByID(userID:string)
{
    if(!userID)
        return {"message":"error! User ID not provided"}
    try{
        const docData=await getDoc(doc(db,"users",userID));
        return {"message":"successfully getUserData",userData:docData}
    }catch(error){
        return {"message":"error retrieving user",error:(error as Error).message}
    }
}
export async function createGroupChat(groupData: Partial<GroupChat>)//require name and members
{
    if(!groupData || !groupData.groupName ||!groupData.members)
        return {"message":"error! Group ID or member are not provided"}



    try {
        const groupChat= groupData as GroupChat;
        const docRef= await addDoc(collection(db,"groups"),groupChat);
        await addUserToGroupChat(groupChat.members,groupChat.groupID)
        return {"message":"successfully created group",groupID:docRef.id,}
    }catch(error){
        return {"message":"error creating group",error:(error instanceof Error)?error.message:"Unknown error"};
    }
}
async function addUserToGroupChat(members: string[], groupID: string) {
    if(!members) return {"message":"error! User ID not provided"}
    if(!groupID) return {"message":"error! Group ID not provided"}
    try{
        for (const member of members) {
            const docRef=doc(db,"users",member);
            await updateDoc(docRef,{
                groupChats: arrayUnion(groupID)
            })
        }
    }catch (e)
    {
        return {"message":"error creating group",error:(e)}
    }
}
export async function loadGroupChatData(groupID:string){
    if(!groupID)
        return {"message":"error! Group ID not provided"}
    try {
        {
            const data=await getDoc(doc(db,"groups",groupID));
            return {"message":"successfully loaded group",data}
        }
    }catch(error){
        return {"message":"error creating group",error:(error instanceof Error)?error.message:"Unknown error"};
    }
}

export async function sendMessage(groupID:string,messageData:Message){

    if(!groupID) return {"message":"error! Group ID not provided"}
    if(!messageData) return {"message":"error message data"}
    try {
        const docRef=doc(db,"groups",groupID);
        await updateDoc(docRef,{
            body: arrayUnion(messageData)
        })
    }
    catch(e)
    {
        return {"message":"error creating group",error:(e)}
    }
}
export async function getMembersFromGroupChatByOwner(groupID:string,requesterID:string){
    if(!groupID) return {"message":"error! Group ID not provided"}
    if(!requesterID) return {"message":"error requester ID not provided"}
    try {
        const snapshot=await getDoc(doc(db,"groups",requesterID));
        const data=snapshot.data() as GroupChat;
        const response= data.members.includes(requesterID);
        if(response)
        {
            return { message: "successfully retrieve Members",members:data.members,owners:data.owners}
        }else
        {
            return { message: "user lack privilege to obtain"}
        }
    }catch (e)
    {
        return {message: "error retrieving data",error:(e instanceof Error)?e:"unknown error"};
    }
}
export async function setMembersFromGroupChatByOwner(groupID:string,requesterID:string,updateMembers:string[])
{
    try {
        const docSnap=await getDoc(doc(db,"groups",groupID));
        const data=docSnap.data() as GroupChat;
        const response=data.owners.includes(requesterID);
        if(response)
        {
            const oldMembers=data.members;

            const updateMemberSet = new Set(updateMembers)
            const deprecatedMembers= oldMembers.filter(member=>!updateMemberSet.has(member))
            await updateDoc(doc(db,"groups",groupID),{
                members:updateMembers
            });
            for(const member in deprecatedMembers)
            {
                await updateDoc(doc(db,"users",member),{
                    groupChats:arrayRemove(...groupID)
                })
            }
        }else
        {
            return {message:"requester lack privilege to update data"};
        }
    }
    catch (e)
    {
        return {message:"error processing request",error:(e)}
    }
}
export function addMemberToGroupChatByOwnerUsingGuestID()
{
    //get data from groupChat
    //validate authority

}
export function removeMemberFromGroupChatByOwnerUsingGuestID()
{

}
export function updateUserProfile()
{
    //require a cloud storage
    // firebase might able to store the database

}




