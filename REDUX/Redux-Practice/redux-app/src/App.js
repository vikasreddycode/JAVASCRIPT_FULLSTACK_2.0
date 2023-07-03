import {useState} from 'react';
import React from 'react';
import {increment,decrement,incrementbyvalue} from "./Featues/Counter/counterSlice"
import {useSelector,useDispatch} from 'react-redux'
function App(){
    const [input,setInput] = useState(0);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return(<div>
        <div className='mt-[16%] ml-[5%]'>
    <input className="bg-gray-700 text-white text-center" value={input}  onChange={(e)=>setInput(e.target.value)} type= "number" />
    <button onClick={() => {dispatch(incrementbyvalue(Number(input)))}}   className='bg-blue-600 ml-[2vw] rounded text-white p-[0.8vh]'>Increment by value</button>
    </div>
    <div className='mt-[1%]'>
    <button onClick={() => {dispatch(increment(Number(input)))}} className='bg-blue-600 ml-[2vw] rounded text-white p-[0.8vh]'>Increment by 1</button>
    <input className="bg-gray-700 ml-[2vw] h-[5vh] w-[5vw] text-white text-center" type="number" value={count} />
    <button onClick={() => {dispatch(decrement(Number(input)))}}className='bg-blue-600 ml-[2vw] rounded text-white p-[0.8vh]'>Decrement by 1</button>
    <span>{count}</span>
    </div>
    </div>)
}
export default App;