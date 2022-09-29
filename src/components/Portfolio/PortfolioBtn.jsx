import React from 'react'
import { apple, bill, google } from "../../assets";


const PortfolioBtn = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a
          href={github}
          className="btn btn-primary w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          target=""
        >
          GITHUB
        </a>
        <a href={demo} className="btn btn-primary w-[144.17px] h-[43.08px] object-contain
        cursor-pointer">
          LIVE DEMO
        </a>
      
      </div>
    </div>
  );
}

export default PortfolioBtn