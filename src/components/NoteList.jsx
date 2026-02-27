import styled from "styled-components";
import NoteCard from "./NoteCard";

const Grid = styled.div`
  display: flex;
  gap: 40px;
  padding: 60px 80px;
  flex-wrap: wrap;
`;

function NoteList({ notes, onEdit, onDelete }) {
  return (
    <Grid>
      {notes.map((note) => (
        <NoteCard
          key={note._id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </Grid>
  );
}

export default NoteList;