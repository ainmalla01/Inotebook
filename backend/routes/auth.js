import express from 'express';
import User from '../models/User.js';
import {body,validationResult} from 'express-validator';
import bycrpt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router=express.Router();
const JWT_SECRET="aaaa999000###MMMM";

//put validation on the condition as an array at middle


router.post('/createUser',[
    body("name","Name field is empty").notEmpty(),
    body("password","Enter a pass min 5").isLength({min:5}),
    body("password","enter at least min 1 number").matches(/\d/),
    body('email',"Enter a valid email").isEmail()
],async (req,res)=>{
    // check validation
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors :
            error.array()
        })    
    }

    // check the email has already acc or not 
    try{     
       
    const {name,password,email}= req.body;

     const existingUser = await User.findOne({email});
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      const salt= await bycrpt.genSalt(10);
      const hashpass= await bycrpt.hash(password, salt);

    await User.create(
        {
            name: req.body.name,
            email: req.body.email,
            password: hashpass
        })
// CREATING TOKEN
    const data = {
  user: {
    id: User._id  // or _id if using MongoDB
  }
};
const token = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });
res.json({ token })

                
    }catch(err){
        console.error(err);
        res.status(400).json({
            message:" 1 .some erro has occur!"
        })
    }

    //     .then(user => res.json(user)).catch(error => {console.error(error)
    //     res.json({error : "please neter unique validation"})
    // }
    // )
 
})

  // Authencitate a user login
    router.post('/login',[
          body("password","Enter a pass min 5").isLength({min:5}),
         body("password","enter at least min 1 number").matches(/\d/),
         body('email',"Enter a valid email").isEmail()
    ],async (req,res)=>{
        try{
        const error= validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({errors :error.array() })
             }
        const {email,password}=req.body;

        const user = await User.findOne({email});

        if(!user){
            res.status(400).json({Error : "please try the correct condentials"})
        }
        const passwordCompare = await bycrpt.compare( password , user.password);

        if(!passwordCompare){
              res.status(400).json({Error : "please try the correct condentials"})
        }
         const data={
            user:{
                id : User._id
            }
        }
        const token = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token })
         }catch(err){
        console.error(err);
        res.status(400).json({
            message:"some erro has occur!"
        })
    }


})



export default router;