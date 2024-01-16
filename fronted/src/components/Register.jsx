import React from 'react'
import { FaUser } from "react-icons/fa";

function Register() {
  return (
    <div className=' relative flex items-center justify-center h-screen  '>
        <h4 className=' absolute text-black top-36 text-xl font-bold'> Register Here</h4>
        <div className=' bg-orange-200 pt-6 pr-10 pl-10 pb-6 rounded-xl'>
        <div className=' flex justify-center'>
            <span className='inline-block bg-gray-300 border border-black p-3 rounded-full '>
                <FaUser  className=' text-6xl rounded-full' />
            </span>

        </div>

        {/* register page form  -- name, userNmae,emailid, password,  */}
        
        <div>
          <form action="">
            <div className=' mb-4'>
              <label htmlFor="#" className='block text-sm font-medium text-gray-600 '>Name</label>
              <input type="text" className=' mt-1 p-1 w-full  rounded-md border-none cursor-pointer focus:outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-500 ' />
            </div>
            <div className=' mb-4'>
              <label htmlFor="#" className='block text-sm font-medium text-gray-600'>User Name</label>
              <input type="text" className=' mt-1 p-1 w-full  rounded-md border-none cursor-pointer focus:outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-500' />
            </div>
            
            <div className=' mb-4'>
              <label htmlFor="#" className='block text-sm font-medium text-gray-600'>Email</label>
              <input type="email" className=' mt-1 p-1 w-full  rounded-md border-none cursor-pointer focus:outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-500' />
            </div>

            <div className=' mb-4'>
            <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" id="password" name="password" class="mt-1 p-1 w-full  rounded-md border-none cursor-pointer focus:outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-500"/>
            </div>
            
          </form>

        </div>
        </div>
    </div>
  )
}

export default Register
