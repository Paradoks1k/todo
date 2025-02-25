import React from "react";
import { useState } from "react";
import { Header, Main, Footer } from "../index";
import cx from "classnames";
import styles from "./wraper.module.css";

const ENTER_KEY = 13;

// const initialData = [
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

export const Wraper = ({ children, className, isFirst = true, ...props }) => {
  // const [selectedTodos] = useState([]);
  // const [list, setList] = useState("");
  const [todos, setTodos] = useState([]);
  const [newValue, newSetValue] = useState("");
  const [complitedTodos] = useState([]);
  const blockClass = cx(styles._, { [className]: !!className });

  const handleChange = ({ target: { value } }) => {
    newSetValue(value);
  };
  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === ENTER_KEY) {
      setTodos([
        ...todos,
        {
          title: newSetValue,
          value: newValue,
        },
      ]);
      newSetValue("");
    }
  };
  const hasList = todos.length !== 0;
  return (
    <div className={blockClass} {...props}>
      <Header
        value={newValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {hasList && (
        <>
          <Main
            complitedTodos={complitedTodos}
            list={todos}
            // selectedTodos={selectedTodos}
          />
          <Footer />
        </>
      )}
    </div>
  );
};

// return (
//   <div>
//     <Header />
//     {isFirst ? (
//       ""
//     ) : (
//       <>
//         <Main data={[]} />
//         <List data={list} />
//         <Footer onClearButtonClick={setList} selected={selected} />{" "}
//       </>
//     )}
//   </div>
// );

// {todos !== 0 && (
//   <>
//     {todos.map((todo) => (
//       <div>{todo}</div>
//     ))}
