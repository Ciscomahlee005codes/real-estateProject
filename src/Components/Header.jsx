import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { house_list } from "../../src/house_list";
import HouseItem from "./HouseItem";
import { useNavigate } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [category, setCategory] = useState("All Categories");
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();

  const categories = [
    "All Categories",
    "By Apartment",
    "By Floor",
    "By Layout",
    "By Tower",
  ];

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setShowList(false);
    setQuery("");
    setFilteredItems([]);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const results = house_list.filter((item) => {
        const matchCategory =
          category === "All Categories" ||
          item.category.toLowerCase().includes(category.toLowerCase());
        const matchQuery = item.name
          .toLowerCase()
          .includes(value.toLowerCase());
        return matchCategory && matchQuery;
      });
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  };

  // const handleSuggestionClick = (itemName) => {
  //   setQuery(itemName);
  //   const exactMatch = house_list.filter(
  //     (item) =>
  //       item.name.toLowerCase() === itemName.toLowerCase() &&
  //       (category === "All Categories" ||
  //         item.category.toLowerCase().includes(category.toLowerCase()))
  //   );
  //   setFilteredItems(exactMatch);
  // };

  return (
    <section className="banner">
      <div className="bg-filtered"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="contents">
            <h1>Get Your Next Property with VISUAL</h1>
            <p>
              Seeing is Believing
            </p>
            <br />

            <div className="container">
              <div className="searchBar">
                <div id="select" onClick={() => setShowList(!showList)}>
                  <p id="selectText">{category}</p>
                  <FaChevronDown style={{ left: "1rem", fontSize: "20px" }} />
                  <ul id="list" className={showList ? "open" : ""}>
                    {categories.map((cat, index) => (
                      <li
                        key={index}
                        className="options"
                        onClick={() => handleCategorySelect(cat)}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>

                <input
                  type="text"
                  id="inputField"
                  placeholder={`Search in ${category}`}
                  value={query}
                  onChange={handleInputChange}
                />
              </div>

              <div className="search-pic">
                <FaSearch className="search-icon" />
              </div>
            </div>

            {query && filteredItems.length > 0 && (
              <ul className="search-dropdown">
                {filteredItems.map((item) => (
                  <li
                    key={item.id}
                    className="search-dropdown-item"
                    onClick={() =>
                      navigate(
                        `/tower/${item.towerId}/floor/${item.floorId}/apartment/${item.id}`
                      )
                    }
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="dropdown-img"
                    />
                    <div className="dropdown-info">
                      <h4>{item.name}</h4>
                      <span>{item.category}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
