import React from "react";
import { AddSectionStyle } from "./styled";

const AddNewSection = ({ name, value, handleChange, handle, cancel }) => {
  return (
      <AddSectionStyle className="fixed-element">
        <h3>Add New {name}</h3>
        <input
          type="text"
          value={value}
          maxLength={12}
          onChange={(e) => handleChange(e)}
        />
        <button type="button" onClick={handle}>
          Add
        </button>
        <button type="button" onClick={cancel}>
          Cancel
        </button>
      </AddSectionStyle>
  );
};

export default AddNewSection;
