import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcrumb1 = ({ currentPath, currentLabel }) => {
  return (
    <ul className='flex items-center md:ml-14 ml-2 md:text-base text-sm space-x-2 text-gray-500 md:mt-10 sm:mt-5 mt-10 mb-12 syne-font'>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'text-teal-700 font-semibold underline'
              : 'hover:underline text-gray-700'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <NavLink
          to={currentPath}
          className={({ isActive }) =>
            isActive
              ? 'text-teal-700 font-semibold underline'
              : 'hover:underline text-gray-700'
          }
        >
          {currentLabel}
        </NavLink>
      </li>
    </ul>
  );
};

export default Breadcrumb1;
