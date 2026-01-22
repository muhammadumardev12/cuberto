import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/images/Logo5.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      const preventDefault = (e) => {
        const menuPanel = document.querySelector('[data-menu-panel="true"]');
        if (menuPanel && menuPanel.contains(e.target)) {
          return;
        }
        e.preventDefault();
      };

      document.addEventListener('touchmove', preventDefault, { passive: false, capture: true });
      document.addEventListener('wheel', preventDefault, { passive: false, capture: true });
      document.addEventListener('scroll', preventDefault, { passive: false, capture: true });
      
      return () => {
        // Restore scroll position
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        window.scrollTo(0, scrollY);
        document.removeEventListener('touchmove', preventDefault, { capture: true });
        document.removeEventListener('wheel', preventDefault, { capture: true });
        document.removeEventListener('scroll', preventDefault, { capture: true });
      };
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? 60 : 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About us', id: 'about' },
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 md:py-3'>
        <motion.div
          className='flex items-center cursor-pointer gap-1 sm:gap-2'
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src={Logo} 
            alt="Logo" 
            className='h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300' 
          />
          <span className='font-semibold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap'>
            DEVPARTNER
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-6 xl:gap-8'>
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className='relative text-base xl:text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors px-2'
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
              <motion.span
                className='absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800'
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Tablet Navigation (md to lg) */}
        <div className='hidden md:flex lg:hidden items-center gap-4'>
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className='relative text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors px-1'
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
              <motion.span
                className='absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800'
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className='md:hidden text-xl sm:text-2xl text-gray-800 z-50 p-1.5 -mr-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiX />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiOutlineMenuAlt4 />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40'
              onClick={() => setIsMenuOpen(false)}
              onTouchMove={(e) => e.preventDefault()}
              style={{ touchAction: 'none' }}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className='fixed top-0 right-0 h-full w-[85%] sm:w-3/4 max-w-sm bg-white shadow-2xl md:hidden z-40 overflow-y-auto'
              data-menu-panel="true"
            >
              <div className='flex flex-col items-start justify-start pt-20 sm:pt-24 px-6 sm:px-8 gap-4 sm:gap-6'>
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    custom={index}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    onClick={() => scrollToSection(link.id)}
                    className='text-xl sm:text-2xl font-semibold text-gray-800 hover:text-gray-600 transition-colors w-full text-left py-2 sm:py-3'
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;