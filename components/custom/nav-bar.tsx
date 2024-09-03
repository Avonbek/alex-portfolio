"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { scrollTo } from "@/lib/utils";

type NavBarProps = {
  homeRef: any;
  aboutRef: any;
  projectsRef: any;
  contactRef: any;
};

export default function NavBar({
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
}: NavBarProps) {
  // zustand store
  // local state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // functions

  const handleScrollTo = (ref: any) => {
    scrollTo(ref);
    setIsModalOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target)
    ) {
      setIsModalOpen(false);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // --- RENDER ---

  return (
    <Fragment>
      {/* --- WIDE MODE --- */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
        className="nav"
      >
        <button onClick={() => handleScrollTo(homeRef)} className="nav-btn">
          Home
        </button>
        <div className="nav-divider"></div>
        <button onClick={() => handleScrollTo(aboutRef)} className="nav-btn">
          About
        </button>
        <div className="nav-divider"></div>
        <button onClick={() => handleScrollTo(projectsRef)} className="nav-btn">
          Projects
        </button>
        <div className="nav-divider"></div>
        <button onClick={() => handleScrollTo(contactRef)} className="nav-btn">
          Contact
        </button>
      </motion.nav>

      {/* --- SMALL MODE --- */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
        className="nav-small"
      >
        <button onClick={toggleModal} className="nav-hamburger">
          <GiHamburgerMenu size={25} />
        </button>
      </motion.nav>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleClickOutside}
            className="modal-backdrop"
          >
            <motion.div
              ref={modalContentRef}
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              exit={{ y: -300 }}
              transition={{ duration: 0.5 }}
              className="modal-content"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="modal-close-btn"
              >
                <IoClose size={25} />
              </button>
              <button
                onClick={() => handleScrollTo(homeRef)}
                className="nav-btn"
              >
                Home
              </button>
              <div className="nav-divider"></div>
              <button
                onClick={() => handleScrollTo(aboutRef)}
                className="nav-btn"
              >
                About
              </button>
              <div className="nav-divider"></div>
              <button
                onClick={() => handleScrollTo(projectsRef)}
                className="nav-btn"
              >
                Projects
              </button>
              <div className="nav-divider"></div>
              <button
                onClick={() => handleScrollTo(contactRef)}
                className="nav-btn"
              >
                Contact
              </button>
              <div className="nav-divider"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}
