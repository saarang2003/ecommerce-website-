import * as React from "react";
import { BarChart3, ClipboardList, Package, Wallet, Users, FileText, MessageSquare, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@material-tailwind/react';

function Sidebar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="pb-12 w-64">
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="flex items-center gap-2 mb-2">
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className="w-10 h-10 mr-5" />
            <div>
              <h2 className="text-lg font-medium tracking-tight">{user?.username.toUpperCase()}</h2>
              <p className="text-sm text-muted-foreground">{user?.role.toUpperCase()}</p>
            </div>
          </div>
        </div>

        <div className="px-3">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            E-Commerce
          </h2>
          <div className="space-y-1">
            <button
              className="w-full justify-start gap-2 hover:bg-red-100 hover:text-red-500 p-2 rounded-md flex items-center"
              onClick={() => navigate('/admin/dashboard')}
            >
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </button>
            <button
              className="w-full justify-start gap-2 p-2 rounded-md flex items-center hover:bg-red-100 hover:text-red-500"
              onClick={() => navigate('/admin/order')}
            >
              <ClipboardList className="h-4 w-4" />
              Orders
            </button>
            <button
              className="w-full justify-start gap-2 p-2 rounded-md flex items-center hover:bg-red-100 hover:text-red-500"
              onClick={() => navigate('/admin/products')}
            >
              <Package className="h-4 w-4" />
              Products
            </button>
            <button
              className="w-full justify-start gap-2 p-2 rounded-md flex items-center hover:bg-red-100 hover:text-red-500"
            >
              <Wallet className="h-4 w-4" />
              Buyer
            </button>
            <button
              className="w-full justify-start gap-2 p-2 rounded-md flex items-center hover:bg-red-100 hover:text-red-500"
            >
              <Users className="h-4 w-4" />
              Customers
            </button>
            <button
              className="w-full justify-start gap-2 p-2 rounded-md flex items-center hover:bg-red-100 hover:text-red-500"
            >
              <FileText className="h-4 w-4" />
              Invoices
            </button>
          </div>
        </div>

        <div className="px-3">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Apps
          </h2>
          <div className="space-y-1">
            <button
              className="w-full justify-start gap-2 p-2 rounded-md flex items-center"
            >
              <MessageSquare className="h-4 w-4" />
              Chats
              <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                2
              </span>
            </button>
            <button
              className="w-full justify-start gap-2 p-2 rounded-md flex items-center"
            >
              <Mail className="h-4 w-4" />
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
