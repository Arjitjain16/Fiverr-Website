// import Navbar from "./components/Navbar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login" 
import Gig from "./pages/Gig"
import Gigs from "./pages/Gigs"
import Add from "./pages/Add"
import Message from "./pages/Message"
import Messages from "./pages/Messages"

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/gig" element={<Gig />} />
          <Route exact path="/gigs" element={<Gigs/>} />
          <Route exact path="/add" element={<Add/>} />
          <Route exact path="/message" element={<Message/>} />
          <Route exact path="/messages" element={<Messages/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App