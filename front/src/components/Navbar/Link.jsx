import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ label, url, classNom }) => {
  const classInactive = classNom;
  const classActive = "text-black px-3 py-2 rounded-md font-medium";

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
