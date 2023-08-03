import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movieslist" element={<h1>Movies List container</h1>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/register" element={<h1>Register Page</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
