import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./NavigationMenu.module.css";
import alertHellowWorld from "../libs/alertHellowWorld";

const NavigationMenu = ({ className = "" }) => {
  return (
    <header className={[styles.navigationMenu, className].join(" ")}>
      <Button onClick={()=>{alertHellowWorld()}} className="hover:bg-red-500" type="unselected" icon="/icon.svg" xXXXX="Button1" />
      <Button
        type="unselected"
        buttonBorder="none"
        icon="/icon-1.svg"
        xXXXX="Button2"
      />
      <Button
        type="unselected"
        buttonBorder="none"
        icon="/icon-2.svg"
        xXXXX="Button3"
      />
      <Button
        type="unselected"
        buttonBorder="none"
        icon="/icon-3.svg"
        xXXXX="Button4"
      />
    </header>
  );
};

NavigationMenu.propTypes = {
  className: PropTypes.string,
};

export default NavigationMenu;
