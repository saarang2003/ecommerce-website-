import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import logo from "../../assets/image/logo.png";
import Search from "../common/search";
import { logoutUser } from "../../store/auth";
import { addNewProduct, editProduct } from "../../store/admin/product-slice";
import ProductForm from "./ProductForm";

function Header() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    salePrice: "",
    totalStock: "",
    averageReview: 0,
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);

  function handleLogout() {
    dispatch(logoutUser());
  }

  // Toggle drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 my-4">
      <div className="flex items-center mb-4 sm:mb-0">
        <img src={logo} alt="logo" className="w-10 sm:w-12 mr-4" />
        <p className="font-sans font-bold text-xl sm:text-2xl">Clothes & Co</p>
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
        <Search />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex gap-4">
          <button
            className="flex items-center gap-2 text-black bg-white px-4 py-2 border-none hover:bg-black hover:text-white rounded-lg shadow-lg transition-all duration-300"
            aria-label="Logout"
            onClick={handleLogout}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
            Logout
          </button>

          <button
            className="flex items-center gap-2 text-white bg-black px-4 py-2 border-none hover:bg-slate-900 hover:text-white rounded-lg shadow-lg transition-all duration-300"
            aria-label="Add Product"
            onClick={toggleDrawer}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
            </svg>
            Add Product
          </button>
        </div>
      </div>

      {/* Add Product Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="w-96 max-h-screen overflow-auto bg-white p-4 shadow-xl">
            <h2 className="text-2xl font-bold">
              {currentEditedId ? "Edit Product" : "Add New Product"}
            </h2>
            <button onClick={toggleDrawer} className="mt-4 text-red-500">
              Close
            </button>
            <ProductForm 
              formData={formData} 
              setFormData={setFormData} 
              currentEditedId={currentEditedId} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
