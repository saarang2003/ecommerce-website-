import React, { useState } from "react";

function ShopAccount() {
  const [gender, setGender] = useState("");

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden ">
      <div className="px-6 py-12 md:px-12 lg:px-16 container mx-auto max-w-4xl ">
        <div className="text-center mb-10 ">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Update Your Profile
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Provide accurate and up-to-date information to personalize your account
          </p>
        </div>

        <div className="space-y-6  ">
          {/* Name Section */}
          <div className="grid md:grid-cols-1 gap-6  ">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="Emma"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
          </div>

          {/* Gender Section */}
          <div className="grid md:grid-cols-1 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-1 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="emma@mail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
          </div>

          {/* Location and Phone */}
          <div className="grid md:grid-cols-1 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Address
              </label>
              <input
                type="text"
                placeholder="Florida, USA"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Confirm Address
              </label>
              <input
                type="text"
                placeholder="Florida, USA"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (123) 456-7890"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopAccount;