import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { logo1 } from "../assets/index";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      {/* <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'/>we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, 
          you can improve your financial life by building credit,
          earning rewards and saving money.
          But with hundreds of credit cards on the market.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div> */}

      <div class="flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 order-2 lg:order-1">
          <img src={logo1} alt="about" class="mx-auto lg:mx-0" />
        </div>
        <div class="lg:w-1/2 order-1 lg:order-2">
          <div class="about_text_block">
            <h2 class="text-xl lg:text-2xl text-white font-bold mb-4">
              About Us
            </h2>
            <p class="text-sm  text-white lg:text-base">
              KarmaChain Technology stands as a premier Website and App
              Development firm, renowned in India and esteemed globally. Our
              mission is to propel businesses towards growth, enabling them to
              connect with new audiences worldwide through our adept and
              punctual development solutions. With KarmaChain, rest assured
              about development costs and timelines - we're dedicated to
              supporting you in every scenario
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
