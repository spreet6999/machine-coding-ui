import React from "react";

function SuggestionsItem({
  id = "",
  suggestion = "",
  dataKey = "",
  onClick = () => {},
}) {
  return (
    <p key={id} onClick={() => onClick(suggestion)}>
      {Object.prototype.toString.call(suggestion) === "[object Object]"
        ? suggestion[dataKey]
        : suggestion}
    </p>
  );
}

export default SuggestionsItem;
