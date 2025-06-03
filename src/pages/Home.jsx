import React, { useState } from 'react'
import { ShoppingCart, Heart, Star, Search, Filter } from 'lucide-react'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      category: "Electronics",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      category: "Electronics",
      rating: 4.6,
      reviews: 89,
      badge: "New"
    },
    {
      id: 3,
      name: "Designer Leather Jacket",
      price: 179.99,
      originalPrice: 220.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
      category: "Fashion",
      rating: 4.7,
      reviews: 56,
      badge: "Sale"
    },
    {
      id: 4,
      name: "Ceramic Coffee Mug Set",
      price: 39.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop",
      category: "Home",
      rating: 4.9,
      reviews: 203,
      badge: "Popular"
    },
    {
      id: 5,
      name: "Organic Skincare Bundle",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
      category: "Beauty",
      rating: 4.5,
      reviews: 78,
      badge: "Organic"
    },
    {
      id: 6,
      name: "Gaming Mechanical Keyboard",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop",
      category: "Electronics",
      rating: 4.8,
      reviews: 167,
      badge: "Gaming"
    },
    {
      id: 7,
      name: "Minimalist Backpack",
      price: 89.99,
      originalPrice: 109.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      category: "Fashion",
      rating: 4.6,
      reviews: 92,
      badge: "Eco-Friendly"
    },
    {
      id: 8,
      name: "Aromatherapy Diffuser",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop",
      category: "Home",
      rating: 4.7,
      reviews: 134,
      badge: "Wellness"
    }
  ]

 



  return (
    <div className='w-[82%] h-screen bg-gray-200 overflow-y-auto'>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white p-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 animate-pulse">Discover Amazing Products</h1>
          <p className="text-xl opacity-90 mb-6">Premium quality, unbeatable prices, delivered to your door</p>
          <div className="flex justify-center items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm font-medium">✨ Free Shipping Over $50</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm font-medium">🚚 2-Day Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="px-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
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

      {/* Products Grid */}
      <div className="px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard product = {product}/>
            ))}
          </div>

          {/* No Products Found */}
          {products.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 mx-8 rounded-2xl mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl opacity-90 mb-6">Get the latest deals and new arrivals delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold transition-colors ">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Home