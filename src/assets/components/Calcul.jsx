import React, { useState } from 'react'
import './Calcul.css'

const Calcul = () => {
    const [data,setData]=useState('');


    const getValue=(e)=>{
        console.log(e.target.value);
        setData(data.concat(e.target.value));
    }

    const calculat=()=>{
        setData(eval(data).toString())
    };

    const backbut=()=>{
        setData(data.slice(0,-1))
    };

    const clearfunction=()=>{
        setData(" ");
    }

  return (
    <>
    <div className='back'>
    <div className='container'>
        <div className='but'>
                <input placeholder='0' value={data}/>
        </div>
        
        <div className='but'>
       <button onClick={getValue} value="(">(</button>
       <button onClick={getValue} value=")">)</button>
       <button onClick={getValue} value="%">%</button>
       <button onClick={clearfunction} >AC</button>
        </div>

        <div className='but'>
       <button onClick={getValue} value="7">7</button>
       <button onClick={getValue} value="8">8</button>
       <button onClick={getValue} value="9">9</button>
       <button onClick={getValue} value="*">*</button>
        </div>

        <div className='but'>
       <button onClick={getValue} value="4">4</button>
       <button onClick={getValue} value="5">5</button>
       <button onClick={getValue} value="6">6</button>
       <button onClick={getValue} value="-">-</button>
        </div>


        <div className='but'>
       <button onClick={getValue} value="1">1</button>
       <button onClick={getValue} value="2">2</button>
       <button onClick={getValue} value="3">3</button>
       <button onClick={getValue} value="+">+</button>
        </div>


        <div className='but'>
       <button onClick={getValue} value="0">0</button>
       <button onClick={backbut} value="Back">Back</button>
       <button onClick={calculat} >=</button>
       <button onClick={getValue} value="/">/</button>
       </div>
    </div>
    </div>
    </>
  )
}

export default Calcul