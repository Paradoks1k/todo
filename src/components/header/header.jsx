import React, { useState } from "react";
import styles from "./header.module.css";
import cx from "classnames";

const ENTER_KEY = 13;

export const Header = ({
  children,
  className,
  value,
  setValue,
  onChange,
  onKeyDown,
  ...props
}) => {
  // const [value, setValue] = useState("");
  const blockClass = cx(styles.head, { [className]: !!className });
  const handleChange = (event) => {
    console.log("+", event.target.value);
    onChange(event);
  };
  // const handleChange = ({ target: { value } }) => {
  //   setValue(value);
  // };
  // const handleKeyDown = ({ keyCode }) => {
  //   if (keyCode === ENTER_KEY) {
  //     console.log("нажат", keyCode);
  //   }
  // };
  return (
    <div>
      <header className={blockClass} {...props}>
        <h3 className={styles.title}>Todos</h3>
        <input
          value={value}
          onKeyDown={onKeyDown}
          onChange={handleChange}
          type="text"
          className={styles.input}
          placeholder="Тестa"
          autofocus
        />
      </header>
    </div>
  );
};
