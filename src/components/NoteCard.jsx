import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 25px;
  width: 320px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  position: relative;
`;

const Author = styled.p`
  font-size: 12px;
  color: #ff4d8d;
  font-weight: bold;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Content = styled.p`
  color: #666;
`;

const DateText = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-top: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

/* ===== SOFT PINK BUTTONS ===== */

const EditButton = styled.button`
  padding: 6px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 77, 141, 0.2);
  cursor: pointer;
  background: #ffe4ef;
  color: #ff4d8d;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    background: #ffd3e6;
    transform: translateY(-1px);
  }
`;

const DeleteButton = styled.button`
  padding: 6px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 77, 79, 0.2);
  cursor: pointer;
  background: #ffe8e8;
  color: #ff4d4f;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    background: #ffd6d6;
    transform: translateY(-1px);
  }
`;

function NoteCard({ note, onEdit, onDelete }) {
  const date = new Date(note.createdAt).toDateString();

  return (
    <Card>
      <Author>AUTHOR: {note.author || "Unknown"}</Author>
      <Title>{note.title}</Title>
      <Content>{note.content}</Content>
      <DateText>{date}</DateText>

      <ButtonGroup>
        <EditButton onClick={() => onEdit(note)}>
          Edit ✏️
        </EditButton>

        <DeleteButton onClick={() => onDelete(note._id)}>
          Delete 🗑️
        </DeleteButton>
      </ButtonGroup>
    </Card>
  );
}

export default NoteCard;