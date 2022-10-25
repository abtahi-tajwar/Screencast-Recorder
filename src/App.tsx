import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import RecordScreencast from "./pages/RecordScreencast/RecordScreencast";
import ViewScreencast from "./pages/ViewScreencast/ViewScreencast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<RecordScreencast />} />
        <Route path="/view-screencast" element={<ViewScreencast />} />
      </Routes>
    </BrowserRouter>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  height: 100vh;
`
export default App;
