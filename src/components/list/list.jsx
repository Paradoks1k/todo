import React from "react";
import styles from "./list.module.css";
import cx from "classnames";
import { ListItem } from "../listitem";
const noop = () => {};
const empty = [];

export const List = ({
  children,
  className,
  list = empty,
  onItemChange = noop,
  onItemDeleteClick = noop,
  ...props
}) => {
  return (
    <div>
      <ul className={cx(styles.list, { [className]: !!className })} {...props}>
        {list.map(({ title, value }) => {
          const handleItemChange = (value) => () => {
            onItemChange(value);
          };
          const handDeleteButtonClick = (value) => () => {
            onItemDeleteClick(value);
          };

          return (
            <ListItem
              id={value}
              key={value}
              onChange={handleItemChange}
              onDelete={handDeleteButtonClick}
              title={title}
              value={value}
            />
          );
        })}
      </ul>
    </div>
  );
};

/* <ul className={styles.list}>
<li className={styles.item + styles.completed}>
  <div className={styles.row}>
    <input className={styles.input} type="checkbox" checked />
    <label className={styles.lebel}>Taste JavaScript</label>
    <button className={styles.button}></button>
  </div>
  <input
    className={styles.item + styles.itemEdited}
    value="Create a TodoMVC template"
  />
</li>
<li>
  <div className={styles.row}>
    <input className={styles.input} type="checkbox" />
    <label className={styles.lebel}>Buy a unicorn</label>
    <button className={styles.deleteButton}></button>
  </div>
  <input
    className={styles.item + styles.itemEdited}
    value="Rule the web"
  />
</li>
</ul> */

// const mock = [
//   {
//     complited: false,
//     isEdit: false,
//     title: "xleab",
//     value: "cxv",
//   },
//   {
//     complited: false,
//     isEdit: false,
//     title: "xleba",
//     value: "cxva",
//   },
//   {
//     complited: false,
//     isEdit: false,
//     title: "xlebss",
//     value: "cxvss",
//   },
// ];
// const itemClass = cx({
//   [styles.item]: true,
//   [styles.itemComplited]: complited,
// });
// const valueClass = cx({
//   [styles.value]: true,
//   [styles.valueEdited]: isEdit,
// });
