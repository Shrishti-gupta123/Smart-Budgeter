import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>💰 Smart Budgeter</h2>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add</Link>
        <Link to="/report">Report</Link>
      </div>
    </nav>
  );
}
