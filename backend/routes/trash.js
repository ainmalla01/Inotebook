import express from 'express';
import Trashmodel from '../models/Trash.js';

const router=express.Router();

router.get('/',async (req,res)=>{
    try{
    const trash = await Trashmodel.find();
    res.send(trash);
    }catch(err){
        res.status(500).json({error:'server error'})
    }
   
})
export default router