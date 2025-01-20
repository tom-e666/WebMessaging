const   MONGODB_URI = process.env.MONGODB_URI;
if(!MONGODB_URI){
    throw new Error("MongoDB URI doesn't exist");
}
import mongoose from 'mongoose'
// @ts-ignore
let cached =global.mongoose;
if(!cached)
{
    // @ts-ignore
    cached=global.mongoose= {conn:null,promise:null};
}
async function connectToMongoDB() {
    if(cached.conn)
    {
        return cached.conn;
    }
    if(!cached.promise)
    {
        cached.promise= mongoose.connect(MONGODB_URI!,{bufferCommands:false}).then((mongoose)=>{
            return mongoose;
        })
    }
    cached.conn=await cached.promise;
    return cached.conn;
}
(async ()=>{
    try{
        const connection=await connectToMongoDB();
        console.log("Connected to MongoDB");
    }catch(e){
        console.log("cannot connect to MongoDB",e);
    }
})();
export default connectToMongoDB()
