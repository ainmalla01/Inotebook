
import mongoose, {Schema,model} from "mongoose";

const NotesSchema= new Schema({
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
const NotesModel=model('notes',NotesSchema);

export default NotesModel;