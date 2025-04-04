// import React from 'react'

// function ProductCard() {
//   return (
//     <div>
//       <a href="">
//         <img src="" alt="" />
//       </a>
//       <div>
//         <h3>title</h3>
//         <div>
//             {/* rating */}
//             {/* price */}
//         </div>
//         <div>
//             {/* price */}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductCard




import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from './Product.module.css';
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";


function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price , description} = product;
    const [state,dispatch]=useContext(DataContext)
    

    const addToCart = () => {
      dispatch({
        type: Type.ADD_TO_BASKET,
        item: {
          image,
          title,
          id,
          rating,
          price,
          description,
        },
      });
    }




  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__fixed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={product.title} /> {/* ✅ Show image */}
      </Link>
      <div>
        <h3>{title}</h3> {/* ✅ Show title */}
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}

        <div className={classes.rating}>
          {/* <p>Rating: {product.rating?.rate} ⭐</p> ✅ Show rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* <p>Price: ${product.price}</p> ✅ Show price */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;