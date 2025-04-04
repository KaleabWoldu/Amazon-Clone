// import React from 'react'

// function CategoryCard({data}) {
//   return (
//     <div>
//       <a href="">
//         <span>
//           <h2>{data.title}</h2>
//         </span>
//         <img src={data.imgLink} alt="" />
//         <p>shop now</p>
//       </a>
//     </div>
//   );
// }

// export default CategoryCard





// import React from "react";
// import classes from "./category.module.css";
// import { Link } from "react-router-dom";

// function CategoryCard({ data }) { 
//   console.log(data) 
//   return (
//     <div className={classes.category}>
//       <Link to={'/category/${data.name}'}>
//         <span>
//           <h2>{data.title}</h2>
//         </span>
//         <img src={data.imgLink} alt={data.title} />
//         <p>Shop now</p>
//       </Link>
//     </div>
//   );
// }

// export default CategoryCard; 




import React from "react";
import classes from "./Category.module.css"; 
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  console.log(data); // Example: { title: "Jewelry", name: "jewelery", imgLink: "https://m.media-amazon.com/images/..." }

  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>{data.title}</span>
        <img src={data?.imgLink} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
