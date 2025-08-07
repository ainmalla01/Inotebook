import mongoose from 'mongoose';

const mongooseURI="mongodb://localhost:27017/inotebook";

const mongooseCon=async()=>{
    try{
    await mongoose.connect(mongooseURI);
    console.log("connection sucessful!");
    }catch(error){
        console.error("error connection on mongodb",error);

    }
}
export default mongooseCon;