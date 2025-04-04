// import React from 'react'
// import classes from './Results.module.css'

// function Results() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Results


// import React from "react";
// import classes from "./Results.module.css";
// import LayOut from "../../Components/LayOut/LayOut";

// function Results() {
//   return (
//     <LayOut>
//       <div className={classes.results}>Results</div>
//     </LayOut>
//   );
// }

// export default Results;



import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import classes from "./Results.module.css";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section style={{ padding: "30px" }}>
        <h1>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results.map((product) => (
            <ProductCard key={product.id} product={product} renderDesc={false}  renderAdd={true} />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
