import { Fragment } from "react";
import PropTypes from "prop-types";

Controls.propTypes = {
  time: PropTypes.number,
  isPaused: PropTypes.bool,
  handleSkip: PropTypes.func,
  handlePausePlay: PropTypes.func,
  handleReset: PropTypes.func,
  children: PropTypes.node || null,
};

function Controls({
  time = 0,
  isPaused = false,
  handleSkip = () => {},
  handlePausePlay = () => {},
  handleReset = () => {},
  children,
}) {
  return (
    <Fragment>
      <section
        style={{
          fontSize: "2rem",
          display: "flex",
          gap: 32,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{ cursor: "pointer" }}
          onClick={() => handleSkip(-50)}
          disabled={time < 50}
        >
          ⏮ 50 secs
        </button>
        {children}
        <button style={{ cursor: "pointer" }} onClick={() => handleSkip(50)}>
          50 secs ⏭
        </button>
      </section>
      <section style={{ display: "flex", gap: 4, justifyContent: "center" }}>
        <button onClick={handlePausePlay}>{isPaused ? "Start" : "Stop"}</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </section>
    </Fragment>
  );
}

export default Controls;
