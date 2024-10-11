import React from 'react';
import { useForm } from 'react-hook-form';

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Set background color */}
      <div className="w-full max-w-lg p-8 bg-white shadow-xl rounded-lg"> {/* Use shadow-xl for a deeper shadow */}
=======
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <label className="flex flex-col">
            <input
              type="text"
<<<<<<< HEAD
              className="input input-bordered mt-1 focus:outline-none focus:ring focus:ring-blue-300" // Added focus styles
=======
              className="input input-bordered mt-1"
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
              placeholder="Your name"
              {...register('name', { required: 'Name is required' })}
            />
          </label>
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}

          {/* Email */}
<<<<<<< HEAD
          <label className="flex flex-col">
            <input
              type="text"
              className="input input-bordered mt-1 focus:outline-none focus:ring focus:ring-blue-300" // Added focus styles
=======
          <label className=" flex flex-col">
            <input
              type="text"
              className="input input-bordered mt-1"
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
              placeholder="Your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
            />
          </label>
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}

          {/* Message */}
<<<<<<< HEAD
          <label className="flex flex-col">
            <textarea
              className="textarea textarea-bordered mt-1 focus:outline-none focus:ring focus:ring-blue-300" // Added focus styles
=======
          <label className=" flex flex-col">
            <textarea
              className="textarea textarea-bordered mt-1"
>>>>>>> a7cea7e906f9d0493739c442fcd8555b17dfb9ed
              placeholder="Your message"
              rows="4"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
          </label>
          {errors.message && <span className="text-red-500">{errors.message.message}</span>}

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
