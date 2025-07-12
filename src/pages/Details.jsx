import React, { useContext, useEffect, useState } from "react";
import { Productcontext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import axios from "../api/Apiconfig";

const Details = () => {
  const { id } = useParams();
  // const { products } = useContext(Productcontext); // yahan change hai 
  const [singleProduct, setSingleProduct] = useState(null); // yahan change hai 
  const [edit, setEdit] = useState(false);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setSingleProduct(data); // yahan change hai 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []); // yahan change hai 

  if (!singleProduct) {
    return <div>Loading...</div>; // yahan change hai 
  }

  if (edit) {
    return (
      <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Product</h2>

        <form className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              defaultValue={singleProduct.title} // yahan change hai 
              placeholder="Enter product title"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              defaultValue={singleProduct.price}
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              defaultValue={singleProduct.description}
              placeholder="Enter product description"
              className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              defaultValue={singleProduct.category}
              placeholder="e.g. men's clothing"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              defaultValue={singleProduct.image}
              placeholder="https://example.com/image.jpg"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating (Rate)
              </label>
              <input
                type="number"
                step="0.1"
                defaultValue={singleProduct.rating?.rate}
                placeholder="e.g. 4.5"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating (Count)
              </label>
              <input
                type="number"
                defaultValue={singleProduct.rating?.count}
                placeholder="e.g. 120"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="text-right pt-4">
            <button
              type="button"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-semibold mb-2">{singleProduct.title}</h2>
          <button
            onClick={() => setEdit(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Edit
          </button>
        </div>

        <p className="text-gray-600 mb-4">{singleProduct.description}</p>
        <p className="text-sm text-blue-600 mb-2">
          Category: {singleProduct.category}
        </p>
        <p className="text-xl font-bold text-green-700 mb-4">
          ${singleProduct.price}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-yellow-500">тнР {singleProduct.rating?.rate}</span>
          <span className="text-gray-500">
            ({singleProduct.rating?.count} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;