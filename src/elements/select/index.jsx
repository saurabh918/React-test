import React from "react";

const Select = ({ id, value, onChange, data, label }) => {
  return (
    <select id={id} value={value} onChange={onChange} required>
      <option value="">{value ? value : label}</option>
      {data.map((dataItem, i) => (
        <option key={i} value={dataItem.name}>
          {dataItem.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
