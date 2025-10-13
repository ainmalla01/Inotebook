import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  // fetch notes on load here
  useEffect(() => {
    fetch("http://localhost:5000/api/note/gettingnotes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error(err));
  }, []);

  // delete note
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/note/${id}`, { method: "DELETE" });
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <div className="notes w-[80%]">
      <div className="addingbtn">
        <button className="fixed top-20 right-20 px-4 py-2 bg-green-700 text-white rounded-[50%] hover:bg-green-900 hover:scale-110 transition">
          +
        </button>
      </div>

      <div className="notesList h-screen bg-gray-300 w-auto overflow-x-auto">
        <main className="flex flex-col gap-2 p-2">
          {notes.map((note) => (
            <div
              key={note._id}
              className="content h-[15vh] w-full bg-gray-500 items-center flex flex-rows justify-between p-4 rounded-xl"
            >
              <div>
                <h1 className="text-lg font-bold">{note.title}</h1>
                <p>{new Date(note.date).toLocaleDateString()}</p>
              </div>

              <div
                className="deletebtn h-[5vh] w-[2vw] bg-blue-300 rounded-[50%] grid place-items-center cursor-pointer"
                onClick={() => handleDelete(note._id)}
              >
                <FaTrash />
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Notes;

