class User
{

}
class ChatView
{
    ChatID:string;
    constructor(chatID:string)
    {
        this.ChatID=chatID;
    }
    initialize()
    {
        if(!this.ChatID) return {"message":"error! ChatID not provided"}

    }

}
