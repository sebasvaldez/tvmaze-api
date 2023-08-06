import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import SearchPage from "../views/SearchPage";
import ItemPage from "../views/ItemPage";
import SearchProvider from "./contexts/SearchProvider";

const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movieslist" element={<SearchPage/>} />
          <Route path="/item/:id" element={<ItemPage/>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/register" element={<h1>Register Page</h1>} />
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default App;
