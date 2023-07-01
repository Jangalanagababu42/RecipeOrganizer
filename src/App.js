import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ReceipeDetailPage from "./pages/ReceipeDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/receipe" element={<ReceipeDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
