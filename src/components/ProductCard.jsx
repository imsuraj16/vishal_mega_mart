import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <Link to={`/details/${product.id}`}
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                  
                  {/* Rating */}
                  

                  {/* Price */}
                  {/* <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                    <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </div> */}
                </div>
              </Link>
  )
}

export default ProductCard
