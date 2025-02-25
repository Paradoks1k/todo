import React from "react";
import cx from "classnames";
import styles from "./footer.module.css";
import { FooterFilters } from "../footerfilters";

const noop = () => {};
const empty = [];

export const Footer = ({
  onClearButtonClick = noop,
  selected = false,
  buttonTitle = "очистить",
  className = "",
  selectedText = "Выбрано",
  value = empty,
  ...props
}) => {
  const filterLinkClass = cx({
    [styles.filterLink]: true,
    [styles.selected]: selected,
  });

  const handleClick = (event) => {
    onClearButtonClick(value);
  };

  const blockClass = cx(styles._, {
    [className]: !!className,
  });

  return (
    <div>
      <footer className={blockClass} {...props}>
        <span className={styles.countRow}>
          <strong className={styles.count}>0</strong>
          {selectedText}
        </span>
        ` <FooterFilters />
        <button onClick={handleClick} className={styles.button}>
          {buttonTitle}
        </button>
      </footer>
    </div>
  );
};

{
  /* <ul className={styles.filter}>
<li className={styles.filterItem}>
  <a className={filterLinkClass} href="#/">
    All
  </a>
</li>
<li className={styles.filterItem}>
  <a className={styles.filterLink} href="#/active">
    Active
  </a>
</li>
<li className={styles.filterItem}>
  <a className={styles.filterLink} href="#/completed">
    Completed
  </a>
</li>
</ul> */
}
