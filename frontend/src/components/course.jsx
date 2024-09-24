import React, { useEffect, useState } from 'react';
import Cards from './cards';
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:1616/book");
        console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className="text-center">
          <h1 className="mt-8 text-4xl font-bold">We are delighted to see you</h1>
          <p className="mt-4 text-base max-w-prose mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, quasi saepe. Recusandae eos aperiam corporis, repellendus eligendi eius quo architecto a illo numquam voluptate necessitatibus aut ex minima nihil rem!
          </p>
        </div>
        <div className='mt-12 grid grid-cols-1  md:grid-cols-3'>
          {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
