import { useEffect, useState } from "react";
import { getNotes, createNote, updateNote, deleteNote } from "./services/api";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import NoteModal from "./components/NoteModal";

function App() {
  // ================= STATE =================
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  // ================= FETCH =================
  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // ================= OPEN CREATE =================
  const handleOpenCreate = () => {
    setSelectedNote(null); // create mode
    setIsModalOpen(true);
  };

  // ================= OPEN EDIT =================
  const handleOpenEdit = (note) => {
    setSelectedNote(note); // edit mode
    setIsModalOpen(true);
  };

  // ================= SAVE (CREATE / UPDATE) =================
  const handleSave = async (data) => {
    try {
      if (selectedNote) {
        // UPDATE
        await updateNote(selectedNote._id, data);
      } else {
        // CREATE
        await createNote(data);
      }

      await fetchNotes();
      setIsModalOpen(false);
      setSelectedNote(null);
    } catch (err) {
      console.error("Error saving note:", err);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      await fetchNotes();
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  // ================= RETURN =================
  return (
    <>
      {/* HEADER */}
      <Header onCreate={handleOpenCreate} />

      {/* LIST NOTES */}
      <NoteList
        notes={notes}
        onEdit={handleOpenEdit}
        onDelete={handleDelete}
      />

      {/* ================= UNIVERSAL MODAL ================= */}
      {isModalOpen && (
        <NoteModal
          initialData={selectedNote}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSave}
        />
      )}
    </>
  );
}

export default App;