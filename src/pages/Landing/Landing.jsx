import React from "react";
import Catagory from "../../Components/Catagory/Catagory";
import Carousel from "../../Components/Carousel/CarouselEffect"
import Product from "../../Components/Product/Product"
import LayOut from "../../Components/LayOut/LayOut"
function Landing() {
  return <LayOut>
    <Carousel/>
    <Catagory/>
    <Product/>
  </LayOut>;
}

export default Landing;
