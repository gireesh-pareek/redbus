import React from "react";
import Footer from "./Components/Footer/Footer";
import SubFooter from "./Components/SubFooter/SubFooter";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <LandingPage />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default App;
