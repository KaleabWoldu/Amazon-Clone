// import React from 'react'
// import classes from './ProductDetail.module.css'
// import LayOut from '../../Components/LayOut/LayOut';

// function ProductDetail() {
//   return (
//     <LayOut>
//       <div>ProductDetail</div>
//     </LayOut>
//   );
// }

// export default ProductDetail 




// import React, { useEffect, useState } from "react";
// import classes from "./ProductDetail.module.css";
// import LayOut from "../../Components/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/endPoints";
// import ProductCard from "../../Components/Product/ProductCard";
// // import Loader from "../../Components/Loader/Loader";

// function ProductDetail() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [productId]);

//   return (
//     <LayOut>
//       <ProductCard product={product} />
//     </LayOut>
//   );
// }

// export default ProductDetail;




// import React, { useEffect, useState } from "react";
// import classes from "./ProductDetail.module.css";
// import LayOut from "../../Components/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/endPoints";
// import ProductCard from "../../Components/Product/ProductCard";

// function ProductDetail() {
//   const [product, setProduct] = useState({});
//   const { productId } = useParams();

//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [productId]);

//   return (
//     <LayOut>
//       <ProductCard product={product} flex={true} renderDesc={true} />
//     </LayOut>
//   );
// }

// export default ProductDetail;

// ***********************************************************************************************

// import React, { useEffect, useState } from "react";
// import classes from "./ProductDetail.module.css";
// import LayOut from "../../Components/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/endPoints";
// import ProductCard from "../../Components/Product/ProductCard";
// import Loader from "../../Components/Loader/Loader";

// function ProductDetail() {
//   const [product, setProduct] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const { productId } = useParams();

//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false);
//       });
//   }, [productId]);

//   return (
//     <LayOut>
//       {isLoading ? <Loader /> : <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true} />}
//     </LayOut>
//   );
// }

// export default ProductDetail;


// *****************************************************************************************


// import React, { useEffect, useState, useContext } from "react";
// import classes from "./ProductDetail.module.css";
// import LayOut from "../../Components/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/endPoints";
// import Loader from "../../Components/Loader/Loader";
// import { DataContext } from "../../Components/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";

// function ProductDetail() {
//   const [product, setProduct] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const { productId } = useParams();
//   const [state, dispatch] = useContext(DataContext); // ✅ Context to handle cart

//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false);
//       });
//   }, [productId]);

//   // ✅ Function to add product to cart
//   const addToCart = () => {
//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item: {
//         id: product.id,
//         title: product.title,
//         image: product.image,
//         price: product.price,
//         rating: product.rating,
//       },
//     });
//     alert("Product added to cart! ✅"); // 🔔 Optional confirmation message
//   };

//   return (
//     <LayOut>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             alignItems: "start",
//             justifyContent: "center",
//             gap: "50px",
//             maxWidth: "1200px",
//             margin: "50px auto",
//             padding: "20px",
//           }}
//         >
//           {/* Left Side - Product Image */}
//           <div
//             style={{
//               flex: "1",
//               maxWidth: "400px",
//               textAlign: "center",
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 objectFit: "contain",
//               }}
//             />
//           </div>

//           {/* Right Side - Product Info */}
//           <div
//             style={{
//               flex: "2",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "flex-start",
//               maxWidth: "600px",
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: "24px",
//                 fontWeight: "600",
//                 marginBottom: "10px",
//               }}
//             >
//               {product.title}
//             </h3>

//             <p
//               style={{
//                 fontSize: "16px",
//                 lineHeight: "1.6",
//                 marginBottom: "15px",
//               }}
//             >
//               {product.description}
//             </p>

//             <div
//               className="rating"
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "5px",
//                 marginBottom: "15px",
//               }}
//             >
//               ⭐ {product.rating?.rate} ({product.rating?.count} ratings)
//             </div>

//             {/* ✅ Price and Add to Cart Button - Correct Alignment */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "20px",
//                 marginTop: "10px",
//               }}
//             >
//               <span
//                 style={{
//                   fontSize: "22px",
//                   fontWeight: "bold",
//                   color: "#B12704",
//                 }}
//               >
//                 ${product.price}
//               </span>

//               {/* ✅ Fixing Button Click + Correct Positioning */}
//               <button
//                 onClick={addToCart}
//                 style={{
//                   backgroundColor: "#FF9900",
//                   color: "black",
//                   padding: "12px 20px",
//                   border: "none",
//                   borderRadius: "5px",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                   width: "180px",
//                   textAlign: "center",
//                   fontSize: "16px",
//                   transition: "background 0.2s ease",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#E68A00")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#FF9900")}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </LayOut>
//   );
// }

