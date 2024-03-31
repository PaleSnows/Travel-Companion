import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Destinations from "./pages/Destinations";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/api/auth/signup" element={<SignUp />} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
