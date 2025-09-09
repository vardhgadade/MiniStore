import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShimaruUi from "./Shemaru"; // same loader you used in Home

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data || []);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  if (loading) return <ShimaruUi />;

  return (
    <div className="container mx-auto px-4 pt-[20px]">
      <h1 className="text-2xl font-bold mb-6 text-center">All Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border-2 border-gray-300 rounded-lg shadow-md 
                        hover:shadow-xl hover:scale-105 
                        flex flex-col"
          >
            {/* Image */}
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

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
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
};

export default Products;
