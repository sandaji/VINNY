import { feedback } from "../constants";
import { people01,people02, people03} from "../assets";
import styles from "../style";

const Test = () => {
  return (
    <div
      className={` h-[80%] overflow-hidden testimonials leading-7 ${styles.boxWidth}  grid-rows-2 mx-auto p-5 grid  grid-cols-4 gap-8`}
    >
      <div className="card  col-span-2 rounded-[10px] bg-[hsl(263,55%,52%)] text-white mb-2.5 p-8 ">
        <header className="card__header flex items-center mb-2.5 ">
          <img
            src={people01}
            alt=""
            className="w-20 h-20 rounded-[50%] border-solid border-2 border-[#996ed9] mr-2.5"
          />
          <div className=" ">
            <h3 className="text-[1.1rem] uppercase font-[700]">
              ijamy vincent
            </h3>
            <p className="opacity-50">verified developer</p>
          </div>
        </header>
        <p className="card__lead text-[1.5rem] leading-tight font-[500] mb-5"></p>
        <p className="card__quote text-[1rem] leading-snug font-[500] opacity-70"></p>
      </div>
      <div className="card   rounded-[10px] bg-[hsl(189,84%,59%)] text-white mb-2.5 p-8 ">
        <header className="card__header flex items-center mb-2.5 ">
          <img
            src={people01}
            alt=""
            className="w-20 h-20 rounded-[50%] border-solid border-2 border-[#996ed9] mr-2.5"
          />
          <div className=" ">
            <h3 className="text-[1.1rem] uppercase font-[700]">
              ijamy vincent
            </h3>
            <p className="opacity-50">verified developer</p>
          </div>
        </header>
        {/* <p className="card__lead text-[1.5rem]  font-[500] mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          accusantium sint 
        </p> */}
        <p className="card__quote text-[1rem]  font-[500] opacity-70">
        
        </p>
      </div>
      <div className="card  row-span-2 rounded-[10px] bg-[hsl(226,88%,56%)] text-white mb-2.5 p-8 ">
        <header className="card__header flex items-center mb-2.5 ">
          <img
            src={people01}
            alt=""
            className="w-20 h-20 rounded-[50%] border-solid border-2 border-[#996ed9] mr-2.5"
          />
          <div className=" ">
            <h3 className="text-[1.1rem] uppercase font-[700]">
              ijamy vincent
            </h3>
            <p className="opacity-50">verified developer</p>
          </div>
        </header>
        <p className="card__lead text-[1.5rem] leading-tight font-[500] mb-5"></p>
        <p className="card__quote text-[1rem] leading-snug font-[500] opacity-70"></p>
      </div>
      <div className="card rounded-[10px] bg-[hsl(189,64%,13%)] text-white mb-2.5 p-8 ">
        <header className="card__header flex items-center mb-2.5 ">
          <img
            src={people01}
            alt=""
            className="w-20 h-20 rounded-[50%] border-solid border-2 border-[#996ed9] mr-2.5"
          />
          <div className=" ">
            <h3 className="text-[1.1rem] uppercase font-[700]">
              ijamy vincent
            </h3>
            <p className="opacity-50">verified developer</p>
          </div>
        </header>
        <p className="card__lead text-[1.5rem] leading-tight font-[500] mb-5">
          
        </p>
        <p className="card__quote text-[1rem] leading-snug font-[500] opacity-70">
        
          <br />
          <br />
         
        </p>
      </div>
      <div className="card col-span-2 rounded-[10px] bg-[hsl(218,11%,48%)] text-white mb-2.5 p-8 ">
        <header className="card__header flex items-center mb-2.5 ">
          <img
            src={people01}
            alt=""
            className="w-20 h-20 rounded-[50%] border-solid border-2 border-[#996ed9] mr-2.5"
          />
          <div className=" ">
            <h3 className="text-[1.1rem] uppercase font-[700]">
              ijamy vincent
            </h3>
            <p className="opacity-50">verified developer</p>
          </div>
        </header>
        <p className="card__lead text-[1.5rem] leading-tight font-[500] mb-5"></p>
        <p className="card__quote text-[1rem] leading-snug font-[500] opacity-70">
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Test;
