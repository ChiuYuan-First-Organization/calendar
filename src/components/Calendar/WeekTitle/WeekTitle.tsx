import React from "react";

import styles from "./WeekTitle.module.css";

const WeekTitle: React.FC = () => {
  const titleList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Son"];
  const TitleBox: React.FC<{ day: string; index: number }> = ({ day, index }) => {
    return (
      <li style={{backgroundColor: `hsl(${200 + index * 20}, 100%, 70%)`}}>
        <h3>{day}</h3>
      </li>
    );
  };

  const list = titleList.map((title, index) => <TitleBox key={index} day={title} index={index} />);

  return <ul className={styles.titleBar}>{list}</ul>;
};

export default WeekTitle;
