import cx from "classnames";

import styles from "./Page.module.css";
import {
  FooterContainer,
  HeaderContainer,
  MainContainer,
} from "../../containers";

export const Page = ({ className, hasList, ...props }) => {
  const blockClass = cx(styles._, className);

  return (
    <div className={blockClass} {...props}>
      <HeaderContainer />

      {hasList && (
        <>
          <MainContainer />
          <FooterContainer />
        </>
      )}
    </div>
  );
};
