import React from "react";

function Search({
  placeholder = "Type your search here",
  value = "",
  style = {},

  //* handlers
  onChange = () => {},
  onClear = () => {},
}) {
  // const [value, setValue] = useState("");

  const handleChange = (e) => {
    // setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div style={{ ...style }}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default Search;
