// ================= BASE URL =================
const API_URL = import.meta.env.VITE_API_URL;
const OTHER_API_URL = import.meta.env.VITE_OTHER_API_URL;

// ================= YOUR NOTES =================
export const getNotes = async () => {
  const res = await fetch(`${API_URL}/notes`);
  return res.json();
};

export const createNote = async (data) => {
  const res = await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const updateNote = async (id, data) => {
  const res = await fetch(`${API_URL}/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteNote = async (id) => {
  await fetch(`${API_URL}/notes/${id}`, {
    method: "DELETE",
  });
};

// ================= FRIEND NOTES =================
export const getFriendNotes = async () => {
  const res = await fetch(`${OTHER_API_URL}/notes`);
  return res.json();
};