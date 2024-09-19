import React, { useContext, useState, useEffect } from "react";
import { products } from "@/components/Product/Products";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { AppContext } from "../Search/AppContext";

const Productcontainer = ({ filters, setFilters }) => {
  const { query } = useContext(AppContext);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Apply filtering and sorting based on filters and search query
  useEffect(() => {
    let filteredProducts = products.filter((product) => {
      const { name, type, brand, price, gender, discount, category } = product;
      const queryLower = query.toLowerCase();
      const nameLower = name.toLowerCase();
      const typeLower = type.toLowerCase();
      const brandLower = brand.toLowerCase();
      const categoryLower = category.toLowerCase();

      // Apply search query filter
      if (
        query &&
        !(
          nameLower.includes(queryLower) ||
          typeLower.includes(queryLower) ||
          brandLower.includes(queryLower) ||
          categoryLower.includes(categoryLower)
        )
      ) {
        return false;
      }

      // Apply additional filters
      if (filters.gender && gender !== filters.gender) return false;
      if (filters.brands.length > 0 && !filters.brands.includes(brand))
        return false;
      if (
        filters.prices.length > 0 &&
        !filters.prices.some(
          (priceRange) =>
            product.price >= priceRange.min && product.price <= priceRange.max
        )
      ) {
        return false;
      }

      if (filters.discount && discount < filters.discount) return false;
      if (
        filters.category &&
        category.toLowerCase() !== filters.category.toLowerCase()
      )
        return false;
      if (
        Array.isArray(filters.colors) &&
        filters.colors.length > 0 &&
        !filters.colors.includes(product.colors)
      ) {
        return false;
      }

      return true;
    });

    // Apply sorting
    switch (sortOption) {
      case "new":
        filteredProducts = filteredProducts.sort((a, b) => b.id - a.id); // Assuming 'id' reflects the recency of the product
        break;
      case "popularity":
        filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        filteredProducts = filteredProducts.sort(
          (a, b) => b.discount - a.discount
        );
        break;
      case "high":
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "low":
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break; // Default 'recommended' option can be added here if needed
    }

    setSortedProducts(filteredProducts);
  }, [filters, query, sortOption]);

  // Handle sorting option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: e.target.value,
    }));
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortOptions = [
    { name: "Recommended", value: "recommended" },
    { name: "What's New", value: "new" },
    { name: "Popularity", value: "popularity" },
    { name: "Better Discount", value: "discount" },
    { name: "Price: High to Low", value: "high" },
    { name: "Price: Low to High", value: "low" },
  ];

  return (
    <>
      <div className="product__sort">
        <div className="sort__left">
          <div className="sort__items">
            <div className="filter__category">
              <label>
                Category:
                <select
                  value={filters.category || ""}
                  onChange={handleCategoryChange}
                >
                  <option value="">All</option>
                  <option value="T-shirts">T-shirts</option>
                  <option value="Pants">Pants</option>
                  <option value="Skirts">Skirts</option>
                  <option value="Jackets">Jackets</option>
                  <option value="Shorts">Shorts</option>
                  {/* Add more categories as needed */}
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="sort__right">
          <div className="sort__options">
            <div className="sort__left">Sort by</div>
            <select
              className="sort__options__select"
              value={sortOption}
              onChange={handleSortChange}
            >
              {sortOptions.map((option, index) => (
                <option value={option.value} key={index}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="product">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => {
            const { id, name, brand, price, discount, rating, images, stock } =
              product;
            return (
              <div className="product__card" key={id}>
                <div className="product__image">
                  <img src={images[0]} alt={name} />
                  <div className="product__rating">
                    <span className="rating__number">{rating}</span>
                    <AiFillStar className="rating__icon" />
                    <span className="rating__separator">|</span>
                    <span className="rating__count">18.5K</span>
                  </div>
                  <div className="product__similar">
                    <span className="similar__text">View Similar</span>
                  </div>
                </div>
                <div className="product__details">
                  <div className="product__name">
                    <span>{name}</span>
                  </div>
                  <div className="product__brand">
                    <span>{brand}</span>
                  </div>
                  <div className="product__price">
                    <span className="product__price__actual">
                      Rs.{parseInt(price - (price * discount) / 100)}
                    </span>
                    <span className="product__discount">Rs.{price}</span>
                    <span className="product__discount__percent">
                      {discount}% off
                    </span>
                  </div>
                  <div className="product__wishlist__stock">
                    <div className="product__stock">
                      {stock > 5 ? (
                        <span className="stock__text">In Stock</span>
                      ) : (
                        <span className="stock__text">Only Few Left</span>
                      )}
                    </div>
                    <div className="product__wishlist">
                      <AiFillHeart className="wishlist__icon" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="product__not__found">
            <span className="not__found__text">No Results Found</span>
          </div>
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={currentPage === pageNumber + 1 ? "active" : ""}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Productcontainer;
