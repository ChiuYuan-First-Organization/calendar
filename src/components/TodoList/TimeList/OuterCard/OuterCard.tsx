import React from "react";

import InnerCard from "./InnerCard/InnerCard";
import { YearObj, MonthObj } from "../../../../models/DateObj";

import styles from "./OuterCard.module.css";

const OuterCard: React.FC<{ yearBox: YearObj; expired: boolean }> = ({ yearBox, expired }) => {
  const year = yearBox.year;
  let contents = yearBox.monthList.map((monthObj: MonthObj) => (
      <InnerCard monthObj={monthObj} expired={expired} />
  ));
  if (expired) {
    contents = contents.reverse();
  }
  return (
    <section className={`${styles.card} ${expired ? styles.expired : ""}`}>
      <h3>Year: {year}</h3>
      <ul>{contents}</ul>
    </section>
  );
};

export default OuterCard;
