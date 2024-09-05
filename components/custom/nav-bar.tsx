"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { scrollTo } from "@/lib/utils";
import Image from "next/image";

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
        <Image
          src={"/logos/at-logo.png"}
          alt="Simweaver Dialog"
          loading="eager"
          width={50}
          height={50}
          sizes="100%"
          onClick={() => handleScrollTo(homeRef)}
          className="ml-4 cursor-pointer"
        />
        <div className="nav-button-parent">
          {/* <button
            id="nav-home-btn"
            onClick={() => handleScrollTo(homeRef)}
            className="nav-btn"
          >
            Home
          </button> */}
          <button
            id="nav-about-btn"
            onClick={() => handleScrollTo(aboutRef)}
            className="nav-btn"
          >
            About
          </button>
          <button
            id="nav-projects-btn"
            onClick={() => handleScrollTo(projectsRef)}
            className="nav-btn"
          >
            Projects
          </button>
          <button
            id="nav-contact-btn"
            onClick={() => handleScrollTo(contactRef)}
            className="nav-btn"
          >
            Contact
          </button>
          {/* <div className="w-[450px]"></div> */}
        </div>
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
                id="modal-home-btn"
                onClick={() => handleScrollTo(homeRef)}
                className="nav-btn"
              >
                Home
              </button>
              <div className="nav-divider"></div>
              <button
                id="modal-about-btn"
                onClick={() => handleScrollTo(aboutRef)}
                className="nav-btn"
              >
                About
              </button>
              <div className="nav-divider"></div>
              <button
                id="modal-projects-btn"
                onClick={() => handleScrollTo(projectsRef)}
                className="nav-btn"
              >
                Projects
              </button>
              <div className="nav-divider"></div>
              <button
                id="modal-contact-btn"
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
