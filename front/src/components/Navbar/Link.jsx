import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ label, url }) => {
  const classInactive = "text-black p-2";
  const classActive = "text-blue-500 p-2";

  return (
    <NavLink
      to={url}
      className={({ isActive }) => (isActive ? classActive : classInactive)}
    >
      {label}
    </NavLink>
  );
};

export default Link;
