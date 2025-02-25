import React from "react";
import cx from "classnames";
import styles from "./footerfilters.module.css";

const initialList = [
  {
    title: "Все",
    link: "#/",
  },
  {
    title: "Активные",
    link: "#/active",
  },
  {
    title: "Завершенные",
    link: "#/complited",
  },
];

export const FooterFilters = ({ className, list = initialList, ...props }) => {
  return (
    <div>
      <ul
        className={cx(styles.filter, { [className]: !!className })}
        {...props}
      >
        {list.map(({ title, link }) => (
          <li className={styles.item} key={title}>
            <a className={styles.link} href={link}>
              {title}
            </a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
