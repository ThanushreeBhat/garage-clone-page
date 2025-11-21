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
       
       <div className='bg-white flex flex-col w-[400px] p-10 md:w-[1000px] h-fit md:h-[130px] absolute bottom-[-320px] rounded-[30px] md:bottom-[-40px] md:rounded-md shadow-lg md:flex md:flex-row items-center justify-evenly'>
           <div className='flex flex-col'> <div className='font-extrabold text-4xl'>600+ </div><p> Team member</p></div>
            <div>|</div><div className='flex flex-col'><div className='font-extrabold text-4xl'>2K+ </div><p>Service Complete</p></div>
            <div>|</div><div className='flex flex-col'><div className='font-extrabold text-4xl'>53+ </div><p>Winning award</p></div>
            <div>|</div><div className='flex flex-col'><div className='font-extrabold text-4xl'>3K+ </div><p>Client Review</p></div>
        </div>
        </div>
        <br/>
        <section className="bg-white py-16 px-6 text-center flex flex-col  items-center mt-[270px] md:h-[600px] md:mx-[110px]  md:mt-[150px] md:my-[30px] rounded-[80px]">
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
        <div className="border rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-black group">
          <div className="flex justify-center items-center mb-5">
            <div className="w-20 h-20 rounded-full flex justify-center items-center text-4xl bg-gradient-to-r from-red-600 to-blue-900 text-white">
              ⚙️
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">
            Transformation Advising
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
            Car service is essential for maintaining the performance and
            longevity of your vehicle. From oil changes Car service
          </p>
        </div>
          <div className="border rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-black group">
          <div className="flex justify-center items-center mb-5">
            <div className="w-20 h-20 rounded-full flex justify-center items-center text-4xl bg-gradient-to-r from-red-600 to-blue-900 text-white">
              🛞
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">
            Easy Drive Maintenance
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
            Car service is essential for maintaining the performance and
            longevity of your vehicle. From oil changes Car service
          </p>
        </div>

        
        <div className="border rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-black group">
          <div className="flex justify-center items-center mb-5">
            <div className="w-20 h-20 rounded-full flex justify-center items-center text-4xl bg-gradient-to-r from-red-600 to-blue-900 text-white">
              🧰
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">
            Elite Auto Services
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
            Car service is essential for maintaining the performance and
            longevity of your vehicle. From oil changes Car service
          </p>
        </div>
        </div>
      </section>
      <section className=" py-16 px-6 mx-auto text-center flex flex-col items-center md:h-[600px] md:mx-[110px] mt-[30px] my-[30px] rounded-[80px]">
      {/* About us Section */}
      <div className="flex flex-col  md:flex-row md:w-full ">
        <div className="mb-12">
        <p className="text-sm text-red-600 font-semibold justify-start   ">
           ABOUT US
        </p>
        
      
       <div className="relative flex flex-col md:flex-row justify-around items-left">
        
       <div className="text-black font-bold text-3xl md:text-5xl items-around p-4 my-10 mb-10 md:w-full">Fast and Reliable Car Care Your Car Our Priority
        <p className='text-[19px] text-black-500 font-normal mt-4 mb-4'>Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes</p>
        <ul className="text-[18px] md:text-[20px] text-black-600 font-semibold list-disc space-y-4 text-align-left items-left justify-start"><li>Fast and reliable Car care your car our priority</li>
        <li>Free with Our Services Care for Your Car</li>
        <li>Top-notch Care for Your Vehicle Your Vehicle</li>
        <li>Expert Service for Your Vehicle Drive Stress</li>
        <li>Your Trusted Car Service Provider Keeping</li></ul>
        </div>
       </div>
       </div>
       <img className="md:m-20 rounded-[15px]  items-right ml-15 mr-10 md:w-[876px] md:h-[400px]"  src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-2.jpg"/>
       </div>
       
       
      </section>
      <div className='hidden md:block bg-black flex flex-col w-[400px] p-6 md:w-[1100px] md:h-[130px]  rounded-[30px]  md:rounded-[30px] shadow-lg md:flex md:flex-row items-center justify-evenly m-10 ml-27'>
            <div ><img className='h-[100] w-[100]' src='https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-4.png'/> </div>
            <div ><img className='h-[100] w-[100]' src='https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-3.png'/> </div>
            <div ><img className='h-[100] w-[100]' src='https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-1.png'/> </div>
            <div ><img className='h-[100] w-[100]' src='https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-2.png'/> </div>
            <div ><img className='h-[100] w-[100]' src='https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-5.png'/> </div>
      </div>
      <div className="w-full h-fit p-22 hidden md:block">
        <div className='w-full h-fit flex flex-col'>
          <h1 className='text-red-600 font-mono'>LATEST GALLERY</h1>
          <div className='text-black flex flex-col justify-between items-center w-full h-[20%] dark:text-white'>
            <div className='flex flex row'>
            <h1 className="w-[60%] h-full font-bold text-4xl">Quality Service, Every Time Drive Safe Stay Secure</h1>
            <h1 className='class="w-[60%] h-full text-[15px] ml-40 mt-12 font-semibold'>Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes</h1>
          </div>
          </div>
        </div>
      
      <div className='w-full h-[80%] flex flex-row items-center justify-evenly mt-5 p-2'>
        <div className='h-full '>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-1.jpg" className='rounded-4xl mb-7 '/>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-4.jpg" className='rounded-4xl mb-7 '/>
        </div>
      <div className='h-full ml-5'>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-2.jpg" className='rounded-4xl mb-7 '/>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-5.jpg" className='rounded-4xl mb-7 '/>
      </div>
      <div className='h-full ml-5'>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-3.jpg" className='rounded-4xl mb-7 '/>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-6.jpg" className='rounded-4xl mb-7'/>
      </div>
      </div>
      </div>
    </div>
    <div className="w-full h-fit py-22 md:p-22 md:mt-[-120px]">
        <div className="w-full h-fit flex flex-col items-center text-black dark:text-white">
          <h1 className="text-red-600 font-mono">Pricing Plan</h1>
          <h1 className="font-bold text-2xl md:text-5xl mt-2">Our Pricing Plan</h1>

          <div className="flex flex-col md:flex-row w-full mt-10 justify-between px-2">
             <div className="md:w-[32%] flex flex-col bg-white md:rounded-4xl p-10 dark:bg-black">
              <h1 className="text-4xl font-bold">Free</h1>
              <p className="mt-2">Car service is essential for maintaining performance and longevity of vehicle. From oil changes</p>

              <div className="flex flex-row border-b-1 border-gray-300 py-5">
                <h1 className="text-4xl font-bold me-2">$0</h1>
                <h1 className="mt-3 text-xl">/month</h1>
              </div>

              <ul className="py-10 list-disc list-inside space-y-1.5 text-xl">
                <li>Mistakes To Avoid</li>
                <li>Winning for Your Startup</li>
                <li>Mistakes To Avoid</li>
                <li>Your Event, Your Memories</li>
              </ul>

              <button className="bg-[#ee4430] p-5 rounded-full font-bold hover:bg-black hover:text-white transition duration-300">GET STARTED NOW</button>
            </div>

            <div className="md:w-[32%] flex flex-col bg-white md:rounded-4xl p-10 dark:bg-black">
              <h1 className="text-4xl font-bold">Pro</h1>
              <p className="mt-2">Car service is essential for maintaining performance and longevity of vehicle. From oil changes</p>

              <div className="flex flex-row border-b-1 border-gray-300 py-5">
                <h1 className="text-4xl font-bold me-2">$50</h1>
                <h1 className="mt-3 text-xl">/month</h1>
              </div>

              <ul className="py-10 list-disc list-inside space-y-1.5 text-xl">
                <li>Mistakes To Avoid</li>
                <li>Winning for Your Startup</li>
                <li>Mistakes To Avoid</li>
                <li>Your Event, Your Memories</li>
              </ul>

              <button className="bg-[#ee4430] p-5 rounded-full font-bold hover:bg-black hover:text-white transition duration-300">GET STARTED NOW</button>
            </div>

            <div className="md:w-[32%] flex flex-col bg-white md:rounded-4xl p-10 dark:bg-black">
              <h1 className="text-4xl font-bold">Ultra</h1>
              <p className="mt-2">Car service is essential for maintaining performance and longevity of vehicle. From oil changes</p>

              <div className="flex flex-row border-b-1 border-gray-300 py-5">
                <h1 className="text-4xl font-bold me-2">$100</h1>
                <h1 className="mt-3 text-xl">/month</h1>
              </div>

              <ul className="py-10 list-disc list-inside space-y-1.5 text-xl">
                <li>Mistakes To Avoid</li>
                <li>Winning for Your Startup</li>
                <li>Mistakes To Avoid</li>
                <li>Your Event, Your Memories</li>
              </ul>

              <button className="bg-[#ee4430] p-5 rounded-full font-bold hover:bg-black hover:text-white transition duration-300">GET STARTED NOW</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit md:p-10 bg-gradient-to-r from-red-700 via-black to-blue-800 rounded-t-4xl">
        <div className="w-full h-fit flex flex-col md:flex-row md:p-20 p-10 space-y-10 justify-between bg-black/50 rounded-4xl">

          <div className="flex-col">
            <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png"></img>
            <div className="flex flex-col mt-10">
              <h1 className="text-xl">Address</h1>
              <h1 className="text-xl font-bold">66 Broklyant,New India</h1>
            </div>
            <div className="flex flex-col mt-5">
              <h1 className="text-xl">Phone Number</h1>
              <h1 className="text-xl font-bold">012 345 678 9101</h1>
            </div>
            <div className="flex flex-col mt-5">
              <h1 className="text-xl">Email</h1>
              <h1 className="text-xl font-bold">crank@mail.com</h1>
            </div>
          </div>

          <div className="flex-col">
            <h1 className="text-3xl font-bold">Pages</h1>
            <ul className="text-xl space-y-3 list-inside mt-5">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex-col">
            <h1 className="text-3xl font-bold">Recent Posts</h1>

            <div className="flex flex-row mt-5">
              <img src="https://themehealer.com/php-template/crank-php/assets/images/blog/footer-widget-post-img-1.jpg"
              className="rounded-2xl"></img>
              <div className="flex flex-col p-5">
                <h1 className="text-l">Oct 32, 2068</h1>
                <h1 className="text-xl font-bold">Expert Guidance the Better Results</h1>
              </div>
            </div>

            <div className="flex flex-row mt-5">
              <img src="https://themehealer.com/php-template/crank-php/assets/images/blog/footer-widget-post-img-2.jpg"
              className="rounded-2xl"></img>
              <div className="flex flex-col p-5">
                <h1 className="text-l">Oct 96, 2099</h1>
                <h1 className="text-xl font-bold">Business Brilliance Starts Here</h1>
              </div>
            </div>
          </div>

          <div className="flex-col">
            <h1 className="text-3xl font-bold">Services</h1>
              <ul className="text-xl space-y-3 list-inside mt-5">
                <li>Customer Experience Evaluation</li>
                <li>Business Brilliance Starts Here</li>
                <li>Growth Catalyst Program</li>
                <li>Strategic Planning Workshops</li>
                <li>Digital Transformation Advising</li>
              </ul>
          </div>
        </div>  

        <div className="flex flex-row border-t-1 border-gray-600 mt-6 pt-6">
          <h1 className="p-5">Copyright ©2024 Crank. All rights reserved.</h1>
        </div>

      </div>

    
        </>
    
    
    );
    }