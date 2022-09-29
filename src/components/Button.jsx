import React from "react";
import styles from "../style"

const Button = () => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] btn btn-primary  rounded-[10px] outline-none mt-10 sm:${styles.flexCenter}`}>
    <a href="#contacts">
    CONTACT ME</a>
  </button>
);

export default Button;
