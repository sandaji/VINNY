import React from "react";
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
} from "../../assets";
import styles from "../../style";

const data = [
  {
    id: 1,
    title: "amazon clone",
    image: portfolio1,
    desc: "A clone of amazone weg using tailwind css and react",
  },
  {
    id: 2,
    title: "Electro-shoppie",
    image: portfolio2,
    desc: "Ecommerce website for electronics",
  },
  {
    id: 3,
    title: "Furniture store",
    image: portfolio3,
    desc: "a platform where customers can get to shop there wide varity of different goods",
  },
  {
    id: 4,
    title: "Sanity ecommerce",
    image: portfolio4,
    desc: "An ecommerce with sanity as backend",
  },
  {
    id: 5,
    title: "amazone clone",
    image: portfolio5,
    desc: "A clone of amazone",
  },
  {
    id: 6,
    title: "amazone clone",
    image: portfolio6,
    desc: "A clone of amazone",
  },
  {
    id: 7,
    title: "e-commerce website",
    image: portfolio7,
    desc: "A clone of amazone",
  },
  {
    id: 8,
    title: "netflix landing page clone",
    image: portfolio8,
    desc: "A clone of amazone",
    live: "netflix.com",
    github: "github.com",
  },
];

const projects = () => {
  return (
    <div className="  bg-primary min-w-screen  mx-auto mt-10">
      <div className="grid sm:grid-cols-2 xs:grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 ">
        {data.map(({ id, image, title, desc, github, live }) => {
          return (
            <div
              key={id}
              className=" rounded-lg m-h-64 mt-5 p-2 border-[#9926f0] border-solid border-[1px] transform hover:translate-y-2 hover:shadow-xl transition duration-300
              
              "
            >
              <figure className="mb-2">
                <img
                  src={image}
                  alt={title}
                  className="h-64 ml-auto mr-auto object-contain rounded-lg"
                />
              </figure>
              <div className="rounded-lg p-4 min-h-[35] flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none capitalize">
                    {title}
                  </h5>
                  <span className={`${styles.paragraph} `}>{desc}</span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white mb-5 font-light">
                    <button>{live}</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default projects;
