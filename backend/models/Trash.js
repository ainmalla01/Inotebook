import mongoose,{Schema,model} from "mongoose";

const TrashSchema=new Schema({
       title:{
        type: String,
        required: true
    } ,
     description:{
        type: String,
        required: true,
  
    } ,
     tag:{
        type: String,
        default:'General'
      
    } ,
    date:{
        type:Date,
        default:Date.now
    }
})

const Trashmodel= model('trash',TrashSchema);

export default Trashmodel;