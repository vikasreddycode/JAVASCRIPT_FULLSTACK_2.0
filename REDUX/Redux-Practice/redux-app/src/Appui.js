import logo from './logo.svg';
import './App.css';
import './index.css'

function App() {
  return (
    <div className="App ">
      <div className='mt-[16%] ml-[5%]'>
      <input className="bg-gray-700 text-white text-center"  type={"text"} />
      <button className='bg-blue-600 ml-[2vw] rounded text-white p-[0.8vh]'>Increment by value</button>
      </div>
      <div className='mt-[1%]'>
      <button className='bg-blue-600 ml-[2vw] rounded text-white p-[0.8vh]'>Increment by 1</button>
      <input className="bg-gray-700 ml-[2vw] h-[5vh] w-[2vw] text-white text-center" type={"text"} />
      <button className='bg-blue-600 ml-[2vw] rounded text-white p-[0.8vh]'>Decrement by 1</button>
      </div>

    </div>
  );
}

export default App;
