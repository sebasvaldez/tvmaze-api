import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import SearchPage from "../views/SearchPage";
import ItemPage from "../views/ItemPage";
import SearchProvider from "./contexts/SearchProvider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthProvider } from "./contexts/AuthProvider";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movieslist" element={<SearchPage />} />
            <Route path="/item/:id" element={<ItemPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;
