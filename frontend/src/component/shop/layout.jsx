import React from 'react';
import { Outlet } from 'react-router';
import ShopHeader from '../../component/shop/header';
import ShopMenu from '../shop/Menu';

function ShopLayout() {
  return (
    <div className="flex flex-col bg-white">
      <ShopHeader />
      <div className="relative "> {/* Ensure dropdown is above other content */}
  <ShopMenu />
</div>
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default ShopLayout;
