// In routes/notes.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Notes route working!');
});

export default router;
