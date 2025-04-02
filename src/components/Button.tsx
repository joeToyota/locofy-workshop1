import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
  icon?: string;
  xXXXX?: string;

  /** Variant props */
  type?: string;

  /** Style props */
  buttonBorder?: CSSProperties["border"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  type = "unselected",
  buttonBorder,
  icon,
  xXXXX,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      border: buttonBorder,
    };
  }, [buttonBorder]);

  return (
    <button
      className={[styles.button, className].join(" ")}
      data-type={type}
      style={buttonStyle}
    >
      <img className={styles.icon} loading="lazy" alt="" src={icon} />
      <div className={styles.xxxxx}>{xXXXX}</div>
    </button>
  );
};

export default Button;
