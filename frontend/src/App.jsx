import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Route in addition to Routes
import Home from './home/Home';
import Courses from './components/courses/courses';
import Signup from './components/Signup';
import Login from './components/login';
import Contact from './components/contact/contact';
<<<<<<< HEAD
import Details from './components/details/details';

function App() {
  return (
    <div className="bg-white min-h-screen">
=======

function App() {
  return (
    <>
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
<<<<<<< HEAD
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:title_en" element={<Details />} /> {/* Updated route to match title_en */}
      </Routes>
    </div>
=======
        <Route path="/Contact" element={<Contact />} />

     
      </Routes>
    </>
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
  );
}

export default App;
