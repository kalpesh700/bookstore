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
