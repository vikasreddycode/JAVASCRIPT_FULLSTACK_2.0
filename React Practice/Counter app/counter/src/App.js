import logo from './logo.svg';
import './App.css';
import './index.css'
import {useState,React} from  "react"

function App() {
const[count,Setcount] = useState(0);
function increment()
{
  if(count>=10){
    Setcount(count);
  }
  else{
    Setcount(count+1);
  }
}
function decrement()
{
  if(count<=0){
    Setcount(count);
  }
  else{
    Setcount(count-1);
  }
}
function reset()
{
  Setcount(0);
}
  return (
    <div  class="flex-column justify-center align-center">
      <p class="my-[3vh] ml-[50%]">Count value is{count}</p>
      <button  onClick={increment}   className='bg-blue-600 px-[1vw] py-[1vh] mt-[1vh] rounded-xl ml-[50%]'>Increase the counter</button><br/>
      <button onClick={decrement} className='bg-blue-600 px-[1vw] py-[1vh] mt-[1vh] rounded-xl ml-[50%]'>Decrease the counter</button><br/>
      <button onClick={reset} className='bg-blue-600 px-[1vw] py-[1vh] mt-[1vh] rounded-xl ml-[50%]'>Reset the counter</button>
    </div>
  );
}

export default App;
