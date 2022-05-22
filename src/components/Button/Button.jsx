import React from "react";

const Button = ({ title, onClick, customStyle }) => {
  return (
    <button className={`btn ${customStyle}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
