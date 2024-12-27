import { Activity, ChartLine, Ellipsis, MoveUp, ShoppingBasket } from 'lucide-react';
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale,ArcElement ,LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components in Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement,ArcElement ,  Title, Tooltip, Legend);

const AdminDashboard = () => {
  // Chart.js data
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Sales",
        data: [1200, 1500, 1300, 1600, 1800, 1700, 2200, 2100, 1900, 2100, 2400, 2500],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4
      },
      {
        label: "Orders",
        data: [800, 950, 920, 1100, 1150, 1300, 1400, 1350, 1250, 1300, 1450, 1500],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.4
      }
    ]
  };

  // Chart.js options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount'
        },
        beginAtZero: true
      }
    }
  };



  const pieData = {
    labels: ["Google", "Email", "Social Media"],
    datasets: [{
      data: [45, 30, 25], // Percentage values for Google, Email, and Social Media
      backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"], // Segment colors
      hoverBackgroundColor: ["#388E3C", "#F57C00", "#1976D2"], // Hover colors
    }]
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`; // Showing percentage in tooltip
          }
        }
      },
      legend: {
        position: 'top', // Legend position at the top
      }
    }
  };
  

  return (
    <div className="bg-[#f5f4fe] ">
      <div className="w-[1300px] flex h-[500px] m-auto  gap-x-6">
        {/* Left Div with Line Chart */}
        <div className="w-[800px] bg-white m-auto ml-5 rounded-lg shadow-lg flex justify-center items-center h-[400px]">
          <Line data={chartData} options={chartOptions} className='mr-4' />
        </div>

        {/* Right Div */}
        <div className="w-[500px] flex justify-center items-center rounded-lg shadow-lg bg-white m-auto mr-3  p-5 h-[400px]">
        <Pie data={pieData} options={pieOptions}/>
        </div>
      </div>

      <div className="w-[1400px] flex justify-evenly h-[200px] space-x-4">
  {/* Card 1 */}
  <div className="h-auto w-[350px] bg-white border-2 border-gray-300 rounded-lg shadow-lg">
    <div className="flex justify-between items-center p-4">
      <ShoppingBasket width={40} height={40} />
      <Ellipsis />
    </div>

    <h2 className="text-2xl font-semibold text-gray-800 mx-4 mb-2">Order</h2>

    <div className="flex justify-between items-center p-2 mx-4 border-b border-gray-200">
      <p className="text-xl font-semibold text-gray-800">310</p>
      <div className="text-blue-500 cursor-pointer">
        <ChartLine color="green" />
      </div>
    </div>

    <div className="flex justify-start items-center p-4">
      <p className="text-sm text-gray-600">Over last month 1.4%</p>
      <span className="inline-flex items-center ml-2 text-green-500">
        <MoveUp />
      </span>
    </div>
  </div>

  {/* Card 2 */}
  <div className="h-auto w-[350px] bg-white border-2 border-gray-300 rounded-lg shadow-lg">
    <div className="flex justify-between items-center p-4">
      <ShoppingBasket width={40} height={40} />
      <Ellipsis />
    </div>

    <h2 className="text-2xl font-semibold text-gray-800 mx-4 mb-2">Sales</h2>

    <div className="flex justify-between items-center p-2 mx-4 border-b border-gray-200">
      <p className="text-xl font-semibold text-gray-800">3547</p>
      <div className="text-blue-500 cursor-pointer">
        {/* Optional chart icon, leave blank if not needed */}
      </div>
    </div>

    <div className="flex justify-between items-center p-4">
      <p className="text-sm text-gray-600">Over last month 1.4%</p>
      <span className="inline items-center ml-2 text-green-500">
        <Activity color="blue" />
      </span>
    </div>

    <div className="flex items-center p-4">
      <p className="text-sm text-gray-600">Over last month 8.9%</p>
      <span className="inline-flex items-center ml-2 text-green-500">
        <MoveUp />
      </span>
    </div>
  </div>

  {/* Card 3 */}
  <div className="h-auto w-[350px] bg-white border-2 border-gray-300 rounded-lg shadow-lg">
    <div className="flex justify-between items-center p-4">
      <ShoppingBasket width={40} height={40} />
      <Ellipsis />
    </div>

    <h2 className="text-2xl font-semibold text-gray-800 mx-4 mb-2">Best Seller</h2>

    <div className="flex justify-between items-center p-2 mx-4 border-b border-gray-200">
      <p className="text-xl font-semibold text-gray-800">310</p>
      <div className="text-blue-500 cursor-pointer">
        {/* Optional chart link */}
        Chart
      </div>
    </div>

    <div className="flex justify-start items-center p-4">
      <p className="text-sm text-gray-600">Over last month 1.4%</p>
      <span className="inline-flex items-center ml-2 text-green-500">
        <MoveUp />
      </span>
    </div>
  </div>
</div>

    </div>
  );
};

export default AdminDashboard;
