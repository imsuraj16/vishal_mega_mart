import axios from "../api/Apiconfig";
import React, { createContext, useEffect, useState } from "react";

export const Productcontext = createContext(null);

const ProductContext = (props) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      // console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <Productcontext.Provider value={{products, setProducts}}>{props.children}</Productcontext.Provider>;
};

export default ProductContext;
