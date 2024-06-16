import { useState } from "react";
import Stars from "./components/Stars";

export default function StarRating() {
  const [numberStars, setNumberStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(-1);
  const [starsHovered, setStarsHovered] = useState(-1);

  return (
    <div className="star-container">
      <Stars
        numberStars={numberStars}
        selectedStars={selectedStars}
        starsHovered={starsHovered}
        onSelectedStarsChange={setSelectedStars}
        onStarsHover={setStarsHovered}
      />
      <br />
      <br />
      <input
        type={"number"}
        required
        min={0}
        max={100}
        onChange={(e) =>
          setNumberStars(parseInt(Boolean(e.target.value) ? e.target.value : 0))
        }
        value={numberStars}
        style={{ width: "60%", height: "1.8rem", fontSize: "1.2rem" }}
      />
    </div>
  );
}
