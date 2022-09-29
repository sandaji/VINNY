import React from 'react'
import { resume } from '../assets';

const Cv = () => {
  return (
    <a href="#" 
      type="submit" 
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      DOWNLOAD CV
    </a>
  );
}

export default Cv