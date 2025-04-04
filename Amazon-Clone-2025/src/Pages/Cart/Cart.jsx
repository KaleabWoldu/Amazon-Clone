

import React, { useContext } from "react";
import LayOut from '../../Components/LayOut/LayOut';
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import { Type } from "../../Utility/action.type";



// function Cart() {
//   const [{basket, user},dispatch] = useContext(DataContext);

//   return (
//     <LayOut>
//       <section>
//         <div>
//           <h2>Hello</h2>
//           <h3>Your shopping basket</h3>
//           <hr />
//           {basket?.length == 0 ? (
//             <p>Oops! No item in your cart</p>
//           ) : (
//             basket?.map((item, i) => (
//               <ProductCard
//                 key={i}
//                 product={item}
//                 renderDesc={true}
//                 renderAdd={false}
//                 flex={true}
//               />
//             ))
//           )}
//         </div>
//         {basket?.length !==0&&(
//           <div>
//             <div>
//               <p>subtotal ({basket?.length} items)
//               </p>
//               <CurrencyFormat amount='total' />
//             </div>
//             <span>
//               <input type="checkbox" />
//               <small>This order contains a gift</small>
//             </span>
//             <Link to="/payments">Continue to checkout</Link>
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }

// export default Cart; 


// ************************************************************************** 


// import React, { useContext } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import { DataContext } from "../../Components/DataPro";
// import ProductCard from "../../Components/Product/ProductCard";
// import CurrencyFormat from "../../Components/Currency";
// import { Link } from "react-router-dom";
// import classes from "./Cart.module.css";

// function Cart() {
//   const [{ basket, user }, dispatch] = useContext(DataContext);

//   const total = basket.reduce((amount, item) => {
//     return item.price + amount;
//   }, 0);

//   return (
//     <LayOut>
//       <section className={classes.container}>
//         <div className={classes.cart_container}>
//           <h2>Hello</h2>
//           <h3>Your shopping basket</h3>
//           <hr />
//           {basket?.length === 0 ? (
//             <p>Opps ! No item in your basket</p>
//           ) : (
//             basket?.map((item, i) => {
//               return (
//                 <ProductCard
//                   key={i}
//                   product={item}
//                   renderDesc={true}
//                   renderAdd={false}
//                   flex={true}
//                 />
//               );
//             })
//           )}
//         </div>

//         {basket?.length !== 0 && (
//           <div className={classes.subtotal}>
//             <div>
//               <p>Subtotal ({basket?.length} items)</p>
//               <CurrencyFormat amount={total} />
//             </div>
//             <span>
//               <input type="checkbox" />
//               <small>This order contains a gift</small>
//             </span>
//             <Link to="/payments">Continue to checkout</Link>
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }

// export default Cart;


// **********************************************************



// import React, { useContext } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import { DataContext } from "../../Components/DataPro";
// import ProductCard from "../../Components/Product/ProductCard";
// import CurrencyFormat from "../../Components/Currency";
// import { Link } from "react-router-dom";
// import classes from "./Cart.module.css";

// function Cart() {
//   const [{ basket }, dispatch] = useContext(DataContext);

//   const total = basket.reduce((amount, item) => {
//     return item.price + amount;
//   }, 0);

//   return (
//     <LayOut>
//       <section className={classes.container}>
//         {/* Cart Items Section */}
//         <div className={classes.cart_container}>
//           <h2>Hello</h2>
//           <h3>Your shopping basket</h3>
//           <hr />
//           {basket?.length === 0 ? (
//             <p>Oops! No item in your basket</p>
//           ) : (
//             basket?.map((item, i) => (
//               <ProductCard
//                 key={i}
//                 product={item}
//                 renderDesc={true}
//                 renderAdd={false}
//                 // flex={true}
//                 className={classes.cart_product}
//               />
//             ))
//           )}
//         </div>

//         {/* Subtotal Section */}
//         {basket?.length !== 0 && (
//           <div className={classes.subtotal}>
//             <div>
//               <p>Subtotal ({basket?.length} items):</p>
//               <CurrencyFormat amount={total} />
//             </div>
//             <span>
//               <input type="checkbox" />
//               <small>This order contains a gift</small>
//             </span>
//             <Link to="/payments" className={classes.checkoutButton}>
//               Continue to checkout
//             </Link>
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }

// export default Cart;

// ******************************************************************************


// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import { DataContext } from "../DataProvider/DataProvider";
// import ProductCard from "../Product/ProductCard";
// import classes from "./Cart.module.css";

// function Cart() {
//   const [{ basket }, dispatch] = useContext(DataContext);

//   const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);

//   return (
//     <LayOut>
//       <section className={classes.container}>
//         {/* Left: Cart Items */}
//         <div className={classes.cart_container}>
//           <h2>Hello</h2>
//           <h3>Your Shopping Basket</h3>
//           <hr />
//           {basket?.length === 0 ? (
//             <p>Oops! No item in your basket</p>
//           ) : (
//             basket.map((item, i) => (
//               <div className={classes.cart_product} key={i}>
//                 <img src={item.image} alt={item.title} />
//                 <div>
//                   <h3>{item.title}</h3>
//                   <p>{item.description}</p>
//                   <p>${item.price}</p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Right: Subtotal */}
//         {basket.length !== 0 && (
//           <div className={classes.subtotal}>
//             <p>Subtotal ({basket.length} items):</p>
//             <strong>${total.toFixed(2)}</strong>
//             <span>
//               <input type="checkbox" />
//               <small>This order contains a gift</small>
//             </span>
//             <Link to="/payments" className={classes.checkoutButton}>
//               Continue to checkout
//             </Link>
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }

// export default Cart;


// import React, { useContext } from "react";
// import { DataContext } from "../context/DataContext";
// import Type from "../context/actionTypes";
// import { Link } from "react-router-dom";
// import LayOut from "../components/LayOut";
// import classes from "./Cart.module.css";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  // Increment function
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item, // Pass the full item object
    });
  };

  // Decrement function
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id, // Pass only the item ID
    });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        {/* Left: Cart Items */}
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No item in your basket</p>
          ) : (
            basket.map((item, i) => (
              <div className={classes.cart_product} key={i}>
                <img src={item.image} alt={item.title} />

                <div className={classes.product_details}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>${item.price}</p>

                  {/* Quantity Buttons (Inside Product Details) */}
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      +
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right: Subtotal */}
        {basket.length !== 0 && (
          <div className={classes.subtotal}>
            <p>Subtotal ({basket.length} items):</p>
            <strong>${total.toFixed(2)}</strong>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments" className={classes.checkoutButton}>
              Continue to checkout
            </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;