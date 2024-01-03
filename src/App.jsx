import { useState } from 'react'
import './App.css'

function App() {

  let [result,setResult] = useState("0")

  const clear = ()=>{
    setResult("0");
  }

  const backspace = ()=>{
    result.length === 1 ? setResult("0") : setResult(result.slice(0,-1));
  }

  const calculate = ()=>{
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error")
    }
  }

  const handleClick = (e)=>{
    if(result.length == 1 && result == '0'){
      result=""
    }
    result+=e.target.name;
    setResult(result);
  }

  return (
    <div className='h-[516px] w-96 bg-black mx-auto rounded-lg mt-16 p-2'>

      <div>
      <input type="text" value={result} readOnly className='bg-slate-300 h-32 w-full p-8 text-5xl text-right'/>
      </div>


      <div className='grid grid-cols-4 h-[370px]'>
        <button className='bg-cyan-300 p-1 m-1 text-2xl font-extrabold' onClick={clear}>CLEAR</button>
        <button className='bg-cyan-300 p-1 m-1 text-2xl font-extrabold' onClick={backspace}>C</button>
        <button name="%" className='bg-cyan-300 p-1 m-1 text-2xl font-extrabold' onClick={handleClick}>%</button>
        <button name="/" className='bg-cyan-300 p-1 m-1 text-2xl font-extrabold' onClick={handleClick}>/</button>
        <button name="7" className='bg-[#503cd1] p-1 m-1 text-2xl' onClick={handleClick}>7</button>
        <button name="8" className='bg-[#503cd1] p-1 m-1 text-2xl' onClick={handleClick}>8</button>
        <button name="9" className='bg-[#503cd1] p-1 m-1 text-2xl' onClick={handleClick}>9</button>
        <button name="*" className='bg-cyan-300 p-1 m-1 text-2xl font-extrabold' onClick={handleClick}>X</button>
        <button name="4" className='bg-[#503cd1] p-1 m-1 text-2xl' onClick={handleClick}>4</button>
        <button name="5" className='bg-[#503cd1] p-1 m-1 text-2xl' onClick={handleClick}>5</button>
        <button name="6" className='bg-[#503cd1] p-1 m-1 text-2xl' onClick={handleClick}>6</button>
        <button name="-" className='bg-cyan-300 p-1 m-1 text-2xl font-extrabold' onClick={handleClick}>-</button>
        <button name="1" className='bg-[#503cd1] p-1 m-1 text-2xl' onClick={handleClick}>1</button>
        <button name="2" className='bg-[#503cd1] p-1 m-1 text-2xl' onClick={handleClick}>2</button>
        <button name="3" className='bg-[#503cd1] p-1 m-1 text-2xl' onClick={handleClick}>3</button>
        <button name="+" className='bg-cyan-300 p-1 m-1 text-2xl font-extrabold' onClick={handleClick}>+</button>
        <button name="0" className='bg-[#503cd1] p-1 m-1 text-2xl' onClick={handleClick}>0</button>
        <button name="." className='bg-[#503cd1] p-1 m-1 text-2xl font-extrabold' onClick={handleClick}>.</button>
        <button className='bg-red-500 p-1 m-1 col-span-2 text-2xl font-extrabold' onClick={calculate}>=</button>

      </div>

    </div>
  )
}

export default App
