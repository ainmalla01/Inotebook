import { useEffect, useState } from "react";

const TrashNotes = () => {
  const [Trashes, setTrashes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/trash")
      .then(res => res.json())
      .then(data => setTrashes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="notes w-[80%]">
      <div className="notesList h-screen bg-gray-300 w-auto overflow-x-auto">
        <main className="flex flex-col gap-2 p-2">
          {Trashes.map((trash) => (
            <div key={trash._id} className="content h-[15vh] w-full bg-gray-500 flex justify-between items-center p-4 rounded-xl">
              <h1>{trash.title}</h1>
              <p>{new Date(trash.date).toLocaleDateString()}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default TrashNotes;
