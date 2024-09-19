import React, { useState } from "react";
import Filter from "./Filter";
import Productcontainer from "./Product/Productcontainer";

const Main = () => {
  const [filters, setFilters] = useState({
    gender: null,
    brands: [],
    prices: [],
    colors: [],
    discount: null,
    category: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main__left">
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className="main__right">
          <Productcontainer filters={filters} setFilters={setFilters}/>
        </div>
      </div>
    </div>
  );
};

export default Main;

// import React, { useState } from 'react';
// import Filter from "./Filter";
// import Productcontainer from "./Product/Product.container";

// const Main = () => {
//   const [filters, set_filters] = useState({
//     gender: null,
//     brands: [],
//     prices: [],
//     colors: [],
//     discount: null,
//   });

//   // Callback to handle filter change
//   const handle_filter_change = (new_filters) => {
//     set_filters(new_filters);
//   };

//   return (
//     <div className="main">
//       <div className="container">
//         <div className="main__left">
//           <Filter on_filter_change={handle_filter_change} />
//         </div>
//         <div className="main__right">
//           {/* Pass filters to Productcontainer */}
//           <Productcontainer filters={filters} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;

// original code*****************
// // import React, { useState } from 'react';
// // import Filter from "./Filter";
// // import Productcontainer from "./Product/Product.container";

// // const Main = () => {
// //   return (
// //     <div className="main">
// //       <div className="container">
// //         <div className="main__left">
// //           <Filter />
// //         </div>
// //         <div className="main__right">
// //           <Productcontainer />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Main;
