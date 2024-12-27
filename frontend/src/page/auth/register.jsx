import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth/index";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const initialState = {
  username: "",
  email: "",
  password: "",
};

function Register() {
  const [formData, setFormData] = useState(initialState);
  const [isAgreed, setIsAgreed] = useState(false); // New state for the checkbox
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckboxChange(event) {
    setIsAgreed(event.target.checked);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!isAgreed) {
      toast({
        title: "You must agree to the terms and conditions.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          status: "error",  // Fixed the wrong property here
          duration: 5000,
          isClosable: true,
        });
      }
    });
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-fit p-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-center mb-4">Get Started</h1>
          <hr className="mb-3" />
          <form onSubmit={onSubmit}>
            <div className="m-1 p-3">
              <label className="font-bold text-left mb-3">Name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="m-1 p-3">
              <label className="font-bold text-left mb-3">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="m-1 p-3">
              <label className="font-bold text-left mb-3">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={handleCheckboxChange}
                className="mx-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              I agree to terms and policy
            </div>

            <div className="mb-2">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
              >
                Register
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p>
              Already registered?{" "}
              <a href="/auth/login" className="text-blue-600 hover:underline">
                Login here
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;
