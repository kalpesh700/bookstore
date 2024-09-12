import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // Function to open the modal
  const openModal = () => {
    document.getElementById('my_modal_3').showModal();
  };

  // Function to close the modal
  const closeModal = () => {
    document.getElementById('my_modal_3').close();
  };

  return (
    <div>
      
     

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Close button */}
          <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

          <h3 className="font-bold text-lg">Login</h3>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="mt-8 space-y-4">
            {/* Email */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                {...register('Email', { required: 'Email is required' })}
              />
            </label>
            {errors.Email && <span className="text-red-500">{errors.Email.message}</span>}

            {/* Password */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
              />
            </label>
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}

            <div>
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
              <p>
                Not Registered?{' '}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
