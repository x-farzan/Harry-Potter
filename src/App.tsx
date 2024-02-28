import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import All from "./pages/All";
import CharacterDetail from "./components/CharacterDetail";
import Students from "./pages/Students";
import Staff from "./pages/Staff";
import Spells from "./pages/Spells";
import Houses from "./pages/Houses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
      <Route path="/students" element={<Students />} />
      <Route path="/staff" element={<Staff />} />
      {/* <Route path="/spells" element={<Spells />} /> */}
      <Route path="/houses" element={<Houses />} />
    </Routes>
  );
}

export default App;
