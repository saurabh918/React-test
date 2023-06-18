import React from "react";

const Button = ({ onClick, label, className, type, disabled, key }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      key={key}
    >
      {label}
    </button>
  );
};

export default Button;
