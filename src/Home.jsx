import React, { useEffect, useState } from "react";
import axios from "axios";
import ShimaruUi from "./Shemaru";
import { useNavigate } from "react-router-dom";
import { SortLowToHigh } from "./SortLowToHigh"; // helper function

function Home() {
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let res = await axios("https://fakestoreapi.com/products");
      setAllItems(res.data || []);
      setLoading(false);
    } catch (error) {
      console.log("You got an error:", error);
    }
  };

  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedItems =
    sortOrder === "" ? filteredItems : SortLowToHigh(filteredItems, sortOrder);

  if (loading) return <ShimaruUi />;

  return (
    <div className="container mx-auto px-4">
      {/* Search + Sort */}
      <div className="mb-6 flex justify-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search products"
          className="w-full max-w-md p-2 border-2 border-gray-400 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="relative">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            {sortOrder === "asc"
              ? "Low → High"
              : sortOrder === "desc"
              ? "High → Low"
              : "Sort by Price"}
          </button>
          {showOptions && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
              <button
                onClick={() => {
                  setSortOrder("asc");
                  setShowOptions(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Low → High
              </button>
              <button
                onClick={() => {
                  setSortOrder("desc");
                  setShowOptions(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                High → Low
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border-2 border-gray-300 rounded-lg shadow-md 
                        hover:shadow-xl hover:scale-105 
       flex flex-col"
          >
            {/* Image Section */}
            <div
              className="flex justify-center items-center h-48 p-4 bg-gray-100 cursor-pointer"
              onClick={() => navigate(`/productdetails/${item.id}`)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h2 className="text-lg font-semibold mb-2 ">
                {item.title}
              </h2>
              <p className="font-bold mb-2">${item.price}</p>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
