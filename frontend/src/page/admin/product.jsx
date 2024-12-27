import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, fetchAllProducts } from '../../store/admin/product-slice';
import ProductCard from '../../component/admin/product-tile';
import { Dialog, DialogPanel } from '@headlessui/react';
import ProductForm from '../../component/admin/ProductForm';

function AdminProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.adminProduct.productList);
  console.log("Products in Redux:", products);  // Make sure to select the correct path to the products
  const [openForm, setOpenForm] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    dispatch(fetchAllProducts()).then((action) => {
      if (action.type === 'products/fetchAllProducts/fulfilled') {
        console.log('Products fetched:', action.payload);  // Add this line to check the fetched products
      }
    });
  }, [dispatch]);
  

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleEdit = (productId) => {
    console.log('Editing product ID:', productId);
    setCurrentEditedId(productId);
    const product = products.find(p => p._id === productId);
    console.log('Selected product:', product);
    setFormData(product);
    setOpenForm(true);
 };
 
 
  return (
    <div className="space-y-6">
      <h1 className="text-4xl m-7 ml-12 font-semibold">Manage Products</h1>

      {/* List of products */}
      <div className="grid grid-cols-3 gap-6">
      {Array.isArray(products) && products.map((product) => (
  <ProductCard
    key={product._id}
    product={product}
    setFormData={setFormData}
    setOpenCreateProductsDialog={setOpenForm}
    setCurrentEditedId={setCurrentEditedId}
    handleEdit = {handleEdit}
    handleDelete={() =>handleDelete(product._id)}
  />
))}

      </div>

      {/* Edit products */}
      {openForm && (
        <Dialog open={openForm} onClose={() => setOpenForm(false)}>
          <DialogPanel className="fixed inset-0 w-1/2 bg-white p-8">
            <ProductForm
              currentEditedId={currentEditedId}
              setFormData={setFormData}
              formData={formData}
              setOpenForm={setOpenForm}
            />
          </DialogPanel>
        </Dialog>

      )}
    </div>
  );
}

export default AdminProduct;
