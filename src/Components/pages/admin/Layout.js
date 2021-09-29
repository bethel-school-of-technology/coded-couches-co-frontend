import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/dash">Dashboard</Link>
          </li>
          <li>
            <Link to="/createinv">Create Inventory</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {children}
    </>
  );
};
