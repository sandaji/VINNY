import styles from "../style";

import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
} from "../assets";


const data = [
  {
    id: 1,
    title: "amazon clone",
    image: portfolio1,
    desc: "A clone of amazone weg using tailwind css and react",
    live: "Preview.we.app",
    github: "github.com/sandaji",
    framework: "github",
  },
  {
    id: 2,
    title: "Electro-shoppie",
    image: portfolio2,
    desc: "Ecommerce website for electronics",
    live: "Preview",
    github: "github",
    framework: "github",
  },
  {
    id: 3,
    title: "Furniture store",
    image: portfolio3,
    desc: "a platform where customers can get to shop there wide varity of different goods",
    live: "Preview",
    github: "github",
  },
  {
    id: 4,
    title: "Sanity ecommerce",
    image: portfolio4,
    desc: "An ecommerce with sanity as backend",
    live: "Preview",
    github: "github",
  },
  {
    id: 5,
    title: "amazone clone",
    image: portfolio5,
    desc: "A clone of amazone",
    live: "Preview",
    github: "github",
  },
  {
    id: 6,
    title: "amazone clone",
    image: portfolio6,
    desc: "A clone of amazone",
    live: "Preview",
    github: "github",
  },
  {
    id: 7,
    title: "e-commerce website",
    image: portfolio7,
    desc: "A clone of amazone",
    live: "Preview",
    github: "github",
  },
  {
    id: 8,
    title: "Preview landing page clone",
    image: portfolio8,
    desc: "A clone of amazone",
    live: "Preview",
    github: "github",
  },
];


const Portfolio = () => (
  <section id="portfolio" className="w-[full] lg:h-[150vh] md:h-auto mt-[6rem]">
    <div className={`${styles.flexCenter} flex-col`}>
      <h2 className={[styles.heading2, styles.flexCenter]}>PORTFOLIO</h2>
      <div className="heading__line"></div>
      <p className={`${styles.paragraph} max-w-[470px] my-5`}>
        My Recent Works
      </p>
    </div>
    {/* filter buttons */}
    <div className={`${styles.flexCenter}`}>
      <button className={` ${styles.filterbtn}  `} type="button">
        All
      </button>
      <button className={` ${styles.filterbtn}  `} type="button">
        websites
      </button>
      <button className={` ${styles.filterbtn}  `} type="button">
        design
      </button>
      <button className={` ${styles.filterbtn}  `} type="button">
        mockup
      </button>
    </div>

    {/* <Projects /> */}
    <div className="  bg-primary w-full  mr-2 mt-10">
      <div className="grid xs:grid-cols-2  gap-8 sm:grid-cols-3 lg:grid-cols-4 ">
        {data.map(({ id, image, title, desc, github, live,framework }) => {
          return (
            <div
              key={id}
              className=" rounded-lg h-[20rem] mt-5 p-2 border-[#9926f0] border-solid border-[1px] transform hover:-translate-y-2 hover:shadow-xl transition duration-300 hover:border-red
              hover:scale-[1.1] portfolio
              "
            >
              <figure className="mb-2 relative  ">
                <img
                  src={image}
                  alt={title}
                  className="ml-auto mr-auto object-cover rounded-lg h-[8rem] w-[15rem]"
                />
              </figure>
              <div className="rounded-lg p-4 h-[10rem] w-[100%] flex flex-col overflow-hidden ">
                <div>
                  <h5 className={`text-white text-2xl font-bold leading-none capitalize ${styles.flexCenter}`} >
                    {title}
                  </h5>
                  <span
                    className={`md:block hidden overflow-hidden leading-none ${styles.paragraph} `}
                  >
                    {desc}
                  </span>
                </div>
                <div className={`text-white mt-2 capitalize ${styles.flexCenter}`}>
                  {framework}
</div>
                <div
                  className={`text-lg md:mb-2   text-white mt-6  flex items-center justify-around `}
                >
                  <a
                    href={live}
                    className="btn btn-primary w-[45%]  font-[500] rounded uppercase justify-center"
                  >
                  <h3 className="flex flex-1 justify-center">live</h3>  
                  </a>

                  <a
                    href={live}
                    className="btn btn-primary w-[45%]  font-[500] rounded uppercase justify-center"
                  >
                  <h3 className="flex flex-1 justify-center">code</h3>  
                  </a>
                 
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Portfolio;
