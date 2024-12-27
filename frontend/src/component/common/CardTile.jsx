import React, { useState } from 'react';
import { X } from 'lucide-react';

function CardTile({ img, type, price, oldPrice }) {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      {/* Product Image Section */}
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img className="object-cover w-full h-full" src={img} alt={type} />
        {/* Discount Label */}
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>

      {/* Product Info Section */}
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{type}</h5>
        </a>
        
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            <span className="text-sm text-slate-900 line-through">${oldPrice}</span>
          </p>
          
          {/* Rating Section */}
          <div className="flex items-center">
            {/* Star Icons for Rating */}
            {[...Array(5)].map((_, index) => (
              <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={openModal}
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2..."></path>
          </svg>
          Add to cart
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg  md:w-1/2">
            <button onClick={closeModal} className="absolute top-50 right-[26%] text-xl text-gray-600"><X/></button>
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
            <div className="flex w-[620px] h-[400px] justify-center items-center border-2 border-green-400 mb-4">
              <img className="w-[200px] h-[240px] object-cover border-2 border-green-400 rounded-md" src={img} alt={type} />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold">The old black </h3>
                <p className="mt-2 text-gray-700">${2003}</p>
                <p className="text-gray-500 line-through">${oldPrice}</p>
                <p className="mt-4">Add this product to your cart for easy purchase!</p>
                <button
                  onClick={closeModal}
                  className="mt-6 w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-700"
                >
                  Confirm and Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardTile;
