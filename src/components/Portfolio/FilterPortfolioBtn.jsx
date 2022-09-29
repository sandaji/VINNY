import React from 'react'
import  styles  from "../../style";

const FilterPortfolioBtn = () => {
  return (
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
      <button      className={` ${styles.filterbtn}  `}
            type="button">
        mockup
      </button>
    </div>
  );
}

export default FilterPortfolioBtn