import React from 'react'
import Navbar from '../navbar'
import Course from '../course'
import Footer from '../footer'

function courses() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Course />
      </div>
      <Footer />

    </div>
  )
}

export default courses
