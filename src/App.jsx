import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/profile";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile/>} />

    </Routes>
    </BrowserRouter>
  );
}

