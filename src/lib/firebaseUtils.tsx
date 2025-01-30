import {addDoc, collection, doc} from "@firebase/firestore";
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
    members:string[],
    owners:string[],
    body:Message[]
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
export function getGroupChatListByUserID(){
    //query from User

}
export function createGroupChat()
{

}
export function loadGroupChat(){
    //query return groupchat by id
}

export function sendMessage(){
    //get message doc, add new value to the doc
    //be conscious for state change
}
export function getMemberFromGroupChatByOwner(){}
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