// export default ProductDetail;


// ********************************************************************************


// import React, { useEffect, useState, useContext } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/endPoints";
// import { DataContext } from "../../Components/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";

// function ProductDetail() {
//   const [product, setProduct] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const { productId } = useParams();
//   const [state, dispatch] = useContext(DataContext); // ✅ Context for cart management

//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false);
//       });
//   }, [productId]);

//   // ✅ Function to add product to cart (without alert)
//   const addToCart = () => {
//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item: {
//         id: product.id,
//         title: product.title,
//         image: product.image,
//         price: product.price,
//         rating: product.rating,
//       },
//     });
//   };

//   return (
//     <LayOut>
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             alignItems: "start",
//             justifyContent: "center",
//             gap: "70px",
//             maxWidth: "1200px",
//             margin: "50px auto",
//             padding: "20px",
//           }}
//         >
//           {/* ✅ Left Side - Correct Image Sizing */}
//           <div
//             style={{
//               flex: "1",
//               maxWidth: "500px", // ✅ Larger image like the reference
//               textAlign: "center",
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 objectFit: "contain",
//               }}
//             />
//           </div>

//           {/* ✅ Right Side - Product Info */}
//           <div
//             style={{
//               flex: "2",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "flex-start",
//               maxWidth: "600px",
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: "26px",
//                 fontWeight: "600",
//                 marginBottom: "10px",
//               }}
//             >
//               {product.title}
//             </h3>

//             <p
//               style={{
//                 fontSize: "16px",
//                 lineHeight: "1.6",
//                 marginBottom: "15px",
//               }}
//             >
//               {product.description}
//             </p>

//             <div
//               className="rating"
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "5px",
//                 marginBottom: "15px",
//               }}
//             >
//               ⭐ {product.rating?.rate} ({product.rating?.count} ratings)
//             </div>

//             {/* ✅ Price and Add to Cart Button - Proper Alignment */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "15px",
//                 marginTop: "10px",
//               }}
//             >
//               <span
//                 style={{
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   color: "#B12704",
//                 }}
//               >
//                 ${product.price}
//               </span>

//               {/* ✅ Button Fix: Clickable and Correct Position */}
//               <button
//                 onClick={addToCart}
//                 style={{
//                   backgroundColor: "#FF9900",
//                   color: "black",
//                   padding: "12px 22px",
//                   border: "none",
//                   borderRadius: "5px",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                   width: "180px",
//                   textAlign: "center",
//                   fontSize: "16px",
//                   transition: "background 0.2s ease",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.target.style.backgroundColor = "#E68A00")
//                 }
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#FF9900")}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </LayOut>
//   );
// }

// export default ProductDetail;



// ******************************************************************************




import React, { useEffect, useState, useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  const [state, dispatch] = useContext(DataContext); // ✅ Context for cart management

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  // ✅ Function to add product to cart
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating,
      },
    });
  };

  return (
    <LayOut>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center", // ✅ Makes image & text align properly
            justifyContent: "center",
            gap: "50px", // ✅ Adjust spacing
            maxWidth: "1100px", // ✅ Slightly smaller container
            margin: "50px auto",
            padding: "20px",
          }}
        >
          {/* ✅ Left Side - Adjusted Image Size */}
          <div
            style={{
              flex: "1",
              maxWidth: "350px", // ✅ Reduce image size
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* ✅ Right Side - Product Info */}
          <div
            style={{
              flex: "2",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: "500px",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              {product.title}
            </h3>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "15px",
              }}
            >
              {product.description}
            </p>

            <div
              className="rating"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginBottom: "15px",
              }}
            >
              ⭐ {product.rating?.rate} ({product.rating?.count} ratings)
            </div>

            {/* ✅ Price and Add to Cart Button - Perfect Position */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#B12704",
                }}
              >
                ${product.price}
              </span>

              {/* ✅ Button is now perfectly positioned & clickable */}
              <button
                onClick={addToCart}
                style={{
                  backgroundColor: "#FF9900",
                  color: "black",
                  padding: "10px 18px",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  width: "150px", // ✅ Slightly smaller button
                  textAlign: "center",
                  fontSize: "14px", // ✅ Adjusted font size
                  transition: "background 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#E68A00")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#FF9900")}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </LayOut>
  );
}

export default ProductDetail;