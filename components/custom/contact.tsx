import { motion } from "framer-motion";
import { Fragment } from "react";
import toast from "react-hot-toast";
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nova3t@gmail.com");
    toast.success("Copied Email: nova3t@gmail.com", { duration: 3000 });
  };

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
            id="contact-github-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: visibility.contact ? 1 : 0 }}
            transition={{ duration: duration, delay: delay }}
            href="https://github.com/Avonbek"
            target="_blank"
            className="contact-btn"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            id="contact-linkedin-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: visibility.contact ? 1 : 0 }}
            transition={{ duration: duration, delay: delay * 1.5 }}
            href="https://www.linkedin.com/in/alex-threet-968722300/"
            target="_blank"
            className="contact-btn"
          >
            <FaLinkedinIn size={30} />
          </motion.a>
          <motion.button
            id="contact-email-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: visibility.contact ? 1 : 0 }}
            transition={{ duration: duration, delay: delay * 2 }}
            onClick={() => handleCopyEmail()}
            className="contact-btn"
          >
            <MdEmail size={30} />
          </motion.button>
        </div>

        {/* Return Home Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: visibility.contact ? 1 : 0 }}
          transition={{ duration: duration, delay: delay * 2.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
