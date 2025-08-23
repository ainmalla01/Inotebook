// backend/routes/notes.js
import express from "express";
import NotesModel from "../models/Notes.js"; // adjust path if needed
import Trashmodel from "../models/Trash.js"

const router = express.Router();

// Get all notes
router.get("/gettingnotes", async (req, res) => {
  try {
    const notes = await NotesModel.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add new note
router.post("/creatingnote", async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const note = new NotesModel({ title, description, tag });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
});

// Delete a note
router.delete("/:id", async (req, res) => {
  try {
    // find the note first
    const note = await NotesModel.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    // move note to trash collection
    const trash = new Trashmodel({
      title: note.title,
      description: note.description,
      tag: note.tag,
      date: note.date,
    });
    await trash.save();

    // delete note from main collection
    await NotesModel.findByIdAndDelete(req.params.id);

    res.json({ message: "Note moved to trash", trash });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
