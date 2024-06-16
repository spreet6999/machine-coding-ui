import PropTypes from "prop-types";

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  style: PropTypes.object,
};

function ProgressBar({ progress = 0, height = 10, width, style = {} }) {
  const progressBarContainerStyle = {
    height: height ? height : "24px",
    width: width ? width : "100%",
    backgroundColor: "#f3f3f3",
    borderRadius: "5px",
    position: "relative",
    overflow: "hidden",
    ...style,
  };

  const progressBarFillerStyle = {
    height: height ? height : "24px",
    width: `100%`,
    backgroundColor: "#007bff",
    borderRadius: "5px",
    transform: `translateX(${progress - 100}%)`,
  };

  const progressBarLabelStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: progress < 49 ? "#000" : "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
  };

  return (
    <section
      className="progress-bar-container"
      style={{ ...progressBarContainerStyle }}
    >
      <article
        className="progress-bar-filler"
        style={{ ...progressBarFillerStyle }}
      ></article>
      <span className="progress-bar-label" style={{ ...progressBarLabelStyle }}>
        {progress + "%"}
      </span>
    </section>
  );
}

export default ProgressBar;
