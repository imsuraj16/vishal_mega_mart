import React, { useContext, useEffect, useState } from "react";
import { ShoppingCart, Heart, Star, Search, Filter } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { Productcontext } from "../context/ProductContext";
import { useLocation } from "react-router-dom";
import axios from "../api/Apiconfig";

const Home = () => {
  const { products } = useContext(Productcontext);
  const { search } = useLocation();
 const queryvalue = search ? decodeURIComponent(search.split("=")[1]) : null;

  console.log(queryvalue);

  const [query, setqueryProduct] = useState(products);

  const queryProducts = async () => {
     if (queryvalue) {
      try {
        const { data } = await axios.get(`/products/category/${queryvalue}`);
        setqueryProduct(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      // No category in URL — show all products
      setqueryProduct(products);
    }
  };

  useEffect(() => {
     queryProducts();
  }, [queryvalue,products]);

  console.log(query);
  

  return (
    <div className="w-[82%] h-screen bg-gray-200 overflow-y-auto">
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white p-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 animate-pulse">
            Discover Amazing Products
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Premium quality, unbeatable prices, delivered to your door
          </p>
          <div className="flex justify-center items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm font-medium">
                ✨ Free Shipping Over $50
              </span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm font-medium">🚚 2-Day Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.isArray(query) && query.length > 0 ? (
              query && query.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
