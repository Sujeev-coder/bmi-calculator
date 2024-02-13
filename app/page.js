"use client"
import React, { useState } from 'react'

const page = () => {


  const [bmi, setbmi] = useState()
  const [weight, setweight] = useState()
  const [height, setheight] = useState()
  const [message, setmessage] = useState()

  const submitHandler = (e) => {

    e.preventDefault();

    if (weight == 0 || height == 0) {

      alert("Enter the Valid Details");

    }

    else {

      let bmi = weight / (height * height) * 703;
      setbmi(bmi.toFixed(1));

      if (bmi < 25) {

        setmessage("Your are UnderWeight")

      }

      else if (bmi >= 25 && bmi <= 35) {

        setmessage("Your Healthy Weight")


      }

      else {

        setmessage("Your OverWeight")

      }

    }


  }

 let reload = () => {

  window. location. reload();
    console.log("sujeebv")
 

  }


  return (

    <div className='justify-center flex mt-20'>

      <div className='border-slate-100 w-80 h-[450px] border-2 shadow-xl shadow-slate-500 rounded-2xl '>

        <h1 className='text-center p-5 text-3xl font-bold'>BMI CALCULATOR</h1>

        <div className=' w-full h-full   '>

          <form onSubmit={submitHandler} >

            <div className='pl-4 pt-2 flex-col '>

              <label className='text-xl pl-2' >Weight (in lbs)</label>
              <input type='text' placeholder='Enter the Weight' className='border-slate-500 border-[1px] mt-2 h-9 rounded pl-3 text-xl' value={weight} onChange={(e) =>

                setweight(e.target.value)

              } ></input>


            </div>

            <div className='pl-4 pt-2 flex-col '>

              <label className='text-xl pl-2' >Height (in inches)</label>
              <input type='text' placeholder='Enter the Height' className='mt-2 h-9 rounded pl-3 text-xl border-slate-500 border-[1px] ' value={height} onChange={(e) =>

                setheight(e.target.value)}  ></input>


            </div>



            <div className='text-center m-5 '>

              <button className='bg-blue-500 h-9 w-[280px] rounded text-white' type='submit' >Submit</button>

            </div>

            <div className='text-center m-5 '>

              <button className='bg-slate-100 h-9 w-[280px] rounded text-black' onClick={reload} >Reload</button>

            </div>

            <div className='pl-5 text-lg font-bold text-center' ><h1>Your Bmi is :<span className='text-black'>{bmi}</span></h1></div>
            <div className='pl-5 text-lg font-bold text-center text-black'  ><h1>{message}</h1></div>

          </form>
        </div>

      </div >

    </div >
  )
}

export default page