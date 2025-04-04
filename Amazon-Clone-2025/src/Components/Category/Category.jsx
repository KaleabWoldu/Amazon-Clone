import React from 'react';
import { categoryInfos } from "./categoryFullinfos";
import CategoryCard from './CategoryCard';
// import classes from "./Category.module.css";
import classes from "./Category.module.css"; 

function Category() {
  return (
    <section className={classes.category__container}>
      {
        // categoryInfos.map((infos)=>{
        //     <CategoryCard data = {infos} />
        // })
        categoryInfos.map((infos, index) => {
          return <CategoryCard key={infos.id || index} data={infos} />;
        })
      }
    </section>
  );
}

export default Category



// import React from "react";
// import { categoryInfos } from "./categoryFullinfos";
// import CategoryCard from "./CategoryCard"; // Corrected spelling

// function Category() {
//   return (
//     <section>
//       {categoryInfos.map((infos) => (
//         <CategoryCard data={infos} key={infos.title} />
//       ))}
//     </section>
//   );
// }

// export default Category;
