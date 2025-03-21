import cx from "classnames";

import styles from "./Header.module.css";

export const Header = ({
  children,
  className,
  onChange,
  onKeyDown,
  setValue,
  value,
  ...props
}) => {
  const blockClass = cx(styles._, {
    [className]: !!className,
  });

  return (
    <header className={blockClass} {...props}>
      <h1 className={styles.title}>todos</h1>
      <input
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={styles.input}
        placeholder="тест"
        autoFocus
      />
    </header>
  );
};
