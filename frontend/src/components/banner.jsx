<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import rightImage from "../../public/1.png";

function Banner() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    navigate('/course'); // Navigate to the /courses route
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
      <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
          <h1 className='text-4xl font-bold text-red-600'>आपले स्वागत आहे!</h1> {/* Welcome message */}
          <p className='text-lg text-yellow-500'> {/* Text color set to yellow */}
            <span className='font-semibold'>डॉ. अशोक कौतिक कोळी</span> यांच्या कथा वाचन अनुभवावर आधारित, आपण जीवनातील विविध पैलूंचा सामना करणार आहात. 
            त्यांच्या लेखनामुळे मानवी भावना, समाज आणि संस्कृती यांचे गहन चिंतन समजून घेण्याची संधी मिळते.
          </p>
          <p className='text-base text-yellow-500'> {/* Text color set to yellow */}
            वाचनाची या अद्भुत प्रवासात सामील व्हा, जिथे आपल्या हृदयाला स्पर्श करणाऱ्या कथा आणि प्रेरणादायक विचारांची ओळख होईल.
          </p>
          <div className=''>
            <button onClick={handleClick} className="btn mt-6 btn-secondary">
              आमच्या कथेची अधिक माहिती
            </button>
          </div>
        </div>
      </div>
      <div className='order-1 w-full md:w-1/2 lg:ml-12 lg:mt-12'>
        <img src={rightImage} className='w-full h-auto' alt="डॉ. अशोक कौतिक कोळी" />
      </div>
    </div>
  );
}

export default Banner;
=======
import React from 'react'
import rightiamge from"../../public/133.jpg"

function banner() {
  return (
<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
 <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 '>
 <div className='space-y-12'>
 <h1 className='text-4xl font-bold'>Hello,welcome here to learn <span className='text-pink-500'>something new everyday!!</span></h1>
 <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi laudantium et necessitatibus deserunt aperiam quam, quisquam quos, illo sint voluptatem tempore dolorem saepe iste voluptates. Eum explicabo nisi aspernatur.</p>
 <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
 </div>
 <div className=''>
 <button className="btn mt-6 btn-secondary">Secondary</button>
 </div>
  
 
 </div>
 <div className='order-1 w-full md:w-1/2 lg:ml-12 lg:mt-12'>
  <img src={rightiamge} className='w-92 h-92' alt="404" />
</div>

</div>
  )
}

export default banner
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
