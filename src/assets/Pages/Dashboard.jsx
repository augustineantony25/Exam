
import React, { useState } from 'react'

function EventHandling() {

    const handleBtn = () => {
        alert("Button Clicked")
    };

    const handleBtn2 = (data) => {
        alert(`Welcome to ${data}`)
    };

    const handleBtn3 = (data, event) => {
        console.log(data);
        console.log(event);


    };

    const [currentage, setCurrentage] = useState();
    const [msg, setMsg] = useState();
    const getAge = (event) => {
        console.log(event.target.value);

        setAge(event.target.value)

    }

    const [age, setAge] = useState()

    const calculate = () => {
        let message;
        let yourAge = 2025 - age
        console.log(yourAge);
        setCurrentage(yourAge)
        if (yourAge) {
            message = `Your age :${yourAge}`
            setMsg(message);
        }
        else {
            message = `please enter age`;
            setMsg(message)
        }


    }





    return (
        <div className="text-center p-4 shadow-lg  bg-warning">
            <h1 className='text-white '>EventHandling</h1>

            <div className=" text-center p-4 shadow-lg border-0 rounded-4 bg-light" >

                <input className='col-12 mb-5' onChange={(e) => getAge(e)} type="text" placeholder='Enter age ' />

                <button onClick={calculate} className='btn btn-success me-5'>calculate</button>
                <button onClick={handleBtn} className='btn btn-primary me-5'>Btn1</button>
                <button onClick={() => handleBtn2('MERN')} className='btn btn-danger me-5'>btn2</button>
                <button onClick={(e) => handleBtn3('Luminar', e)} className='btn btn-info me-5'>btn3</button>

                {/* {age ? <h1 className='text-success pt-5'>Your age:{currentage}</h1>:<h1 className='text-danger'>Please Enter Your age</h1>}
                {age && `your Age:${currentage}`} */}
                {msg}
            </div>


        </div>

    )
}

export default EventHandling