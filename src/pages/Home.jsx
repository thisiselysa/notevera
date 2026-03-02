import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import NoteList from "../components/NoteList";
import NoteModal from "../components/NoteModal";

import { getNotes, createNote, updateNote, deleteNote }
  from "../services/api";

import bgTop from "../assets/bg-top.jpg";
/* ======================
   STYLED COMPONENTS
====================== */

const TopBackground = styled.div`
  width: 100%;
  background-image: url(${bgTop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  margin-top: -60px;
  padding: 120px 0 80px 0;



  position: relative;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  position: relative;
  z-index: 2;
  background: white;
`;

/* ======================
   APP COMPONENT
====================== */

function App() {
  // STATE
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  // FETCH
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

  // CREATE
  const handleOpenCreate = () => {
    setSelectedNote(null);
    setIsModalOpen(true);
  };

  // EDIT
  const handleOpenEdit = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  // SAVE
  const handleSave = async (data) => {
    try {
      if (selectedNote) {
        await updateNote(selectedNote._id, data);
      } else {
        await createNote(data);
      }

      await fetchNotes();
      setIsModalOpen(false);
      setSelectedNote(null);
    } catch (err) {
      console.error("Error saving note:", err);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      await fetchNotes();
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  // RETURN
  return (
  <>
    {/* HEADER */}
    <HeaderWrapper>
      <Header onCreate={handleOpenCreate} />
    </HeaderWrapper>

    {/* BACKGROUND + NOTES */}
    <TopBackground>
      <NoteList
        notes={notes}
        onEdit={handleOpenEdit}
        onDelete={handleDelete}
      />
    </TopBackground>

    {/* MODAL */}
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