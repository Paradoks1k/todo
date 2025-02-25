import React, { useState } from "react";
import styles from "./main.module.css";
import cx from "classnames";
import { List } from "../list/list";
const noop = () => {};
export const Main = ({ className, label = "Выбраны все", list }) => {
  return (
    <div>
      <section className={cx(styles.main, { [className]: !!className })}>
        <input id="todo-checkbox" className={styles.checkbox} type="checkbox" />
        <label for={styles.label}>{label}</label>
        <List list={list} onItemChange={noop} onItemDeleteClick={noop} />
      </section>
    </div>
  );
};
