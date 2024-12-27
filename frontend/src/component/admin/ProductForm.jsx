import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProductImage from "./image-upload"; // Assuming this is the image upload component you provided
import { addNewProduct, deleteProduct, editProduct } from "../../store/admin/product-slice"; // Import your Redux actions
import ProductCard from "./product-tile";

function ProductForm({ currentEditedId, setFormData, formData }) {
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState(null);
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { ...formData, image: uploadedImageUrl };
  
    if (currentEditedId !== null) {
      // Edit existing product
      dispatch(editProduct({ id: currentEditedId, formData: productData }))
        .then((data) => {
          if (data?.payload?.success) {
            setFormData({}); // Reset form data
            setOpenForm(false);  // Close the form dialog after editing
            alert('Product edited successfully');  // Add feedback
          } else {
            alert('Failed to edit product');  // Provide failure feedback
          }
        })
        .catch((error) => {
          alert('Error editing product');  // Provide error feedback
        });
    } else {
      // Add new product
      dispatch(addNewProduct(productData))
        .then((data) => {
          if (data?.payload?.success) {
            setFormData({}); // Reset form data
            setImageFile(null); // Clear image
          }
        });
    }
  };



  const handleDelete = (productId) => {
   dispatch(deleteProduct(productId)).then((data) => {
    if (data?.payload?.success) {
      setFormData({}); // Reset form data
      setImageFile(null); // Clear image
    }
  });
    console.log(`Deleting product with ID: ${productId}`);
  };

  return (
    <div className="h-auto max-h-screen overflow-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload */}
        <ProductImage
          imageFile={imageFile}
          setImageFile={setImageFile}
          imageLoadingState={imageLoadingState}
          uploadedImageUrl={uploadedImageUrl}
          setUploadedImageUrl={setUploadedImageUrl}
          setImageLoadingState={setImageLoadingState}
        />

        {/* Title */}
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Description */}
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Category */}
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Brand */}
        <div>
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Price */}
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Sale Price */}
        <div>
          <label htmlFor="salePrice">Sale Price</label>
          <input
            type="number"
            id="salePrice"
            name="salePrice"
            value={formData.salePrice || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Total Stock */}
        <div>
          <label htmlFor="totalStock">Total Stock</label>
          <input
            type="number"
            id="totalStock"
            name="totalStock"
            value={formData.totalStock || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Average Review */}
        <div>
          <label htmlFor="averageReview">Average Review</label>
          <input
            type="number"
            id="averageReview"
            name="averageReview"
            value={formData.averageReview || 0}
            onChange={handleChange}
            min="1"
            max="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            {currentEditedId !== null ? "Edit" : "Add"} Product
          </button>
        </div>
      </form>

    {/* Display products */}

    <div className="mt-6">
      <ProductCard
        product={formData}
        setFormData={setFormData}
        setOpenCreateProductsDialog={() =>{}}
        setCurrentEditedId={currentEditedId}
        handleDelete={handleDelete}
      />

    </div>
    </div>
  );
}

export default ProductForm;
