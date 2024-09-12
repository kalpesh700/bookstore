import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Route in addition to Routes
import Home from './home/Home';
import Courses from './components/courses/courses';
import Signup from './components/Signup';
import Login from './components/login';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Contact" element={<Contact />} />

     
      </Routes>
    </>
  );
}

export default App;
