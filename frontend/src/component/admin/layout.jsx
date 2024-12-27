import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './sidebar';
import Header from './header';

function AdminLayout() {
  return (
    <div className="h-screen w-full flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content area with Sidebar and Outlet */}
      <div className="flex h-full w-full">
        {/* Sidebar with a fixed width on large screens and collapses on small screens */}
        <div className="flex-none w-64 border-2 border-slate-200 md:block hidden">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 overflow-auto border-t-2 border-slate-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
