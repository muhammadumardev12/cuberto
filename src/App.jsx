import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import ContactDetails from "./components/ContactDetails";

const App = () => {
  const scrollRef = useRef(null);
  
  useEffect(() => {
    let locomotiveScroll = null;
    
    const initScroll = async () => {
      // Only enable Locomotive Scroll on desktop for better performance
      if (window.innerWidth >= 1024) {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          smoothMobile: false,
          multiplier: 1.5, // Much faster scrolling speed
          class: 'is-revealed',
          scrollbarContainer: null,
          resetNativeScroll: true,
          lerp: 0.08, // Very fast response (lower = faster, more responsive)
          getSpeed: false, // Disable for better performance
          getDirection: false, // Disable for better performance
          reloadOnContextChange: false, // Disable for better performance
          smartphone: {
            smooth: false, // Disable on mobile
          },
          tablet: {
            smooth: false, // Disable on tablet for better performance
          },
        });
      }
    };

    initScroll();

    // Cleanup on unmount
    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <div data-scroll-container ref={scrollRef}>
        <div id="home" className="pt-14 sm:pt-16 md:pt-18 lg:pt-20">
          <Hero />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="about">
          <Philosophy />
        </div>
        <ContactDetails />
      </div>
    </div>
  );
};

export default App;
