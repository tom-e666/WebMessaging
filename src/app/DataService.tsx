
interface GroupData{
    name:string;
    headMessage:string;
    imgRes:string;
}
class User
{
    userID:string;
    userName:string;
    GroupsList:GroupData[];
    constructor() {//always initialize
        this.userID="null";
        this.userName="null";
        this.GroupsList=[];
    }
    initialize(userId:string):void
    {
        //load user information from firestore
    }
    getUserData()
    {
        return {
            userID:this.userID,
            userName:this.userName,
            GroupsList:this.GroupsList,
        }
    }
    setUserData(userID:string,userName:string,GroupsList:GroupData[]):void
    {
        this.userID=userID;
        this.userName=userName;
        this.GroupsList=GroupsList;
    }
}
interface MessageData{
    type:"text"|"image"|"emo"|"link";
    data:string;
}
class ChatView
{
    userID:string;
    ChatID:string;
    ChatMessageData:MessageData[];
    constructor(chatID:string,userID:string)//always initialize
    {
        this.ChatID=chatID;
        this.userID=userID;
        this.ChatMessageData=[];
    }
    initialize()
    {
        if(!this.ChatID) return {"message":"error! ChatID not provided"}
        //get chat data
    }
    getMessageData()
    {
        return this.ChatMessageData
    }
    postMessage()
    {
        //performing post message
        return true
    }
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0z9N2y06xbZTD7NC1YwTy-54SOXt4Ws4",
    authDomain: "messaging-9b844.firebaseapp.com",
    databaseURL: "https://messaging-9b844-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "messaging-9b844",
    storageBucket: "messaging-9b844.firebasestorage.app",
    messagingSenderId: "965519121186",
    appId: "1:965519121186:web:f9a1bd3ff1dfed5282e37b",
    measurementId: "G-73RHRV37N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



