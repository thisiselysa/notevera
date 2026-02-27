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

const EditButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #6c63ff;
  color: white;
  font-size: 12px;

  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #ff4d4f;
  color: white;
  font-size: 12px;

  &:hover {
    opacity: 0.8;
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
          Edit
        </EditButton>

        <DeleteButton onClick={() => onDelete(note._id)}>
          Delete
        </DeleteButton>
      </ButtonGroup>
    </Card>
  );
}

export default NoteCard;