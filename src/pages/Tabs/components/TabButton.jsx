import PropTypes from "prop-types";

import styleObj from "./style.module.css";

TabButton.propTypes = {
  variant: PropTypes.string.isRequired,
  label: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  style: PropTypes.style,
  onClick: PropTypes.func.isRequired,
};

function TabButton({
  label = "Tab 1",
  id = "",
  isActive = false,
  style = {},
  onClick = () => {},
}) {
  console.log("id", id, isActive);
  return (
    <button
      id={id}
      onClick={onClick}
      className={`${styleObj["tabs-buttons"]} ${
        isActive ? styleObj["active"] : ""
      }`}
      style={{ ...style, minWidth: "20%" }}
    >
      {label}
    </button>
  );
}

export default TabButton;
