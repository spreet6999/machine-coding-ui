import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useDebounce from "../../hooks/useDebounce";
import Search from "./components/Search";

AutoComplete.propTypes = {
  placeholder: PropTypes.string,
  maxLengthToTrigger: PropTypes.number,
  maxResults: PropTypes.number,
  dataKey: PropTypes.string,
  isDebounced: PropTypes.bool,
  debouncedDelay: PropTypes.number,
  staticData: PropTypes.bool,
  getResults: PropTypes.func,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  onBlur: PropTypes.func,
  renderSuggestionItem: PropTypes.func,
  renderLoader: PropTypes.func,
  renderError: PropTypes.func,
  renderNoData: PropTypes.func,
};

function AutoComplete({
  placeholder = "Type your search here",
  maxLengthToTrigger = 0,
  maxResults = 10,
  dataKey = "",
  isDebounced = false,
  debouncedDelay = 400,
  staticData = false,
  //* handlers
  getResults = () => {},
  onChange = () => {},
  onSelect = () => {},
  onBlur = () => {},

  //* Render Props Design Pattern (Optional but useful)
  renderSuggestionItem,
  renderLoader,
  renderError,
  renderNoData,
}) {
  const [value, setValue] = useState("");
  const { debouncedValue } = useDebounce(value, debouncedDelay);

  useEffect(() => {
    if (value.length >= maxLengthToTrigger) {
      if (staticData || !isDebounced) {
        getResults(value);
      } else {
        getResults(debouncedValue);
      }
    }
  }, [debouncedValue]);

  const handleChange = (value) => {
    setValue(value);
    onChange(value);
  };

  return (
    <section>
      AutoComplete Component
      <Search value={value} placeholder={placeholder} onChange={handleChange} />
    </section>
  );
}

export default AutoComplete;

//* Respomsible to render AutoComplete Component
export function AutoCompleteContainer() {
  return (
    <AutoComplete
      placeholder="Type your search here"
      maxLengthToTrigger={2}
      maxResults={10}
      dataKey="value"
      isDebounced={true}
      debouncedDelay={400}
      staticData={false}
      //* handlers
      // getResults={getResults}
      // onChange={onChange}
      // onSelect={onSelect}
      // onBlur={onBlur}
    />
  );
}
