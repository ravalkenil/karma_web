import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexce} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <motion.h2
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className={styles.heading2}
        >
          What people are <br className="sm:block hidden" />
          saying about us
        </motion.h2>
        <div className="w-full md:mt-0 mt-6">
          <motion.p 
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1, }}
          transition={{ ease: "easeOut", duration: 1 }}
          className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </motion.p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]">
        {feedback.map((card,i) => (
          <motion.div 
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "circOut", duration: i * 0.5}}
          className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
          >
            <Feedback key={card.id} {...card} />
          </motion.div>
          
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
