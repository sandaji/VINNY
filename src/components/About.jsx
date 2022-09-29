import { features } from "../constants";
import styles, { layout } from "../style";
import Cv from "./Cv";
import { Avatar, resume } from "../assets";
import Button from "./Button";
import Stats from "./stats";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px]  ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const About = () => (
  <section
    id="about"
    className={`${styles.paddingY} ${styles.flexCenter} bg-[#80808005] rounded-[2%] ss:w-full  relative flex-col h-[50%] `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className={`${styles.flexCenter} flex-col`}>
      <h2 className={[styles.heading2, styles.flexCenter]}>ABOUT ME</h2>
      <div className="heading__line"></div>
      <p className={`${styles.paragraph} max-w-[470px] my-5`}>
        My Introduction
      </p>
    </div>
    <div className={`container`}>
      <div
        className={`top w-full flex-col ${styles.flexCenter} ss:flex-row  `}
      >
        {/* //about image */}
        <div
          className={`ss:w-[30%] `}
        >
          <img
            src={Avatar}
            alt=""
            className={`h-[15rem] w-[15rem] ${styles.flexCenter}  border-[#9926f0] border-[1px] rounded-[10px]`}
          />
        </div>
        {/* //about content */}
        <div className={`${styles.paragraph} w-[60%] ss:-mt-[5rem]  ss:mx-4`}>
          {" "}
          Fullstack web developer with extensive knowledge and years of
          experiance working in web technologies and UI/UX design delivering
          quality work
        </div>{" "}
      </div>
      <div className={    `${styles.flexCenter} flex-col`}>
        <div className={``}>
          <Stats />
        </div>
        <div className={`w-full ${styles.flexCenter}`}>
          <a
            href={resume}
            download
            type="button"
            className={`btn text-[1.2rem]  btn-primary uppercase h-[2rem] w-[70%] flex justify-center rounded-[10px] font-500 ss:-mt-[28rem] ss:w-[20rem] ss:ml-[10rem] sm:-mt-10`}
          >
            {" "}
            download CV
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
