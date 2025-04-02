import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./NavigationMenu.module.css";

export type NavigationMenuType = {
  className?: string;
};

const NavigationMenu: FunctionComponent<NavigationMenuType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.navigationMenu, className].join(" ")}>
      <Button type="unselected" icon="/icon.svg" xXXXX="Button1" />
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

export default NavigationMenu;
