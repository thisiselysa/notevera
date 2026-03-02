// ================= BASE URL =================
const API_URL = import.meta.env.VITE_API_URL;
const OTHER_API_URL = import.meta.env.VITE_OTHER_API_URL;

console.log("API_URL =", API_URL);
console.log("OTHER_API_URL =", OTHER_API_URL);


// ================= TOKEN HELPER =================
export const getToken = () => {
  return localStorage.getItem("token");
};


// ================= AUTH HEADER HELPER =================
const authHeader = () => {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};


// ================= YOUR NOTES =================

// GET NOTES
export const getNotes = async () => {
  const res = await fetch(`${API_URL}/notes`, {
    headers: authHeader(),
  });

  if (!res.ok) throw new Error("Gagal mengambil notes");

  return res.json();
};


// CREATE NOTE
export const createNote = async (data) => {
  const res = await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Gagal membuat note");

  return res.json();
};


// UPDATE NOTE
export const updateNote = async (id, data) => {
  const res = await fetch(`${API_URL}/notes/${id}`, {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Gagal update note");

  return res.json();
};


// DELETE NOTE
export const deleteNote = async (id) => {
  const res = await fetch(`${API_URL}/notes/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  });

  if (!res.ok) throw new Error("Gagal delete note");

  return res.json();
};


// ================= FRIEND NOTES =================
export const getFriendNotes = async () => {
  const res = await fetch(`${OTHER_API_URL}/notes`);

  if (!res.ok) throw new Error("Gagal mengambil friend notes");

  return res.json();
};


// ================= AUTH =================

// LOGIN
export const loginUser = async (data) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  // ⭐ simpan token otomatis
  localStorage.setItem("token", result.token);

  return result;
};


// REGISTER
export const registerUser = async (data) => {
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
};