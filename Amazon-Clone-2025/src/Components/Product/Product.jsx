// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import ProductCard from './ProductCard';
// function Product() {
//     const [products, setProducts] = useState()

//     useEffect(() => {
//         axios.get("https://fakestoreapi.com/products")
//         .then((res) => {
//             setProducts(res.data)
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }, []) 

//   return (
//     <section>
//         {
//             products.map((singleProduct)=>{
//                 return <ProductCard product={singleProduct} key={singleProduct.id} />
//                 })
//         }
//     </section>
//   )
// }

// export default Product



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import classes from "./Product.module.css";

// function Product() {
//   const [products, setProducts] = useState([]); // ✅ Use an empty array to prevent .map() errors

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <section className={classes.products_container}>
//       {products.length > 0 ? (
//         products.map((singleProduct) => (
//           <ProductCard product={singleProduct} key={singleProduct.id} />
//         ))
//       ) : (
//         <p>Loading products...</p> // ✅ Show a loading message
//       )}
//     </section>
//   );
// }

// export default Product;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import classes from "./Product.module.css";
// import Loader from "../../Components/Loader/Loader"; // ✅ Import Loader

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false); // ✅ Loading state

//   useEffect(() => {
//     setIsLoading(true); // ✅ Start loading
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         setIsLoading(false); // ✅ Stop loading after setting data
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false); // ✅ Stop loading even if error occurs
//       });
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <section className={classes.products_container}>
//           {products?.map((singleProduct) => (
//             <ProductCard product={singleProduct} key={singleProduct.id} />
//           ))}
//         </section>
//       )}
//     </>
//   );
// }

// export default Product; 


import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => (
            <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;