import { Fragment } from "react";
import PropTypes from "prop-types";

Stars.propTypes = {
  numberStars: PropTypes.number,
  selectedStars: PropTypes.number,
  starsHovered: PropTypes.number,
  onSelectedStarsChange: PropTypes.func,
  onStarsHover: PropTypes.func,
};

function Stars({
  numberStars = 0,
  selectedStars,
  starsHovered,
  onSelectedStarsChange = () => {},
  onStarsHover = () => {},
}) {
  return (
    <Fragment>
      {[...Array(numberStars ?? 0)].map((_, index) => {
        const currRating = index + 1;
        return (
          <span
            key={index}
            style={{
              color:
                currRating <= (starsHovered || selectedStars)
                  ? "#ffc107"
                  : "#e4e5e9",
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
            onMouseEnter={() => onStarsHover(currRating)}
            onMouseLeave={() => onStarsHover(null)}
            onClick={() => onSelectedStarsChange(currRating)}
          >
            &#9733;
          </span>
        );
      })}
    </Fragment>
  );
}

export default Stars;
