import React from "react";
import classes from "./Catagory.module.css";
import { Link } from "react-router-dom";
function CatagoryCard({ data }) {
  console.log(data);
  return (
    <div className={classes.catagory}>
      <Link to={`/catagory/${data.name}`}>
        <span>
          <h2> {data?.title}</h2>
        </span>
        <div>
          <img src={data?.imgLink1} alt="" />
        </div>

        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard;

//  <div className={classes.catagoryimag}>
//    {data.imgLink1?.map((store, index) => (
//      <div>
//        <img src={store.img} key={index} alt="" />
//        <span>{store.subtitle}</span>
//      </div>
//    ))}
//  </div>;
