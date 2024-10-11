import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { title_en } = useParams(); // Get the title from URL parameters
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:1616/book/detail/${title_en}`); // Adjust the API endpoint
        if (!response.ok) {
          throw new Error('Book not found');
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBook();
  }, [title_en]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!book) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="flex">
          <div className="w-1/2">
            <img
              alt={`Book cover of ${book.title}`}
              className="w-full h-full object-cover"
              src={book.image} // Assuming `book.image` contains the image URL
            />
          </div>
          <div className="w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
              <div className="text-sm text-gray-600 mb-2">
                <span>Language: <span className="font-bold">{book.language}</span></span><br />
                <span>Author: <a className="text-purple-600 hover:underline" href="#">{book.authors}</a></span><br />
                <span>Category: <a className="text-purple-600 hover:underline" href="#">{book.category}</a></span><br />
                <span>Publication: <a className="text-purple-600 hover:underline" href="#">{book.publication}</a></span><br />
                <span>Pages: {book.pages}</span><br />
                <span>Weight: {book.weight} Gm</span><br />
                <span>Binding: {book.binding}</span><br />
                <span>ISBN13: {book.isbn}</span>
              </div>
            </div>
            
            <div className="flex items-center mb-2">
              <div className="text-sm text-gray-600">
                <span>0 Reviews</span> | <a className="hover:underline" href="#">Write a review</a> | <a className="hover:underline" href="#">Tell a friend</a>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                <i className="fas fa-share"></i> Share
              </button>
            </div>
            
            <div className="text-orange-600 text-lg font-bold mb-2">
              <i className="fas fa-check"></i> Available Immediately
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <a className="hover:underline" href="#">Add to My Wishlist <i className="fas fa-heart"></i></a>
            </div>
            
            <div className="text-lg font-bold mb-2">
              Hard Copy Price: <span className="text-green-600">25% OFF</span>
            </div>
            <div className="text-2xl font-bold text-red-600 mb-2">
              ₹ {book.price} <span className="line-through text-gray-600">₹ {book.originalPrice}</span> / $ {book.priceInUSD}
            </div>
            <div className="text-sm text-red-600 mb-4">
              Shipping charges will be applicable for this book.<br />
              For International orders, shipment charges are at actual.
            </div>
            
            <div className="flex items-center">
              <button className="bg-orange-500 text-white px-4 py-2 rounded mr-2">BUY PRINT BOOK</button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
