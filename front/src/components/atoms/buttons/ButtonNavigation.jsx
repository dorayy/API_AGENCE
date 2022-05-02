import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonNavigation = ({ text, url }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="ButtonNavigation"
      onClick={() => {
        navigate(url);
      }}
    >
      {text}
    </button>
  );
};

export default ButtonNavigation;
