/* eslint-disable react/prop-types */
import React from 'react'
import clown from '../Images/Screenshot__521_-ai-brush-removebg-mqi3w5y8.png';



export default function Welcome({loginData}) {
    console.log('signupState', loginData)
  return (
    
    <div className="flex flex-col justify-center align-middle h-screen ">
            <div className=" ">
                <img 
                alt=" "
                src={clown}
                className="mt-[-200px] animate-bounce align-middle flex justify-center object-cover h-100 w-100"
                />
            </div>
            <div className='flex flex-col items-center align-middle'>
              <h1 className="mt-[-25px]  text-center text-2xl font-extrabold  text-slate-500">
                Heyyaaaaa!!!
                </h1>
            
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-extrabold text-orange-500 text-3xl mt-3'>
                    {loginData?.username}
                    </h1>
              <h1 className='mt-25px text-centre flex justify-center text-3xl font-semibold text-gray-800'>
                You are logged in :D 
              </h1>
              </div>
            </div>

            
        </div>
    
  )
}