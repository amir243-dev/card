import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardPage from "./pages/CardPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CardPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
