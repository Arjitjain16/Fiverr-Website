import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Gig from "./pages/Gig";
import Gigs from "./pages/Gigs";
import Add from "./pages/Add";
import Message from "./pages/Message";
import Messages from "./pages/Messages";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gig" element={<Gig />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/add" element={<Add />} />
          <Route path="/message" element={<Message />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
