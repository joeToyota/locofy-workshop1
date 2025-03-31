import { FunctionComponent } from "react";
import NavigationMenu from "../components/NavigationMenu";
import styles from "./InternalWorkshop.module.css";

const InternalWorkshop: FunctionComponent = () => {
  return (
    <div className={styles.internalWorkshop}>
      <section className={styles.mainContent}>
        <NavigationMenu />
        <div className={styles.mainContentChild} />
      </section>
    </div>
  );
};

export default InternalWorkshop;
