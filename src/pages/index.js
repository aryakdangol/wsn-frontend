import React, { useState } from "react";
import FormikForm from "../components/Form";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/data";
import Login from "../components/Login/Login";
import Background from "../components/Login/background";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import Donate from "../components/DonateForm/Donate";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [Clicked, setOpen] = useState(false);

  const Open = () => {
    setOpen(!Clicked);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Background Clicked={Clicked} Open={Open} />
      <Navbar toggle={toggle} Open={Open} />
      <HeroSection />
      <Gallery />
      <Donate />

      {/* <FormikForm /> */}
      {/* <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} /> */}
    </>
  );
};

export default Home;
