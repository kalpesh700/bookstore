<<<<<<< HEAD
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
  <h1 className="mt-8 text-4xl font-bold text-red-600">साहित्याच्या जगात आपले स्वागत आहे!</h1>
  <p className="mt-4 text-base max-w-prose mx-auto">
    <span className="font-semibold">आशोक कोतिनक कोळी</span> यांच्या लेखनामुळे आकारलेल्या आकर्षक कथा शोधा, ज्यांना मानवी भावना, संस्कृती आणि अनुभवांचे गूढ आणि गहन अध्ययन करण्याची अद्भुत क्षमता आहे. त्यांच्या पुस्तकांनी वाचकांना अविस्मरणीय प्रवासात घेऊन जातात.
  </p>
  <p className="mt-4 text-base max-w-prose mx-auto">
    मुलांसाठी आणि मोठ्यांसाठी दोन्ही प्रकारच्या शीर्षकांसह, <span className="font-semibold">आशोक कोतिनक कोळी</span> मनोरंजन करणार्‍या आणि शिक्षण देणार्‍या कथा समोर आणतात. आमच्या संग्रहाचा शोध घेऊन आपले पुढील आवडते वाचन शोधा आणि त्यांच्या साहित्याच्या मंत्रमुग्ध करणाऱ्या जगात समाविष्ट व्हा!
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
=======
import React from 'react'
import List from "../../public/list.json";
import Cards from './cards';

function course() {
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
    List.map((item)=>(
      <Cards key={item.id} item={item} />
    ))
  }
</div>

  </div>
</>
  )
}

export default course
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
