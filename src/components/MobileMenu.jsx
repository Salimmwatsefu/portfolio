import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ onClose }) => {
  return (
    <div className="p-4">
      <ul className="text-black mt-10">
        <li className="mb-3 hover:bg-teal-500 p-1">
          <Link to={"/contact"} onClick={onClose}>
            CONTACT
          </Link>
        </li>
        <li className="mb-3 hover:bg-teal-500 p-1">
          <Link to={"/experience"} onClick={onClose}>
            EXPERIENCE
          </Link>
        </li>
        <li className="mb-3 hover:bg-teal-500 p-1">
          <Link to={"/projects"} onClick={onClose}>
            PROJECTS
          </Link>
        </li>
        <li className="mb-3 hover:bg-teal-500 p-1">
          <Link to={"/blog"} onClick={onClose}>
            BLOG
          </Link>
        </li>
        <li className="hover:bg-teal-500 p-1 mb-3">
          <Link to={"/about"} onClick={onClose}>
            ABOUT
          </Link>
        </li>
      </ul>

      
    </div>
  );
};

export default MobileMenu;