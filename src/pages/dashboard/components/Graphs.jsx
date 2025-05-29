import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

export const Graphs = () => {       

    ChartJS.register(
        LineElement,
        BarElement,
        CategoryScale,
        LinearScale,
        PointElement
    );
    ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement);

    
const barData = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
  datasets: [
    {
      label: 'Users',
      data: [100, 200, 250, 300, 350, 400, 450],
      backgroundColor: '#15803d',
    },
  ],
};

const lineData = {
  labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Growth',
      data: [3, 6, 8, 12, 9, 14, 11, 20],
      borderColor: '#15803d',
      fill: false,
    },
  ],
};




    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">User Growth</h3>
          <Bar data={barData} />
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Revenue Trend</h3>
          <Line data={lineData} />
        </div>
      </div>
    );
    }