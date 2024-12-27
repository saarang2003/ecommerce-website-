import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from '../../store/auth';

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const [isAgreed, setIsAgreed] = useState(false);  // Manage checkbox state
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Use for navigation

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckboxChange(event) {
    setIsAgreed(event.target.checked);
  }

  function onSubmit(event) {
    event.preventDefault();

    // Ensure the user has agreed to the terms
    if (!isAgreed) {
      // Check if toast.POSITION is available and fallback to a default position
      toast("You must agree to the terms and conditions.", {
        position: toast?.POSITION?.BOTTOM_LEFT || toast.POSITION.TOP_RIGHT,  // Fallback to TOP_RIGHT if BOTTOM_LEFT is undefined
        type: "error",
      });
      return;
    }

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success("Success Notification !", {
          position: "top-right"
        });
      } else {
        toast.success("Error Notification !", {
          position: "top-right"
        });;
      }
    });
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-fit p-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-left mb-2">Welcome Back!!</h1>
          <h4 className="text-left">Enter your Credentials</h4>
          <hr className="mb-3" />
          <form onSubmit={onSubmit}>
            <div className="m-1 p-3">
              <label className="font-bold text-left mb-3">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="m-1 p-3">
              <label className="font-bold text-left mb-3">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name='password'
                value={formData.password}
                onChange={handleChange}
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
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p>
              New user?{" "}
              <a href="/auth/register" className="text-blue-600 hover:underline">
                Register here
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
