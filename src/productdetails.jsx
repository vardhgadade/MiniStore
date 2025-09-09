import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "./Redux/CartSlice";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch= useDispatch()

  useEffect(() => {
    fetchProduct();
  }, [id]);

  

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  const handleaddItem=()=>{
    dispatch(addItem(product))
  }

  if (loading) return <p className="text-center mt-10">Loading product details...</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="container mx-auto mt-[100px] px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Back
      </button>

      <div className="bg-white border-2 border-black rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex justify-center items-center">
          <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-6">${product.price}</p>
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          onClick={handleaddItem}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
