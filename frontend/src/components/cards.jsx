// Cards.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${item.title_en}`); // Navigate to the detail page using the English title
  };

  return (
    <div className='mt-4 flex justify-center'>
      <div 
        className="card bg-white shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl w-96 cursor-pointer"
        onClick={handleCardClick} // Navigate on card click
      >
        <figure>
          <img
            src={item.image}
            alt={item.title} // Better alt text for accessibility
            className="object-cover h-48 w-full rounded-t-lg" // Responsive image styling
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold text-gray-800">
            {item.title}
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p className="text-gray-600 mt-2">Language: {item.language}</p>
          <div className="card-actions flex justify-between items-center mt-4">
            <div className="badge badge-outline text-gray-800">₹{item.price}</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
