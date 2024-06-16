import PropTypes from "prop-types";

ControlButtons.propTypes = {
  isPlaying: PropTypes.bool,
  isStopped: PropTypes.bool,
  disableSkipBackward: PropTypes.bool,
  disableSkipForward: PropTypes.bool,
  style: PropTypes.object,
  handlePlay: PropTypes.func,
  handleStop: PropTypes.func,
  handleSkip: PropTypes.func,
};

function ControlButtons({
  isPlaying = false,
  isStopped = false,
  disableSkipBackward = false,
  disableSkipForward = false,
  style = {},
  handlePlay = () => {},
  handleStop = () => {},
  handleSkip = () => {},
}) {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        marginTop: "0.4rem",
        ...style,
      }}
    >
      <button onClick={() => handleSkip(-1)} disabled={disableSkipBackward}>
        ⏮
      </button>
      <button onClick={() => handlePlay()} disabled={isStopped}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={() => handleStop()}>
        {isStopped ? "Re-Start" : "Stop"}
      </button>
      <button onClick={() => handleSkip(1)} disabled={disableSkipForward}>
        ⏭
      </button>
    </section>
  );
}

export default ControlButtons;
