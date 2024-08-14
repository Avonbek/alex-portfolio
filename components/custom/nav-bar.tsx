"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

type NavBarProps = {
  homeRef: any;
  aboutRef: any;
  projectsRef: any;
};

export default function NavBar({
  homeRef,
  aboutRef,
  projectsRef,
}: NavBarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (clickedRef: any) => {
    clickedRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    setIsModalOpen(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nova3t@gmail.com");
    toast.success("Copied Email: nova3t@gmail.com", { duration: 3000 });
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

  return (
    <Fragment>
      {/* WIDE MODE */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
        className="nav"
      >
        <button onClick={() => handleScrollTo(homeRef)} className="nav-button">
          Home
        </button>
        <div className="nav-divider"></div>
        <button onClick={() => handleScrollTo(aboutRef)} className="nav-button">
          About
        </button>
        <div className="nav-divider"></div>
        <button
          onClick={() => handleScrollTo(projectsRef)}
          className="nav-button"
        >
          Projects
        </button>
        <div className="nav-divider"></div>
        <button onClick={() => handleCopyEmail()} className="nav-button">
          Email
        </button>
      </motion.nav>
      {/* SMALL MODE */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
        className="nav-small"
      >
        <div className="nav-divider"></div>
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
                className="modal-close-button"
              >
                <IoClose size={25} />
              </button>
              <button
                onClick={() => handleScrollTo(homeRef)}
                className="nav-button"
              >
                Home
              </button>
              <div className="nav-divider"></div>
              <button
                onClick={() => handleScrollTo(aboutRef)}
                className="nav-button"
              >
                About
              </button>
              <div className="nav-divider"></div>
              <button
                onClick={() => handleScrollTo(projectsRef)}
                className="nav-button"
              >
                Projects
              </button>
              <div className="nav-divider"></div>
              <button onClick={() => handleCopyEmail()} className="nav-button">
                Email
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}
