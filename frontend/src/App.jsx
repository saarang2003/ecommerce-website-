import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Register from "../src/page/auth/register";
import Login from "../src/page/auth/login";
import { Skeleton } from 'primereact/skeleton';
import AuthLayout from "../src/component/auth/layout";
import AdminLayout from "../src/component/admin/layout";
import AdminDashboard from "./page/admin/dashboard";
import AdminOrder from "./page/admin/order";
import AdminProduct from "./page/admin/product";
import NotFound from "./page/not-found/notfound";
import ShopLayout from "./component/shop/layout";
import ShopAccount from "./page/shopping-view/account";
import ShopCheckout from "./page/shopping-view/checkout";
import ShopHome from "./page/shopping-view/home";
import ShopListing from "./page/shopping-view/listing";
import UnauthPage from "./page/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/auth";
import CheckAuth from "./component/common/checkAuth";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    // If data is still loading, render a skeleton loader
    return (
      <div className="loading-screen">
        <Skeleton width="100%" height="100vh" />  {/* Full screen skeleton loader */}
      </div>
    );
  }
  
  return (
    <div>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
          <CheckAuth 
          isAuthenticated={isAuthenticated} 
          user={user} >
 </CheckAuth>
 }
 />

        {/* Auth Routes */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="order" element={<AdminOrder />} />
          <Route path="products" element={<AdminProduct />} />
        </Route>

        {/* Shop Routes */}
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShopLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShopHome />} />
          <Route path="listing" element={<ShopListing />} />
          <Route path="checkout" element={<ShopCheckout />} />
          <Route path="account" element={<ShopAccount />} />
        </Route>

        {/* Unauthorized Page */}
        <Route path="/unauth" element={<UnauthPage />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
