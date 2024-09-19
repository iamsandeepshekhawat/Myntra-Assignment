import React, { useState, useEffect } from "react";

const Filter = ({ onFilterChange }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState(null);

  const [gender] = useState(["Men", "Women", "Kids", "Girls"]);
  const [brand] = useState([
    { name: "Nike", count: 100 },
    { name: "Puma", count: 100 },
    {
      name: "Roadster",
      count: 100,
    },
    {
      name: "Arrow",
      count: 100,
    },
    {
      name: "Adidas",
      count: 100,
    },
    {
      name: "Lee Cooper",
      count: 100,
    },
    {
      name: "Reebok",
      count: 100,
    },

    {
      name: "Wrangler",
      count: 100,
    },
    {
      name: "Tommy Hilfiger",
      count: 100,
    },
    {
      name: "Van Heusen",
      count: 100,
    },
    {
      name: "Levis",
      count: 100,
    },
    {
      name: "U.S. Polo Assn.",
      count: 100,
    },
    {
      name: "Allen Solly",
      count: 100,
    },
    {
      name: "Pepe Jeans",
      count: 100,
    },
    {
      name: "Jack & Jones",
      count: 100,
    },
  ]);
  const [price] = useState([
    { min: 500, max: 1000, count: 100 },
    { min: 1000, max: 2000, count: 100 },
    {
      min: 2000,
      max: 5000,
      count: 100,
    },
    {
      min: 5000,
      max: 10000,
      count: 100,
    },
    {
      min: 10000,
      max: 20000,
      count: 100,
    },
    {
      min: 20000,
      max: 50000,
      count: 100,
    },
  ]);
  const [colors] = useState([
    { name: "Black", count: 100 },
    { name: "White", count: 100 },
    {
      name: "Red",
      count: 100,
    },
    {
      name: "Blue",
      count: 100,
    },
    {
      name: "Green",
      count: 100,
    },
    {
      name: "Yellow",
      count: 100,
    },
    {
      name: "Pink",
      count: 100,
    },
    {
      name: "Purple",
      count: 100,
    },
    {
      name: "Brown",
      count: 100,
    },
    {
      name: "Grey",
      count: 100,
    },
  ]);
  const [discount] = useState([
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
  ]);

  // Filter state changes handler
  useEffect(() => {
    const filters = {
      gender: selectedGender,
      brands: selectedBrands,
      prices: selectedPrices || [],
      colors: selectedColors || [],
      discount: selectedDiscount,
    };
    onFilterChange(filters); // Call parent component with updated filters
  }, [
    selectedGender,
    selectedBrands,
    selectedPrices,
    selectedColors,
    selectedDiscount,
  ]);

  // Handler for Gender filter
  const handleGenderChange = (e) => setSelectedGender(e.target.value);

  // Handler for Brand filter
  const handleBrandChange = (e) => {
    const { value, checked } = e.target;
    setSelectedBrands(
      checked
        ? [...selectedBrands, value]
        : selectedBrands.filter((brand) => brand !== value)
    );
  };

  // Handler for Price filter
  const handlePriceChange = (e) => {
    const { value, checked } = e.target;
    const [min, max] = value.split(" ");
    const priceRange = { min: parseInt(min), max: parseInt(max) };
    setSelectedPrices(
      checked
        ? [...selectedPrices, priceRange]
        : selectedPrices.filter((price) => price.min !== priceRange.min)
    );
  };

  // Handler for Color filter
  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    setSelectedColors(
      checked
        ? [...selectedColors, value]
        : selectedColors.filter((color) => color !== value)
    );
  };

  // Handler for Discount filter
  const handleDiscountChange = (e) => setSelectedDiscount(e.target.value);

  return (
    <div className="filter">
      {/* Gender Filter */}
      <div className="filter__title">Gender</div>
      <div className="filter__item">
        {gender.map((item, index) => (
          <div className="filter__item__radio" key={index}>
            <input
              type="radio"
              value={item}
              name="gender"
              onChange={handleGenderChange}
            />
            <label>{item}</label>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="filter__title">Brand</div>
      <div className="filter__item">
        {brand.map((item, index) => (
          <div className="filter__item__checkbox" key={index}>
            <input
              type="checkbox"
              value={item.name}
              onChange={handleBrandChange}
            />
            <label>
              {item.name}
              <span>({item.count})</span>
            </label>
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="filter__title">Price</div>
      <div className="filter__item">
        {price.map((item, index) => (
          <div className="filter__item__checkbox" key={index}>
            <input
              type="checkbox"
              value={`${item.min} ${item.max}`}
              onChange={handlePriceChange}
            />
            <label>
              Rs. {item.min} to Rs. {item.max}
              <span>({item.count})</span>
            </label>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="filter__title">Color</div>
      <div className="filter__item">
        {colors.map((item, index) => (
          <div className="filter__item__checkbox" key={index}>
            <input
              type="checkbox"
              value={item.name}
              onChange={handleColorChange}
            />
            <span
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: item.name,
              }}
            ></span>
            <label>{item.name}</label>
          </div>
        ))}
      </div>

      {/* Discount Filter */}
      <div className="filter__title">Discount</div>
      <div className="filter__item">
        {discount.map((item, index) => (
          <div className="filter__item__radio" key={index}>
            <input
              type="radio"
              value={item}
              name="discount"
              onChange={handleDiscountChange}
            />
            <label>{item} and above</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

// import React, { useState } from 'react';

// const Filter = () => {
//     const [gender, setGender] = useState([
//         'Men',
//         'Women',
//         'Kids',
//         'Girls',
//     ]);
//     const [brand, setBrand] = useState([
//         {
//             name: 'Nike',
//             count: 100,
//         },
//         {
//             name: 'Puma',
//             count: 100,
//         },
//         {
//             name: 'Adidas',
//             count: 100,
//         },
//         {
//             name: 'Lee Cooper',
//             count: 100,
//         },
//         {
//             name: 'Reebok',
//             count: 100,
//         },
//         {
//             name: 'Roadster',
//             count: 100,
//         },
//         {
//             name: 'Arrow',
//             count: 100,
//         },
//         {
//             name: 'Wrangler',
//             count: 100,
//         },
//         {
//             name: 'Tommy Hilfiger',
//             count: 100,
//         },
//         {
//             name: 'Van Heusen',
//             count: 100,
//         },
//         {
//             name: 'Levis',
//             count: 100,
//         },
//         {
//             name: 'U.S. Polo Assn.',
//             count: 100,
//         },
//         {
//             name: 'Allen Solly',
//             count: 100,
//         },
//         {
//             name: 'Pepe Jeans',
//             count: 100,
//         },
//         {
//             name: 'Jack & Jones',
//             count: 100,
//         },
//     ]);

//     const [price, setPrice] = useState([
//         {
//             min: 500,
//             max: 1000,
//             count: 100,
//         },
//         {
//             min: 1000,
//             max: 2000,
//             count: 100,
//         },
//         {
//             min: 2000,
//             max: 5000,
//             count: 100,
//         },
//         {
//             min: 5000,
//             max: 10000,
//             count: 100,
//         },
//         {
//             min: 10000,
//             max: 20000,
//             count: 100,
//         },
//         {
//             min: 20000,
//             max: 50000,
//             count: 100,
//         },
//     ]);

//     const [color, setColor] = useState([
//         {
//             name: 'Black',
//             count: 100,
//         },
//         {
//             name: 'White',
//             count: 100,
//         },
//         {
//             name: 'Red',
//             count: 100,
//         },
//         {
//             name: 'Blue',
//             count: 100,
//         },
//         {
//             name: 'Green',
//             count: 100,
//         },
//         {
//             name: 'Yellow',
//             count: 100,
//         },
//         {
//             name: 'Pink',
//             count: 100,
//         },
//         {
//             name: 'Purple',
//             count: 100,
//         },
//         {
//             name: 'Brown',
//             count: 100,
//         },
//         {
//             name: 'Grey',
//             count: 100,
//         },
//     ]);
//     const [discount, setDiscount] = useState([
//         '10%',
//         '20%',
//         '30%',
//         '40%',
//         '50%',
//         '60%',
//         '70%',
//         '80%',
//         '90%',
//     ]);
//     const [currentItems, setCurrentItems] = useState(7);
//     const [showMore, setShowMore] = useState(true);

//     const handleShowMore = () => {
//         setShowMore(!showMore);
//         if (showMore) {
//             setCurrentItems(currentItems + 7);
//         } else {
//             setCurrentItems(discount.length);
//         }
//     };

//     return (
//         <div className="filter">
//             <div className="filter__title">Filters</div>
//             <div className="filter__item">
//                 {
//                     gender.map((item, index) => (
//                         <div className="filter__item__radio" key={index}>
//                             <input type="radio" id={item} />
//                             <label htmlFor={item} style={{ fontWeight: 'bold' }}>{item}</label>
//                         </div>

//                     ))
//                 }
//             </div>
//             <div className="filter__title">Brand</div>
//             <div className="filter__item">
//                 {
//                     brand.slice(0, currentItems).map((item, index) => (
//                         <div className="filter__item__checkbox" key={index}>
//                             <input type="checkbox" value={item.name} id={item.name} />
//                             <label htmlFor={item}>
//                                 {item.name}
//                                 <span className="filter__item__checkbox__count">{' '}({item.count})</span>
//                             </label>
//                         </div>
//                     ))
//                 }
//                 {
//                     showMore && (
//                         <div className="filter__item__more">
//                             <button onClick={handleShowMore}>+{brand.length - currentItems} more</button>
//                         </div>
//                     )
//                 }
//             </div>
//             <div className="filter__title">Price</div>
//             <div className="filter__item">
//                 {
//                     price.slice(0, currentItems).map((item, index) => (
//                         <div className="filter__item__checkbox" key={index}>
//                             <input type="checkbox" value={item.min + ' ' + item.max} id={item.min + ' ' + item.max} name="price" />
//                             <label htmlFor={item.min + ' ' + item.max}>
//                                 Rs. {item.min} to Rs. {item.max}
//                                 <span className="filter__item__checkbox__count">{' '}({item.count})</span>
//                             </label>
//                         </div>
//                     ))
//                 }
//                 {
//                     showMore && (
//                         <div className="filter__item__more">
//                             <button onClick={handleShowMore}>+{price.length - currentItems} more</button>
//                         </div>
//                     )
//                 }
//             </div>
//             <div className="filter__title">Color</div>
//             <div className="filter__item">
//                 {
//                     color.slice(0, currentItems).map((item, index) => (
//                         <div className="filter__item__checkbox" key={index}>
//                             <input type="checkbox" value={item.name} id={item.name} name="color" />
//                             <span style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: item.name, display: 'inline-block',border: '1px solid #eaeaea' }}></span>
//                             <label htmlFor={item}>
//                                 {item.name}
//                                 <span className="filter__item__checkbox__count">{' '}({item.count})</span>
//                             </label>
//                         </div>
//                     ))
//                 }
//                 {
//                     showMore && (
//                         <div className="filter__item__more">
//                             <button onClick={handleShowMore}>+{color.length - currentItems} more</button>
//                         </div>
//                     )
//                 }
//             </div>
//             <div className="filter__title">Discount</div>
//             <div className="filter__item">
//                 {
//                     discount.slice(0, currentItems).map((item, index) => (
//                         <div className="filter__item__radio" key={index}>
//                             <input type="radio" id={item} name="discount" />
//                             <label htmlFor={item}>{item}  and above</label>
//                         </div>
//                     ))
//                 }
//                 {
//                     showMore && (
//                         <div className="filter__item__more">
//                             <button onClick={handleShowMore}>+{discount.length - currentItems} more</button>
//                         </div>
//                     )
//                 }
//             </div>
//         </div>
//     );
// }

// export default Filter;
