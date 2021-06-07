import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({
  setCategories,
}: {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((state: string[]) => [inputValue, ...state]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <h2>{inputValue}</h2> */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        required
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
