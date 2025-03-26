import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  className = "",
  type = "unselected",
  buttonBorder,
  icon,
  xXXXX,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      border: buttonBorder,
    };
  }, [buttonBorder]);

  return (
    <div
      className={[styles.button, className].join(" ")}
      data-type={type}
      style={buttonStyle}
    >
      <img className={styles.icon} loading="lazy" alt="" src={icon} />
      <div className={styles.xxxxx}>{xXXXX}</div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  xXXXX: PropTypes.string,

  /** Variant props */
  type: PropTypes.number,

  /** Style props */
  buttonBorder: PropTypes.string,
};

export default Button;
