import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';

// import { Button } from 'react-bootstrap';

// Objective: Build a simple Discount Calculator that helps users calculate the final price after applying a discount.

// Formula:

// Discount = (Original Price × Discount %) / 100


// Final Price = Original Price – Discount



function App() {
 
      const [discount,setDiscount]=useState();
      const [price,setPrice]=useState();
      const [discountPrice,setDiscountPrice]=useState();

  const getPrice=(event)=>{
    
      console.log(event.target.value);
      setPrice(event.target.value)
      
  }

  const getDiscount=(event)=>{

      console.log(event.target.value);   
      setDiscount(event.target.value)
      
  }

  const calculate=()=>{
     var a,d;
     d=Number(price*discount)/100;
     a=Number(price)-Number(d);
     setDiscountPrice(a)
     
  }
 
  return (
    <>

   

        <div className="row bg-primary">
          <div className="col-4"></div>
          <div className="col-4 bg-light text-center m-2 m p-2 border shadow">
            <h2>Discount Calculator   </h2>
            <input type="number" onChange={(e) => getPrice(e)} className='m-1 ' placeholder='Enter Your Price  ' />
            <input type="number" onChange={(e)=>getDiscount(e)} className='m-1' placeholder='Enter Your Discount'/>
             <button type='submit' onClick={calculate} className='btn btn-success mt-2 text-center'>Calculate</button>
             <p className=' fs-1 text-danger'>Discount Price  {discountPrice}/-</p>
          </div>
          <div className="col-4"></div>
        </div>
    
    </>
  )
}

export default App
