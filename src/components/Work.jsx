import React, { useState } from "react";
import styles from "../style";
import { robot, robot1, robot2 } from "../assets";
import {workimages} from "../assets/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "NFT Marketplace with react",
      content: "Nft",
      images: [
        `${workimages.NFT}`,
        `${workimages.NFT2}`,
        // Add more image URLs here
      ],
      p: "The premier NFT marketplace where digital art, collectibles, and unique digital assets come to life like never before. Dive into a world where creativity knows no bounds, and ownership is as unique as the blockchain itself. NFTropolis is your one-stop destination for discovering, buying, selling, and showcasing the most extraordinary NFTs",
      li1: "dfrw",
      li2: "sf",
      li3: "dd",
    },
    {
      label: "NFT Marketplace with Next",
      content: "NFT Marketplace",
      images: [
        `${workimages.Nft_next}`,
        `${workimages.Nft_next}`
        // Add more image URLs here
      ],
      p: "The premier NFT marketplace where digital art, collectibles, and unique digital assets come to life like never before. Dive into a world where creativity knows no bounds, and ownership is as unique as the blockchain itself. NFTropolis is your one-stop destination for discovering, buying, selling, and showcasing the most extraordinary NFTs",
      li1: " NFT marketplace where digital art",
      li2: "digital assets come to life like never before",
      li3: "Dive into a world where creativity knows",
    },
    {
      label: "NFT Bridge",
      content: "NFT Bridge",
      images: [
        `${workimages.Nft_bridge}`,
        `${workimages.Nft_bridge}`
        // Add more image URLs here
      ],
      p: "The premier NFT marketplace where digital art, collectibles, and unique digital assets come to life like never before. Dive into a world where creativity knows no bounds, and ownership is as unique as the blockchain itself. NFTropolis is your one-stop destination for discovering, buying, selling, and showcasing the most extraordinary NFTs",
      li1: " NFT marketplace where digital art",
      li2: "digital assets come to life like never before",
      li3: "Dive into a world where creativity knows",
    },
    // Add more tabs here
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Add this line to enable automatic sliding
    autoplaySpeed: 2000, // Set the speed of automatic sliding in milliseconds
    // appendDots: (dots) => (
    //   <div className="flex justify-center mt-4">
    //     <ul className="flex items-center">
    //       {dots.map((dot, index) => (
    //         <li key={index} className="mx-2">
    //           {dot}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // ),
    customPaging: (i) => (
      <div className="h-4 w-4 rounded-lg hover:brightness-125 bg-teal-300" />
    ),
  };

  return (
    <section
      id="work"
      className={`${styles.paddingY} ${styles.flexce} flex-col relative`}
    >
      {/* <div className='flex md:flex-row flex-col sm:py-16 py-6' > */}
      {/* <h2 className={styles.heading2}>Work History  </h2>
        <div class="flex min-h-screen flex-row bg-gray-100 text-gray-800">
        <aside class="sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
          <div class="my-4 w-full border-b-4 border-indigo-100 text-center">
            <span class="font-mono text-xl font-bold tracking-widest"> <span class="text-indigo-600">HELLO</span> DEV </span>
          </div>
          <div class="my-4"></div>
        </aside>
        <main class="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
          <div class="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">Content</div>
        </main>
      </div> */}
      {/* </div> */}
      {/* <div class="flex">
        <div class="w-1/4">
          <div class="overflow-x-auto">
            <div class="flex flex-col">
              <button
                class="px-4 py-2 border text-white border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Fintech
              </button>
              <button
                class="px-4 py-2 border text-white  border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                E-Commerce
              </button>
              <button
                class="px-4 py-2 border text-white  border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Fitness
              </button>
              <button
                class="px-4 py-2 border text-white border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Food Delivery
              </button>
              <button
                class="px-4 py-2 border text-white border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Real Estate
              </button>
              <button
                class="px-4 py-2 border text-white border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Travel
              </button>
              <button
                class="px-4 py-2 border text-white border-gray-300 bg-gray-100"
                tabindex="0"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Social Networking
              </button>
              <button
                class="px-4 py-2 border text-white border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Business
              </button>
              <button
                class="px-4 py-2 border text-white  border-gray-300 hover:bg-gray-100"
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Education
              </button>
            </div>
          </div>
        </div>
        <div class="w-3/4">
          <div class="p-4">
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-0"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-1"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-2"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-3"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-4"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-5"></div>
            <div class="block" role="tabpanel" id="vertical-tabpanel-6">
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-4">Social Networking</h3>
                <div class="flex flex-wrap mb-4">
                  <div class="w-full sm:w-1/2">
                    <div class="rounded-lg overflow-hidden">
                      <img src={robot} alt="Tab Panel Images" />
                    </div>
                  </div>
                  <div class="w-full sm:w-1/2">
                    <div class="rounded-lg overflow-hidden">
                      <img src={robot} alt="Tab Panel Images" />
                    </div>
                  </div>
                </div>
                <p className=" text-white">
                  A social media platform can help you expand your network and
                  tap into a whole new market. It can increase your brand value,
                  boost conversion rate, and improve customer satisfaction. Our
                  web developers are skillfully apt for such projects.
                </p>
                <ul class="list-disc pl-4">
                  <li className=" text-white">Messaging/Calling Application</li>
                  <li className=" text-white">
                    Communities Application/Website
                  </li>
                  <li className=" text-white">
                    Job Posting Application/Website
                  </li>
                </ul>
              </div>
            </div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-7"></div>
            <div class="hidden" role="tabpanel" id="vertical-tabpanel-8"></div>
          </div>
        </div>
      </div> */}

      <h2 className={styles.heading2}>Work History </h2>
      <div className="flex ">
        <div className="w-1/4 ">
          <div className="overflow-x-auto ">
            <div className="flex flex-col ">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded-3xl hover:brightness-125 my-1 text-white border-gray-300 ${
                    activeTab === index ? "bg-blue-gradient text-neutral-900" : "hover:bg-black"
                  }  ${
                    activeTab === index ? " text-neutral-900" : "hover:bg-black"
                  } `}
                  onClick={() => handleTabClick(index)}
                  role="tab"
                  aria-selected={activeTab === index}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="pl-7 ">
            <div className="block text-white " role="tabpanel">
              <div>
                <Slider {...settings} className="pb-8">
                  {tabs[activeTab].images.map((imageUrl, index) => (
                    
                    <div className="relative overflow-hidden rounded-lg m-10 md:h-96">
                      <img
                        src={imageUrl}
                        className="object-cover max-w-full  max-h-full"
                        alt={`Image ${index}`}
                      />
                    </div>
                  
                  ))} 
                </Slider>
                <h1 className= "text-white text-5xl pb-8">{tabs[activeTab].label} </h1>

                <p className="pt-10">{tabs[activeTab].p}</p>
                <ul className="list-disc pl-4">
                  <li>{tabs[activeTab].li1}</li>
                  <li>{tabs[activeTab].li2}</li>
                  <li>{tabs[activeTab].li3}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
