import { useEffect, useState } from "react";
import NoteList from "../components/NoteList";
import { getFriendNotes } from "../services/api";

function Other() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchFriendNotes = async () => {
      try {
        const data = await getFriendNotes();
        setNotes(data);
      } catch (err) {
        console.error("Failed to fetch friend notes:", err);
      }
    };

    fetchFriendNotes();
  }, []);

  return (
    <>
      <NoteList notes={notes} />
    </>
  );
}

export default Other;