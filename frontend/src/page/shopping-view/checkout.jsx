import React, { useState } from "react";
import img3 from '../../assets/image/img3.jpg'; // Assuming this is the image path
import img2 from '../../assets/image/img2.jpg';

// CheckoutCard component for individual items
function CheckoutCard({ id, name, description, price, image, onRemove, onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    onQuantityChange(id, newQuantity); // Notify parent component of the quantity change
  };

  const totalPrice = price * quantity;

  return (
    <div className="relative mx-auto mt-2 p-4 w-full max-w-2xl border-2 border-gray-300 rounded-lg">
      <button
        className="absolute right-2 top-2 h-8 w-8 rounded-full"
        onClick={() => onRemove(id)}
      >
        X
      </button>
      <div className="flex gap-4">
        <div className="relative  h-32 w-32 flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="object-contain w-32 h-32 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24">
              <label htmlFor="quantity" className="text-xs">QTY</label>
              <select
                value={quantity}
                onChange={handleQuantityChange}
                className="h-8 w-20 border-2 rounded-md"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="font-semibold">
              ${totalPrice.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main ShopCheckout component
function ShopCheckout() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "T-shirt Button-Down",
      description: "Reg XL in Black",
      price: 68.00,
      image: img3,
    },
    {
      id: "2",
      name: "Jeans Regular Fit",
      description: "Size 32 in Blue",
      price: 45.00,
      image: img2,
    },
    // You can add more items as needed
  ]);

  // Handle item removal from cart
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Handle quantity change for an item
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  // Calculate total price of items in cart
  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0); // Total number of items

  return (
    <div className="w-full mx-auto p-6 border-2 border-gray-300 rounded-lg bg-white shadow-lg">
      <div className="text-center text-2xl font-bold mb-6">Checkout Page</div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Customer Details Section */}
        <div className="flex-1 p-6 border-2 border-gray-200 rounded-lg shadow-md">
          <div className="text-xl font-semibold mb-4">Customer Details</div>
          <form>
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <label className="font-medium text-gray-900 mb-2">First Name</label>
                <input
                  type="text"
                  className="border-2 border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="John"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-900 mb-2">Last Name</label>
                <input
                  type="text"
                  className="border-2 border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="mb-6">
              <label className="font-medium text-gray-900 mb-2">Email Address</label>
              <input
                type="email"
                className="border-2 border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label className="font-medium text-gray-900 mb-2">Phone Number</label>
              <input
                type="tel"
                className="border-2 border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="123-456-7890"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Shop Right Section */}
        <div className="flex-1 m-auto p-2 border-2 border-gray-200 rounded-lg shadow-md">
          <div className="text-xl font-semibold text-gray-600">
            <div className="w-full h-auto flex flex-col justify-start p-3 ">
              <h1>Order Summary</h1>
              <div className="w-full h-auto flex justify-around text-sm ">
                <p>Items</p>
                <p>{totalItems}</p> {/* Total number of items */}
              </div>
              <div className="w-full h-auto flex justify-around text-2xl text-black ">
                <p>Total</p>
                <p>${totalAmount.toFixed(2)}</p> {/* Total price */}
              </div>
            </div>

            <div className=" w-full h-auto mt-3">
              <h1>Order Details</h1>
              <div>
                {cartItems.map(item => (
                  <CheckoutCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    onRemove={handleRemoveItem}
                    onQuantityChange={handleQuantityChange} // Pass quantity change handler
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCheckout;
