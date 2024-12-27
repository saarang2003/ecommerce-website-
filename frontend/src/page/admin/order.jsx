import React from 'react';
import { Search, ChevronDown, MoreVertical, Globe } from 'lucide-react';

const orders = [
  { id: '#3210', name: 'Cortie Gemson', date: 'May 23, 2021', total: 239.00, status: 'Processing' },
  { id: '#3210', name: 'Mathilde Tumilson', date: 'May 15, 2021', total: 650.50, status: 'Shipped' },
  { id: '#3210', name: 'Audrye Heaford', date: 'Apr 24, 2021', total: 100.00, status: 'Completed' },
  { id: '#3210', name: 'Brantley Mell', date: 'Apr 10, 2021', total: 19.00, status: 'Refunded' },
  { id: '#3210', name: 'Cortie Gemson', date: 'May 23, 2021', total: 239.00, status: 'Processing' },
  { id: '#3210', name: 'Mathilde Tumilson', date: 'May 15, 2021', total: 650.50, status: 'Shipped' },
  { id: '#3210', name: 'Audrye Heaford', date: 'Apr 24, 2021', total: 100.00, status: 'Completed' },
  { id: '#3210', name: 'Brantley Mell', date: 'Apr 10, 2021', total: 19.00, status: 'Refunded' },
  { id: '#3210', name: 'Cortie Gemson', date: 'May 23, 2021', total: 239.00, status: 'Processing' },
  { id: '#3210', name: 'Mathilde Tumilson', date: 'May 15, 2021', total: 650.50, status: 'Shipped' },
  { id: '#3210', name: 'Audrye Heaford', date: 'Apr 24, 2021', total: 100.00, status: 'Completed' },
  { id: '#3210', name: 'Brantley Mell', date: 'Apr 10, 2021', total: 19.00, status: 'Refunded' },
];

const getStatusColor = (status) => {
  const colors = {
    Processing: 'bg-orange-100 text-orange-600',
    Shipped: 'bg-slate-100 text-slate-600',
    Completed: 'bg-green-100 text-green-600',
    Refunded: 'bg-yellow-100 text-yellow-600',
  };
  return colors[status];
};

function AdminOrder() {
  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 text-slate-600 mb-8">
        <Globe className="w-5 h-5 text-orange-500" />
        <span>Dashboard</span>
        <span>/</span>
        <span className="text-slate-400">Orders</span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-8">
        <button className="font-medium">All Orders</button>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            Sort by
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            10
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <button className="ml-auto px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Actions
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="w-12 px-6 py-4">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">ID</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">NAME</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">DATE</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">TOTAL</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">STATUS</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4 text-orange-500 font-medium">{order.id}</td>
                <td className="px-6 py-4 font-medium">{order.name}</td>
                <td className="px-6 py-4 text-gray-500">{order.date}</td>
                <td className="px-6 py-4 font-medium">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrder;
