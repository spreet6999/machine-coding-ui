import PropTypes from "prop-types";

//* Import styles
import styleObj from "./style.module.css";

TabButton.propTypes = {
  variant: PropTypes.string.isRequired,
  label: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  style: PropTypes.style,
  additionalProps: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function TabButton({
  label = "Tab 1",
  id = "",
  isActive = false,
  style = {},
  additionalProps = {},
  onClick = () => {},
  onDelete = () => {},
}) {
  return (
    <div
      className={style["tab-button-container"]}
      style={{ ...style, minWidth: "20%" }}
    >
      <button
        id={id}
        onClick={onClick}
        className={`${styleObj["tab-button"]} ${
          isActive ? styleObj["active"] : ""
        }`}
        disabled={additionalProps?.isDisabled} //* additional prop for disabling button
      >
        {label}
      </button>
      {additionalProps?.isRemovable && <button onClick={onDelete}>x</button>}
    </div>
  );
}

export default TabButton;
