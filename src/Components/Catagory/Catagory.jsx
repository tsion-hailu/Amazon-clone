import React from "react";
import { catagoryInfos } from "./CatagoryFullinfos";
import CatagoryCard from "./CatagoryCard";
import classes from "./Catagory.module.css";
function Catagory() {
  return (
    <section className={classes.catagory_container}>
      {catagoryInfos.map((Infos) => (
        <CatagoryCard data = {Infos} />
      ))}
    </section>
  );
}
export default Catagory;
