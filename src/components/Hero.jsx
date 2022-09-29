import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Button from "./Button";
import BouncingBall from "./BouncingBall";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col overflow-hidden ${styles.paddingY}`}
    >
      <div
        className={`flex-1  ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 mt-10`}
      >
        <div className="flex flex-row items-center justify-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mt-10 mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">HELLO THERE</span> I'M
          </p>
        </div>
        <div className={`justify-center `}>
          <div className={`flex flex-row justify-between items-center w-full`}>
            <h1 className="flex-1 font-poppins font-semibold sm:text-[5.2rem] md:text-[2.5rem] text-[3rem] text-white ss:leading-[5rem] md:leading-[4rem] leading-[75px] ss:mt-3">
              IJAMY VINCENT <br className="sm:block hidden" />
              <span className="text-gradient">A FULL-STACK</span>
            </h1>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[3rem] text-white ss:leading-[100.8px] leading-[75px] w-full">
            DEVELOPER
          </h1>
        </div>
        <p
          className={`${styles.paragraph} max-w-[470px] items-between justify-center`}
        >
          If you are looking for a
          <span className="text-gradient font-semibold uppercase">
            {" "}
            passionate{" "}
          </span>
          developer who is paying attention to Details to you project,{" "}
          <span className="text-gradient font-semibold">
            LOOK no further.
          </span>{" "}
          I AM here bring that design to reality.
          <Button className={`mt-10 pt-4 mx-auto sm:${styles.flexCenter}`} />
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <BouncingBall className={`w-[100%] h-[100%] relative z-[5] `} />
        {/* <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        /> */}

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
