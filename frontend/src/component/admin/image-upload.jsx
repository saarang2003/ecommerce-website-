import React, { useState, useEffect, useRef } from 'react';
import { ImageUp, File, X } from 'lucide-react';
import axios from 'axios';

function ProductImage({
  imageFile,
  setImageFile,
  imageLoadingState,
  setImageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  isEditMode,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);

  // Handle image file change
  function handleImageFileChange(event) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile);
  }

  // Handle drag-over event
  function handleDragOver(event) {
    event.preventDefault();
  }

  // Handle drop event
  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  // Remove image
  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  // Upload image to Cloudinary
  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const formData = new FormData();
    formData.append('my-file', imageFile); 

    try {
      const response = await axios.post(
        'http://localhost:3000/api/admin/product/upload-image',
        formData
      );

      if (response?.data?.success) {
        setUploadedImageUrl(response.data.result.url);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setImageLoadingState(false);
    }
  }

  // Trigger image upload when file is set
  useEffect(() => {
    if (imageFile !== null) {
      uploadImageToCloudinary();
    }
  }, [imageFile]);

  return (
    <div className={`w-full mt-4 ${isCustomStyling ? '' : 'max-w-md mx-auto'}`}>
      <label className="text-lg font-semibold mb-2 block">Upload Image</label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`${isEditMode ? 'opacity-60' : ''} border-2 border-dashed rounded-lg p-4`}
      >
        <input
          id="image-upload"
          type="file"
          className="hidden"
          name='my-file'
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
        />
        {!imageFile ? (
          <label
            htmlFor="image-upload"
            className={`${isEditMode ? 'cursor-not-allowed' : ''} flex flex-col items-center justify-center h-32 cursor-pointer`}
          >
            <ImageUp className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </label>
        ) : imageLoadingState ? (
          <div className="h-10 bg-gray-100 animate-pulse"></div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <File className="w-8 text-primary mr-2 h-8" />
            </div>
            <p className="text-sm font-medium">{imageFile.name}</p>
            <button
              type="button"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <X className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImage;
