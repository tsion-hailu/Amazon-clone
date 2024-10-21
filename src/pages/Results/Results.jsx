import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
function Results() {
  const [results, setResults] = useState([]);
  const { catagoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${catagoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
        console.log(res.data);
        //
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Catagory / {catagoryName}</p>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products__container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
