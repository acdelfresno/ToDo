import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home"
    },
    {
      id: 2,
      path: "/about",
      text: "About"
    }
  ];

  return (
    <nav className="navBar">
      <ul className="{menuNav showMenu}">
        {links.map(($) => {
          return (
            <li key={$.id}>
              <NavLink
                to = {$.path}
                activeClassName="active-link"
                onClick={}
                exact
                >
                  {$.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  );

};