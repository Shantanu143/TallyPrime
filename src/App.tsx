import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import PlacedStudents from "./Pages/PlacedStudents";
// import { LampDemo } from "./aceternity/About/LampDemo";
// import Cource from "./aceternity/Card/Cource";
import Footer from "./aceternity/Footer/Footer";

import { NavbarDemo } from "./aceternity/Navbar/NavbarDemo";
import TallyPrime from "./Pages/TallyPrime";
import AdvanceExcel from "./Pages/AdvanceExcel";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

const App = () => {
  return (
    <>
      <NavbarDemo />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tallyprime" element={<TallyPrime />} />
        <Route path="/advanceexcel" element={<AdvanceExcel />} />
        <Route path="/placestudent" element={<PlacedStudents />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
