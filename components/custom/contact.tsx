import { motion } from "framer-motion";
import { Fragment } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiArrowFatLinesUpFill } from "react-icons/pi";

type ContactProps = {
  visibility: any;
  variants: any;
};

export default function Contact({ visibility, variants }: ContactProps) {
  const duration = 0.5;
  const delay = 0.5;

  return (
    <Fragment>
      {/* Contact Header */}
      <div className="contact-section">
        {/* title group */}
        <div className="contact-title-group">
          {/* title */}
          <motion.h2
            animate={visibility.contact ? "visible" : "hiddenLeft"}
            initial="hiddenLeft"
            variants={variants}
            transition={{ duration: duration }}
            className="contact-title"
          >
            Contact
          </motion.h2>
          {/* underline */}
          <motion.div
            animate={visibility.contact ? "visible" : "hiddenRight"}
            initial="hiddenRight"
            variants={variants}
            transition={{ duration: duration }}
            className="underline border-2 !w-[100px] mt-2"
          />
          {/* subtitle */}
          <motion.p
            animate={visibility.contact ? "visibleSlow" : "hidden"}
            initial="hidden"
            variants={variants}
            transition={{ duration: duration, delay: delay * 2 }}
            className="contact-subtitle"
          >
            Have a question or want to work together?
          </motion.p>
        </div>

        {/* Contact Buttons */}
        <div className="contact-buttons">
          <motion.a
            href="https://github.com/yourusername"
            className="contact-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: visibility.contact ? 1 : 0 }}
            transition={{ duration: duration, delay: delay }}
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            className="contact-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: visibility.contact ? 1 : 0 }}
            transition={{ duration: duration, delay: delay * 1.5 }}
          >
            <FaLinkedinIn size={30} />
          </motion.a>
          <motion.a
            href="mailto:your.email@example.com"
            className="contact-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: visibility.contact ? 1 : 0 }}
            transition={{ duration: duration, delay: delay * 2 }}
          >
            <MdEmail size={30} />
          </motion.a>
        </div>

        {/* Return Home Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: visibility.contact ? 1 : 0 }}
          transition={{ duration: duration, delay: delay * 2.5 }}
          className="return-home-btn"
        >
          <PiArrowFatLinesUpFill size={30} />
        </motion.button>

        {/* Footer */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{
            y: visibility.contact ? 0 : 40,
            opacity: visibility.contact ? 1 : 0,
          }}
          transition={{ duration: duration, delay: delay * 2.5 }}
          className="footer"
        >
          <p>Alex Threet &copy; 2024</p>
        </motion.div>
      </div>
    </Fragment>
  );
}
