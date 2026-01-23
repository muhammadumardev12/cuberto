import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlineMenuAlt4, HiX, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
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
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      };
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    // Close menu first and restore scroll
    setIsMenuOpen(false);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    // Small delay to let menu close, then scroll
    setTimeout(() => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // navbar height offset
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'projects' },
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
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled && !isMenuOpen
          ? 'bg-dark-900/60 backdrop-blur-lg shadow-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 md:py-3'>
        <motion.div
          className='flex items-center cursor-pointer gap-1 sm:gap-2 group'
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img 
            src={Logo} 
            alt="Logo" 
            className='h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300 group-hover:brightness-110' 
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          />
          <span className='font-semibold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap gradient-text-static group-hover:opacity-90 transition-opacity duration-300'>
            DEVPARTNER
          </span>
        </motion.div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Book a Call Button */}
          <motion.a
            href="https://api.leadconnectorhq.com/widget/booking/Ns0Q5SZw947R18gd9yKf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium text-sm sm:text-base rounded-lg overflow-hidden group glow-effect"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">Book a Call</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>

          {/* Menu Button */}
          <motion.button
            className='text-2xl sm:text-3xl text-gray-200 hover:text-white z-[70] p-2 transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
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
      </div>

    </motion.nav>

      {/* Mobile Menu - Rendered via Portal outside nav */}
      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='fixed inset-0 bg-dark-950/80 backdrop-blur-md z-[60]'
                onClick={() => setIsMenuOpen(false)}
                onTouchMove={(e) => e.preventDefault()}
                style={{ touchAction: 'none' }}
              />
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className='fixed top-0 right-0 h-full w-[85%] sm:w-3/4 md:w-1/2 lg:w-2/5 max-w-md bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900 border-l border-white/10 shadow-2xl z-[65] overflow-y-auto'
                data-menu-panel="true"
              >
                {/* Close Button */}
                <motion.button
                  className='absolute top-4 right-4 text-2xl sm:text-3xl text-gray-200 hover:text-white p-2 z-10'
                  onClick={() => setIsMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  aria-label="Close menu"
                >
                  <HiX />
                </motion.button>

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
                
                {/* Navigation Links */}
                <div className='flex flex-col items-start justify-start pt-16 sm:pt-20 px-6 sm:px-8 gap-1'>
                  <motion.p 
                    className="text-xs uppercase tracking-widest text-gray-500 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Navigation
                  </motion.p>
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.id}
                      custom={index}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      onClick={() => scrollToSection(link.id)}
                      className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 w-full text-left py-1.5 sm:py-2 relative group overflow-hidden'
                      whileHover={{ x: 15 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center gap-4">
                        <motion.span 
                          className="w-0 h-[2px] bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-8 transition-all duration-300"
                        />
                        {link.name}
                      </span>
                      <motion.span
                        className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-r-xl transition-all duration-500 group-hover:w-full"
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Contact Info Section */}
                <motion.div 
                  className='mt-auto px-6 sm:px-8 pb-6 pt-6'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Get in Touch</p>
                  
                  {/* Contact Items */}
                  <div className="space-y-2">
                    <motion.a 
                      href="mailto:contact@devpartner.com"
                      className="flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="p-2 rounded-lg bg-white/5 group-hover:bg-primary-500/20 transition-colors duration-300">
                        <HiOutlineMail className="w-5 h-5" />
                      </span>
                      <span className="text-sm sm:text-base">contact@devpartner.com</span>
                    </motion.a>
                    
                    <motion.a 
                      href="tel:+1234567890"
                      className="flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="p-2 rounded-lg bg-white/5 group-hover:bg-primary-500/20 transition-colors duration-300">
                        <HiOutlinePhone className="w-5 h-5" />
                      </span>
                      <span className="text-sm sm:text-base">+1 (234) 567-890</span>
                    </motion.a>
                    
                    <motion.div 
                      className="flex items-center gap-4 text-gray-400 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="p-2 rounded-lg bg-white/5 group-hover:bg-primary-500/20 transition-colors duration-300">
                        <HiOutlineLocationMarker className="w-5 h-5" />
                      </span>
                      <span className="text-sm sm:text-base">New York, USA</span>
                    </motion.div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Follow Us</p>
                    <div className="flex gap-3">
                      <motion.a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-accent-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaLinkedinIn className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-accent-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaInstagram className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-accent-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaTwitter className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;