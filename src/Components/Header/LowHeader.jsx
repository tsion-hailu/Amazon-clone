import React from 'react'
import classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
function LowHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Todays deal</li>
        <li>Customer service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowHeader