import React from 'react'
import {X} from 'lucide-react';


function ProductCard({
    product,
    setFormData,
    setOpenCreateProductsDialog,
    setCurrentEditedId,
    handleDelete,  
  }) {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" >
            <img 
            src={product?.image}
            alt={product?.title}
            className="object-cover w-full h-full"
            />
            {/* Discount Badge  */}
            {product?.salePrice > 0  && (
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                     {Math.round(((product?.price - product?.salePrice) / product?.price) * 100)}% OFF
                </span>
            )}
        </div>

        {/* Card Content */}
            <div className="mt-4 px-5 pb-5" >
            {/* ProductTitle */}
            <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{product?.title}</h5>
        </a>
{/* Price  */}
        <div className="mt-2 mb-5 flex items-center justify-between" >
           <p className="text-lg font-semibold text-slate-900" >
            <span className={`${product?.salePrice > 0 ? "line-through" : ""}`} >
                {product?.price}
            </span>
            {product?.salePrice > 0 && (
              <span className="ml-2 text-lg font-bold">${product?.salePrice}</span>
            )}
           </p>
            {/* rating */}
           <div className="flex items-center" >
           <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
           </div>
        </div>
     </div>
 {/* Actions Section */}
 <div className="flex justify-between items-center px-5 py-2.5 border-t border-gray-200">
        {/* Edit Button */}
        <button
          onClick={() => {
            setOpenCreateProductsDialog(true);
            setCurrentEditedId(product?._id);
            setFormData(product);
          }}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          onClick={() => handleDelete(product?._id)}
          className="text-sm text-red-600 hover:text-red-800 flex items-center"
        >
          <X className="w-4 h-4 mr-1" /> Delete
        </button>
      </div>
    </div>


  )
}

export default ProductCard