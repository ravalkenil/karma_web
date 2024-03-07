import React, { useState } from "react";
import { apple, bill, google, logo1, Ui_Ux } from "../assets";
import styles, { layout } from "../style";
import { ui_ux, Mobile, Customer,Frontend ,Backend ,SEO ,Quality } from "../assets/index";

const Billing = () => {
  const [activeTab, setActiveTab] = useState(0);

  const Data = [
    {
      Labal: "UI/UX Design",
      p: "We give you the power to present your business in an engaging way using cutting-edge designs made through the appropriate maneuverof HTML5, animation, and interactive elements. Our design team has helped many companies achieve both business goals and user satisfaction",
      image: `${ui_ux.main_ui}`,
      icons: [
        {
          name: "Figma",
          icon: `${ui_ux.Figma}`,
        },
        {
          name: "Invision",
          icon: `${ui_ux.Invision}`,
        },
        {
          name: "Mockflow",
          icon: `${ui_ux.Mockflow}`,
        },
        {
          name: "Photoshop",
          icon: `${ui_ux.Photoshop}`,
        },
        {
          name: "Sketch",
          icon: `${ui_ux.Sketch}`,
        },
        {
          name: "Xd",
          icon: `${ui_ux.Xd}`,
        },
      ],
    },
    {
      Labal: "Mobile App Development",
      p: "Our Mobile Development Team is capable of handling any type of project, be it on iOS, Android, or both. We don't just code, but also provide useful inputs during the design/development process to optimize your app's performance and gain outstanding results.",
      image: `${Mobile.main_mobile}`,
      icons: [
        {
          name: "Flutter",
          icon: `${Mobile.Flutter}`,
        },
        {
          name: "Kotlin",
          icon: `${Mobile.Kotlin}`,
        },
        {
          name: "React_Native",
          icon: `${Mobile.React_Native}`,
        },
        {
          name: "Swift",
          icon: `${Mobile.Swift}`,
        },
        {
          name: "Xamarin",
          icon: `${Mobile.Xamarin}`,
        },
      ],
    },
    {
      Labal: "Front-End Development",
      p: "We create all interfaces keeping the end-user in mind to ensure that the project resolves as many industry-based queries as possible within limited clicks. Whether it is creating a simple website for SMEs or designing complex tools for giant corporations, our team can do it all.",
      image: `${Frontend.main_frontend}`,
      icons: [
        {
          name: "HTML",
          icon: `${Frontend.HTML}`,
        },
        {
          name: "CSS",
          icon: `${Frontend.CSS}`,
        },
        {
          name: "Angular",
          icon: `${Frontend.Angular}`,
        },
        {
          name: "JavaScript",
          icon: `${Frontend.JavaScript}`,
        },
        {
          name: "Jquery",
          icon: `${Frontend.Jquery}`,
        },
        {
          name: "React",
          icon: `${Frontend.React}`,
        },
      ],

    },
    {
      Labal: "Back-End Development",
      p: "Our back-end developers put a lot of thought into building the backbone of your project to provide the ideal product from the client's, as well as, the user's perspective. Our professionals are specialized in delivering flexible, scalable, highly advanced, and fast-loading solutions.",
      image: `${Backend.main_backend}`,
      icons: [
        {
          name: "C++",
          icon: `${Backend.Cplus}`,
        },
        {
          name: ".NET",
          icon: `${Backend.Dot_Net}`,
        },
        {
          name: "Node_js",
          icon: `${Backend.Node_js}`,
        },
        {
          name: "Python",
          icon: `${Backend.Python}`,
        },
        {
          name: "Shopify",
          icon: `${Backend.Shopify}`,
        },
        {
          name: "Wordpress",
          icon: `${Backend.Wordpress}`,
        },
      ],
    },
    {
      Labal: "SEO & Digital Marketing",
      p: "With a goal of providing results-driven digital marketing services and excellent customer care, our SEO experts strive to deliver the best possible outcomes. We can handle search engine optimizations, content optimizations, off-page, and on-page optimizations effectively Know more.",
      image: `${SEO.main_seo}`,
      icons: [
        {
          name: "Google Analytics",
          icon: `${SEO.Google_Analytics}`,
        },
        {
          name: "Google Trends",
          icon: `${SEO.Google_Trends}`,
        },
        {
          name: "Google Search",
          icon: `${SEO.Google_search}`,
        },
        {
          name: "SEO spyGlass",
          icon: `${SEO.SEO_spyGlass}`,
        },
        {
          name: "Screaming frog",
          icon: `${SEO.Screaming_frog}`,
        },
      ],
    },
    {
      Labal: "Quality Assurance",
      p: "A flawless product is crucial for the success of any business. Hence, we offer the best QA specialists, who conduct tests on your project through manual and automated systems regularly, to report issues if any, and assist you in implementing necessary upgrades on time.",
      image: `${Quality.main_quality}`,
      icons: [
        {
          name: "Appium",
          icon: `${Quality.Appium}`,
        },
        {
          name: "LambaTest",
          icon: `${Quality.LambaTest}`,
        },
        {
          name: "Postman",
          icon: `${Quality.Postman}`,
        },
        {
          name: "Selenium",
          icon: `${Quality.Selenium}`,
        },
      ],
    },
    {
      Labal: "Customer Support",
      p: "Netizens Technologies can help businesses win the hearts of their customers by walking the extra mile when required. Our BPO & customer support team can assist your users through undertakings like maintenance, installation, up-gradation, training, and query resolution.",
      image: `${Customer.main_cu}`,
      icons: [
        {
          name: "Email_Support",
          icon: `${Customer.Email_Support}`,
        },
        {
          name: "Inbound Calls",
          icon: `${Customer.Inbound_Calls}`,
        },
        {
          name: "Live chat support",
          icon: `${Customer.Live_chat_support}`,
        },
        {
          name: "Virtual Assistance",
          icon: `${Customer.Virtual_Assistance}`,
        }
      ] 
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <section id="product" className={layout.sectionReverseadd}>
      <div class="col-12 text-center">
        <span class="block text-white text-3xl  ">Our Services</span>
        <h2 class="text-4xl font-bold text-white">
          Digital Design & Development Tasks <br /> Under One Roof
        </h2>
      </div>

      <div class="col-12 text-center">
        <svg
          class="py-3 expert-svg px-8"
          src={logo1}
          viewBox="0 0 1067 226"
          fill="none"
          width="100%"
          height="100%"
        >
          <path
            class="path active"
            d="M538.5 55C501.069 173.281 143.781 145.868 14.5 207.879C10 210.086 1 210.7 1 225.5  1 225.5"
            stroke="#ffff"
            stroke-linecap="round"
            stroke-dasharray="6 6"
          ></path>
          <path
            class="path"
            d="M538.608 61C503.648 171.471 275.683 172.071 199.5 203.124C192.833 205.416 179.5 213 179.5 225"
            stroke="#ffff"
            stroke-linecap="round"
            stroke-dasharray="6 6"
          ></path>
          <path
            class="path"
            d="M539 65C520.703 183.81 391.326 172.124 370 214C369 216.5 368.5 216.5 368.5 224.5"
            stroke="#ffff"
            stroke-linecap="round"
            stroke-dasharray="6 6"
          ></path>
          <path
            class="path"
            d="M540 224C540 182 540 147.5 540 71"
            stroke="#ffff"
            stroke-linecap="round"
            stroke-dasharray="6 6"
          ></path>
          <path
            class="path"
            d="M540 65C557.921 184.183 684.643 172.46 705.531 214.467C706.51 216.975 707 216.975 707 225"
            stroke="#ffff"
            stroke-linecap="round"
            stroke-dasharray="6 6"
          ></path>
          <path
            class="path"
            d="M540 61C577.032 178.024 826.967 171.756 887.009 209C890.839 211.167 898.6 217.3 899 224.5"
            stroke="#ffff"
            stroke-linecap="round"
            stroke-dasharray="6 6"
          ></path>
          <path
            class="path"
            d="M540.5 55C578.314 174.494 906.6 147.689 1053.5 210.432C1057.67 211.954 1064.5 215 1065.5 225"
            stroke="#ffff"
            stroke-linecap="round"
            stroke-dasharray="6 6"
          ></path>
          <g filter="url(#filter0_d_1044:1079)">
            {/* <circle cx="540.5" cy="64.5" r="44.5" fill="white"></circle> */}
            <img src={logo1} alt="" />
          </g>
          {/* <path fill="#0E3572" d="M535.554 49H554.612C557.513 49 559.999 51.4859 559.999 54.3862V73.4449C559.999 70.5446 557.513 68.0587 554.612 68.0587L541.109 67.8892L540.94 54.3862C540.94 51.4859 538.454 49 535.554 49Z"></path> */}
          {/* <path fill="#ED1C24" d="M560.001 86.4357V72.8217C560.001 70.0595 557.718 67.8892 554.814 67.8892H541.12C540.913 74.7948 544.44 77.7543 544.44 77.7543L555.229 88.0141C555.229 88.0141 556.058 88.606 556.888 89.0006H557.511C558.963 89.0006 560.001 87.8168 560.001 86.4357Z"></path> */}
          {/* <path fill="#3EAFD1" d="M522.565 48.9995H536.179C538.941 48.9995 541.111 51.2818 541.111 54.1864V67.8799C534.206 68.0874 531.246 64.5603 531.246 64.5603L520.987 53.7715C520.987 53.7715 520.395 52.9416 520 52.1117V51.6967C520 50.2444 521.184 48.9995 522.565 48.9995Z"></path> */}
          <defs>
            <filter
              id="filter0_d_1044:1079"
              x="451"
              y="0"
              width="179"
              height="179"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              {/* <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="25"></feOffset>
                      <feGaussianBlur stdDeviation="22.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.054902 0 0 0 0 0.152941 0 0 0 0.1 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1044:1079"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1044:1079" result="shape"></feBlend> */}
            </filter>
          </defs>
        </svg>
      </div>

      <div className="flex  gep-4 md:block lg:block">
        <ul className="flex flex-wrap justify-between ">
          {Data.map((tab, index) => (
            <li>
              <button
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2  flex items-center space-x-2 "
                onClick={() => handleTabClick(index)}
              >
                <span>{tab.Labal}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div class="flex flex-wrap py-12">
        <div class="md:w-7/12">
          <div class="content">
            <h3 class="text-5xl  text-white font-bold">
              {Data[activeTab].Labal}
            </h3>
            <p class="mt-6 text-white">{Data[activeTab].p}</p>
          </div>
        </div>
        <div class="md:w-5/12">
          <div class="svg-box flex p-6 justify-center">
            <img
              src={Data[activeTab].image}
              class="rounded-3xl"
              alt="uiuxDevelopement"
              title="uiuxDevelopement"
            />
          </div>
        </div>
        <div class="w-full ">
          <div class=" flex flex-row gap-20">
            {Data[activeTab].icons.map((ic, i) => (
              <div class="flex flex-col gap-4">
                <span>
                  <img src={ic.icon} alt="icon" />
                </span>
                <h5 className="text-white text-xl">{ic.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
