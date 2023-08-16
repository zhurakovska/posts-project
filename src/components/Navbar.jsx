import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="py-4 flex gap-7 bg-purple-400  justify-center ">
      <NavLink className="text-2xl text-gray-700 font-bold " to="/">
        Home
      </NavLink>
      <NavLink className="text-2xl text-gray-700 font-bold " to="/posts">
        Posts
      </NavLink>
    </nav>
  );
};
