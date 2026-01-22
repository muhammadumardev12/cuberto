import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { HiMail, HiCheck, HiClipboardCopy } from "react-icons/hi";
import { AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaInstagram } from "react-icons/fa";

const ContactDetails = () => {
  const [copiedItem, setCopiedItem] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      type: "email",
      value: "Jacobpenaranda767@gmail.com",
      href: "mailto:Jacobpenaranda767@gmail.com",
      icon: HiMail,
      label: "Email address",
    },
    {
      type: "twitter",
      value: "Twitter",
      href: "https://x.com/vikas_ipar?t=xdfw_bSJLdFN8dykcCSWZw&s=08",
      icon: AiFillTwitterCircle,
      label: "Twitter",
    },
    {
      type: "facebook",
      value: "Facebook",
      href: "https://www.facebook.com",
      icon: AiFillFacebook,
      label: "Facebook",
    },
    {
      type: "linkedin",
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/vikas-ipar/",
      icon: AiFillLinkedin,
      label: "LinkedIn",
    },
    {
      type: "github",
      value: "GitHub",
      href: "https://github.com/vikasipar",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      type: "instagram",
      value: "Instagram",
      href: "https://www.instagram.com",
      icon: FaInstagram,
      label: "Instagram",
    },
  ];

  const copyToClipboard = async (text, type) => {
    if (type === "email") {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedItem(type);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          setTimeout(() => setCopiedItem(null), 300);
        }, 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
          transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="bg-gradient-to-b from-dark-900 to-dark-950 text-white relative overflow-hidden py-12 md:py-16 lg:py-20 w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24"
      aria-label="Contact Information"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.08),transparent_50%)]" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 gradient-text-static">
            Get in Touch
          </h2>
          <p className="text-sm md:text-base text-white/60 font-light max-w-2xl mx-auto">
            Connect with us on social media or drop us an email.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4"
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const isCopied = copiedItem === contact.type;

            return (
              <motion.div
                key={contact.type}
                variants={itemVariants}
                className="w-full md:w-auto"
              >
                <motion.a
                  href={contact.href}
                  target={contact.type !== "email" ? "_blank" : undefined}
                  rel={contact.type !== "email" ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (contact.type === "email") {
                      e.preventDefault();
                      copyToClipboard(contact.value, contact.type);
                      setTimeout(() => {
                        window.location.href = contact.href;
                      }, 100);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (contact.type === "email" && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      copyToClipboard(contact.value, contact.type);
                      setTimeout(() => {
                        window.location.href = contact.href;
                      }, 100);
                    }
                  }}
                  aria-label={`${contact.label}: ${contact.value}`}
                  className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border-2 border-white/20 overflow-hidden hover:cursor-pointer group glow-effect focus-visible:outline-2 focus-visible:outline-primary-400 focus-visible:outline-offset-4 transition-all duration-300"
                  whileHover="hovered"
                  whileTap={{ scale: 0.98 }}
                  initial="initial"
                  transition={{ duration: 0.3 }}
                >
                  {/* Default State */}
                  <motion.div
                    variants={{
                      initial: { y: 0, opacity: 1 },
                      hovered: { y: "-100%", opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 py-2 md:py-2.5 px-4 md:px-6 text-white bg-dark-800/50 backdrop-blur-sm border-none rounded-full flex items-center justify-center gap-2 text-sm md:text-base font-light"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="truncate">{contact.value}</span>
                  </motion.div>

                  {/* Hover State */}
                  <motion.div
                    variants={{
                      initial: { y: "100%", opacity: 0 },
                      hovered: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
                    className="relative rounded-full py-2 md:py-2.5 px-4 md:px-6 text-white bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 border-none flex items-center justify-center gap-2 text-sm md:text-base font-light"
                  >
                    <AnimatePresence mode="wait">
                      {isCopied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2"
                        >
                          <HiCheck className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                          <span>Copied!</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                          <span className="truncate">{contact.value}</span>
                          {contact.type === "email" && (
                            <HiClipboardCopy className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 opacity-70" />
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Ripple Effect on Click */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={{ scale: 2, opacity: [0.5, 0] }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-dark-800/95 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-2xl"
            >
              <div className="flex items-center gap-3 text-white">
                <HiCheck className="w-5 h-5 text-green-400" />
                <span className="text-sm md:text-base font-light">
                  Copied to clipboard!
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactDetails;
