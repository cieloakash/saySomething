import React,{useState} from 'react'
import { LuLogIn } from "react-icons/lu";

function Login() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

  return (
    <div className="bg-cover h-screen" style={{ backgroundImage: 'url("https://wallpapers.com/images/high/doodle-glowing-artwork-vhu5ts3hs8bxyq5a.webp")' }}>

        <div className=' flex items-center justify-center h-screen'>
            {/* card for login */}
            <div className=' bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-md relative'>
                <div className=' absolute -top-4 left-1/2 transform -translate-x-10 '>
                    <LuLogIn className=' text-7xl bg-slate-100 rounded-full p-5 top-16 ' />
                </div>
                <div className=" mt-10">
                    {/* form for login and password  */}
                    <form action="#">
                        <div className=' mb-4'>
                            <label htmlFor="#" className='block text-xl font-medium text-gray-600'>Email</label>
                            <input type="email" className=' mt-1 p-1 w-full  rounded-md border-none cursor-pointer focus:outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-500' />
                        </div>

                        <div className=' mb-4'>
                            <label for="password" class="block text-xl font-medium text-gray-600">Password</label>
                            <input type="password" id="password" name="password" class="mt-1 p-1 w-full  rounded-md border-none cursor-pointer focus:outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-500"/>
                        </div>
                    </form>


                    {/* remember me and login button */}

                    <div className=' flex gap-10'>
                        <div>
                            <button  className=' cursor-pointer'><input type="checkbox" /> Remember me</button>
                        </div>
                        <p>Forget password ?</p>
                    </div>

                    {/* button for login */}
                    <div className={`bg-blue-500 hover:bg-blue-700 mt-10 flex items-center justify-center text-white text-xl font-bold py-2 px-4 rounded ${isClicked ? 'opacity-50' : ''}`} onClick={handleClick}>
                        Login 
                    </div>
                    
                </div>

            </div>
        </div>
        
       
        
    </div>
  )
}

export default Login