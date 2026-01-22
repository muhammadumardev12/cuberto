import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reel from "./components/Reel";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import FollowUs from "./components/FollowUs";
import SocialMediaLinks from "./components/SocialMediaLinks";
import ContactDetails from "./components/ContactDetails";

const App = () => {
  
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <div id="home" className="pt-14 sm:pt-16 md:pt-18 lg:pt-20">
        <Hero />
      </div>
      <Reel />
      <div id="services">
        <Services />
      </div>
      <Projects />
      <div id="about">
        <Philosophy />
      </div>
      <FollowUs />
      <SocialMediaLinks />
      <ContactDetails />
    </div>
  );
};

export default App;
