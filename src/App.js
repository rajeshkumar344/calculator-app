
import './App.css';
import Sidebar from './compoenents/Sidebar';
import Header from './compoenents/Header';
import Card from './compoenents/Card';
import { FaShoppingCart } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { FaPeopleLine } from 'react-icons/fa6';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
// import Homepage from './compoenents/Homepage';
import { dataLine,dataBar } from './assets/chartData';
import {Line,Bar} from 'react-chartjs-2'
import { Chart as ChartJS, LineElement,BarElement,CategoryScale,LinearScale,PointElement } from 'chart.js';
import ThemeContext from './context/ThemeContext';

ChartJS.register(LineElement,BarElement,CategoryScale,LinearScale,PointElement);

function App() {
  return (
    <ThemeContext>
    <div className="APP flex">
    
   
      
      <Sidebar/>
      <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900
      daark:bg-gray-900 daark:text-white '>
      
        <Header/>
       
        
        <div className='flex flex-col m-4 space-y-4 '>
          <h2 className='font-semibold text-xl'>Dashboard</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
        <Card items=  {<FaShoppingCart size={30} />} title="Orders" value= "140"/>
        <Card items=  {<PiShoppingBagOpenFill size={30}  />} title="Products" value= "120"/>
        <Card items=  {<FaPeopleLine size={30}  />} title="Users" value= "30"/>
        <Card items=  { <IoSettingsSharp size={30}  />} title="Settings" value= "11"/> 
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
           <div className='bg-white p-4 rounded-lg shadow-md daark:bg-gray-800'>
           <h3 className='text-lg font-semibold mb-4'>Sales Data</h3>
           <Line data={dataLine}/>
           </div>
           <div className='bg-white p-4 rounded-lg shadow-md daark:bg-gray-800'>
           <h3 className='text-lg font-semibold mb-4'>Product Data</h3>
           <Bar data={dataBar}/>
           </div>
        </div>

        </div>
      </div>

     
    </div>
     </ThemeContext>
   
  );
}


export default App;
