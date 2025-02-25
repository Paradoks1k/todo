import React, { useState } from "react";
import styles from "./listitem.module.css";
import cx from "classnames";

const noop = () => {};
export const ListItem = ({
  className = "",
  onChange = noop,
  title = "",
  value: initialValue = "",
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const blockClass = cx(styles._, { [className]: !!className });
  const editClass = cx(styles.input, {
    [styles.inputEditing]: isEditing,
  });
  const rowClass = cx(styles.row, {
    [styles.rowEditing]: isEditing,
  });
  const handleClick = () => {
    setIsEditing(true);
  };
  const handleChange = ({ target: { value } }) => {
    setValue(value);
    onChange(value);
  };

  return (
    <>
      <li className={blockClass} onClick={handleClick} {...props}>
        <div className={rowClass}>
          <input className={styles.checkbox} type="checkbox" checked />
          <label className={styles.title}>{title}</label>
          <button className={styles.deletebutton}></button>
        </div>
        <input className={editClass} value={value} onChange={handleChange} />
      </li>
    </>
  );
};
