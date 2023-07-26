import React from "react";
import { Link } from "react-router-dom";
import { Jackboys, Midnights, BIB, BID } from "../../../../Assets/images";
import { useFilter } from "../../../../Context";
import styles from "./Categories.module.css";

const Categories = () => {
  const { filterDispatch } = useFilter();

  const filterFromHome = category => {
    filterDispatch({ type: "CLEAR" });
    filterDispatch({ type: "CATEGORY_FILTER", payload: { type: category } });
  };

  return (
    <div className={styles.categoryList}>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("Hip-hop")}
      >
        <img src={Jackboys} alt="Hero Image" />
        <span>Hip-hop</span>
      </Link>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("Pop")}
      >
        <img src={Midnights} alt="Hero Image" />
        <span>Pop</span>
      </Link>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("RnB")}
      >
        <img src={BID} alt="Hero Image" />
        <span>RnB</span>
      </Link>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("Rock")}
      >
        <img src={BIB} alt="Hero Image" />
        <span>Rock</span>
      </Link>
    </div>
  );
};

export { Categories };
