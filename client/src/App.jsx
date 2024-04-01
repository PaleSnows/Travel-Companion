import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Destinations from "./pages/Destinations";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Service from "./pages/Service";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
