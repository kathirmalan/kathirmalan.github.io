import "./App.css";
import Hero from "./pages/Hero";
import Profile from "./pages/Profile";
import Menu from "./compoents/Menu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Handcrafts from "./pages/Handcrafts";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/handcrafts" element={<Handcrafts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Menu />
      </Router>
    </div>
  );
}

export default App;
