import React from "react";
import SuggestionsItem from "./SuggestionsItem";

function Suggestions({
  data = [],
  containerStyle = {},
  itemStyle = {},

  //* handlers
  onSelect = () => {},
  onBlur = () => {},

  //* Render Props Design Pattern (Optional but useful)
  renderSuggestionItem,
  renderLoader,
  renderError,
  renderNoData,
}) {
  return (
    <section style={{ ...containerStyle }} onBlur={onBlur}>
      {data?.length
        ? data.map((item, index) => {
            return (
              <div
                key={item?.id || index}
                style={{ ...itemStyle }}
                onClick={() => onSelect(item)}
                onBlur={onBlur}
              >
                {renderSuggestionItem ? (
                  renderSuggestionItem(item)
                ) : (
                  <SuggestionsItem
                    suggestion={item}
                    dataKey={dataKey}
                    onClick={onSelect}
                  />
                )}
              </div>
            );
          })
        : null}
    </section>
  );
}

export default Suggestions;
