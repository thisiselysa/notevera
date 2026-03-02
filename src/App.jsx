import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Other from "./pages/Other";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/other" element={<Other />} />
    </Routes>
  );
}

export default App;