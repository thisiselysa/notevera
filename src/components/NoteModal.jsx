import styled from "styled-components";
import { useState, useEffect } from "react";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  width: 400px;
`;

function NoteModal({ onClose, onSubmit, initialData }) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (initialData) {
      setAuthor(initialData.author || "");
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = () => {
    onSubmit({ author, title, content });
    onClose();
  };

  return (
    <Overlay>
      <Modal>
        <h2>{initialData ? "Edit Note" : "New Note"}</h2>

        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </Modal>
    </Overlay>
  );
}

export default NoteModal;