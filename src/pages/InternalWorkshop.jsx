import NavigationMenu from "../components/NavigationMenu";
import styles from "./InternalWorkshop.module.css";

const InternalWorkshop = () => {
  return (
    <div className={styles.internalWorkshop}>
      <section className={styles.mainContent}>
        <NavigationMenu />
      </section>
    </div>
  );
};

export default InternalWorkshop;
