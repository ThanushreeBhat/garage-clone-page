import React from 'react'

export default function Garage(){
  return(
    <>
    <div className="bg-gray-100">
    <div className="flex flex-col items-center h-[600px]  md:mx-[110px] bg-black rounded-[80px]">
        {/* Header */}
     <div className="bg-amber-500 h-[100px] w-full md:w-[950px] flex flex-row justify-center items-center py-2 rounded-b-[30px] ">
      <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png"/>
      
        <div className="flex flex-row">
          <div className="hidden md:block px-[40px] underline underline-offset-4 mr-[20px] mt-2.5 text-cyan-900 font-bold">
            Home
          </div>
          <div className="hidden md:block px-[0px] underline underline-offset-4 mr-[20px] mt-2.5 text-cyan-900 font-bold">
            About us
          </div>
          <div className="hidden md:block px-[10px] underline underline-offset-4 mr-[20px] mt-2.5 text-cyan-900 font-bold">
            pages
          </div>
          <div className="hidden md:block px-[10px] underline underline-offset-4 mr-[20px] mt-2.5 text-cyan-900 font-bold">
            Shop
          </div>
          <div className="hidden md:block px-[10px] underline underline-offset-4 mr-[20px] mt-2.5 text-cyan-900 font-bold">
            blog
          </div>
          <div className="hidden md:block px-[10px] underline underline-offset-4 mr-[20px] mt-2.5 text-cyan-900 font-bold">
            contact
          </div>
        </div>
        
        </div>
          {/* Hero-section */}
          <div className="relative flex flex-row justify-around">
       <div className="text-white font-bold text-5xl md:text-6xl items-around p-2 my-10">
        Where Quality Is A <br/> 
        Service Meets The <br/>
        <span className="text-amber-400">Open Road </span>
        <br/><span className="text-white-600 text-[20px] md:text-sm ">Car service is essential for maintaining the performance and longevity of your vehicle. </span>
        <div className="rounded-4xl bg-red-500 font-bold text-xl w-[200px] p-4 mt-10 ml-10 justify-center  text-center">
          Get started
        </div>
       </div>
       
       <img className="hidden md:block m-20 rounded-[10px] " width="300px" height="300px" src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-2.jpg"/>
       </div>
       
       <div className='bg-white flex flex-col w-[400px] p-10 md:w-[1000px] md:h-[100px] absolute bottom-[340px] rounded-[30px] md:bottom-[-40px] md:rounded-md shadow-lg md:flex md:flex-row items-center justify-evenly'>
            <div className='font-extrabold text-4xl'>600+</div>
            <div className='font-extrabold text-4xl'>2K+</div>
            <div className='font-extrabold text-4xl'>53+</div>
            <div className='font-extrabold text-4xl'>3K+</div>
        </div>
        </div>
        <br/>
        <section className="bg-white py-16 px-6 text-center flex flex-col  items-center mt-[120px] md:h-[600px] md:mx-[110px]  md:mt-[150px] md:my-[30px] rounded-[80px]">
      {/* service Section */}
      <div className="mb-12">
        <p className="text-sm text-red-600 font-semibold uppercase tracking-widest">
           Services
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-2 leading-snug">
          Your Trusted Car Provider <br /> Keeping Your Vehicle
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl md:max-w-6xl mx-auto items-center">
        <div className="border rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="flex justify-center items-center mb-5">
            <div className="w-20 h-20 rounded-full flex justify-center items-center text-4xl bg-gradient-to-r from-red-600 to-blue-900 text-white">
              ⚙️
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Transformation Advising
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Car service is essential for maintaining the performance and
            longevity of your vehicle. From oil changes Car service
          </p>
        </div>
          <div className="border rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="flex justify-center items-center mb-5">
            <div className="w-20 h-20 rounded-full flex justify-center items-center text-4xl bg-gradient-to-r from-red-600 to-blue-900 text-white">
              🛞
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Easy Drive Maintenance
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Car service is essential for maintaining the performance and
            longevity of your vehicle. From oil changes Car service
          </p>
        </div>

        
        <div className="border rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="flex justify-center items-center mb-5">
            <div className="w-20 h-20 rounded-full flex justify-center items-center text-4xl bg-gradient-to-r from-red-600 to-blue-900 text-white">
              🧰
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Elite Auto Services
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Car service is essential for maintaining the performance and
            longevity of your vehicle. From oil changes Car service
          </p>
        </div>
        </div>
      </section>
      <section className=" py-16 px-6 text-center flex flex-col items-center md:h-[600px] md:mx-[110px] mt-[30px] my-[30px] rounded-[80px]">
      {/* About us Section */}
      <div className="mb-12">
        <p className="text-sm text-red-600 font-semibold items-left">
           About us 
        </p>
       <div className="relative flex flex-col md:flex-row justify-around">
       <div className="text-black font-bold text-4xl md:text-6xl items-around p-2 my-10">
        Car service is essential for maintaining the performance and longevity of your vehicle. 
        <p className="text-sm text-black-600 font-semibold "> - Fast and reliable Car care your car our priority</p>
        
       </div>
       
       <img className="m-20 rounded-[10px] " width="300px" height="300px" src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-2.jpg"/>
       </div>
       </div>
      </section>
      </div>
        </>
    
    
    );
    }