import PropTypes from "prop-types";

Time.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

function Time({ hours = 0, minutes = 0, seconds = 0 }) {
  return (
    <span>
      {hours % 10 === hours ? `0${hours}` : hours} :{" "}
      {minutes % 10 === minutes ? `0${minutes}` : minutes} :{" "}
      {seconds % 10 === seconds ? `0${seconds}` : seconds}
    </span>
  );
}

export default Time;
