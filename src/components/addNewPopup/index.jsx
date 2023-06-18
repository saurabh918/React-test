// import from modules
import React from "react";

// import styles
import { StyledPopup } from "./addNewPopup.styled";
import Button from "../../elements/button";

const AddNewSection = ({ name, value, handleChange, handleDispatch, cancel }) => {
  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      handleDispatch()
    }
  }
  return (
      <StyledPopup className="fixed-element">
        <h3>Add New {name}</h3>
        <input
          type="text"
          value={value}
          maxLength={12}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <Button type="button" label="Add" onClick={handleDispatch} />
        <Button type="button" label="Cancel" onClick={cancel} />
      </StyledPopup>
  );
};

export default AddNewSection;
