
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Landing from "./Pages/Landing/Landing";
// import SignIn from "./Pages/Auth/Signup";
// import Payment from "./Pages/Payment/Payment";
// import Orders from "./Pages/Orders/Orders";
// import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Results/Results";

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<SignIn />} />
//         <Route path="/payments" element={<Payment />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/category/:categoryName" element={<Results />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routing; 



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import SignIn from "./Pages/Auth/Signup";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { CheckoutProvider, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51R1DSgGhWZmW2vrArUhPYpsEB5Isa8jv6QhCLQ8VmgHcL5wtHDGJxNopUXIE4TcdLYbtfBTBmain5nIp2ZKfOmxQ001XuNWKIZ"
);


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={
          <ProtectedRoute msg={"You must log in to pay"} redirect={"/payments"}>
            <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
          </ProtectedRoute>
          } />
        <Route path="/orders" element={
          <ProtectedRoute msg={"You must log in to access your orders"} redirect={"/orders"}>
            <Orders />
          </ProtectedRoute>
          } />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;