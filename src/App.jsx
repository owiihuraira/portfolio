import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Technologies from "./pages/Technologies";
import Feedback from "./pages/Feedback"
import Introduction from "./pages/Introduction";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technology" element={<Technologies />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;