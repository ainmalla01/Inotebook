import mongooseCon from './db.js';
import express from 'express';
import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';
import trashRoutes from './routes/trash.js';
import cors from "cors";

mongooseCon();
const app =express()
const port=5000

app.use(cors());

// make it to able to use req.body
app.use(express.json());

// All avaliable routes
app.use('/api/auth',authRoutes)
app.use('/api/note',notesRoutes)
app.use('/api/trash',trashRoutes)

app.listen(port,()=>{
    console.log(`mongoose is running on the localhost:${port}`);

})
