import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import BasicTextField from '../pages/textField';

function Login() {
  const validationSchema = yup.object({
    username: yup.string().required("Please input username"),
    password: yup.string().required("Please input password").min(6, "Password must be at least 6 characters long"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      alert('Login successful');
    },
  });

  return (
    <div className="bg-gray-100 text-gray-900 flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <a href="/bt4">
        <div className="text-gray-900 font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
            </svg>
          </div>
          Maxion Coffee
        </div>
      </a>
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="mx-5 border border-gray-300 shadow-lg rounded-lg bg-white p-6">
          <div className="flex flex-col mb-4">
            <h3 className="text-xl font-semibold leading-6 tracking-tight text-gray-900">Login</h3>
            <p className="mt-1.5 text-sm font-medium text-gray-600">Welcome back, enter your credentials to continue.</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <BasicTextField
              label="Username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              name="username"
              required
              helperText={formik.touched.username && formik.errors.username}
              error={formik.errors.username && formik.touched.username ? formik.errors.username : undefined}
              className="w-full" // Ensures the input is full width
            />
            <BasicTextField
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              required
              helperText={formik.touched.password && formik.errors.password}
              error={formik.errors.password && formik.touched.password ? formik.errors.password : undefined}
              className="w-full" // Ensures the input is full width
            />
            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  className="outline-none focus:outline focus:outline-blue-300"
                  checked={formik.values.remember}
                  onChange={formik.handleChange}
                />
                <span className="text-xs">Remember me</span>
              </label>
              <a className="text-sm font-medium text-blue-500 underline" href="/forgot-password">Forgot password?</a>
            </div>
            <div className="mt-4 flex items-center justify-end gap-x-2">
              <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-600 hover:ring hover:ring-white h-10 px-4 py-2 duration-200" href="/bt4/register">Register</a>
              <button className="font-semibold hover:bg-gray-300 hover:text-gray-900 hover:ring hover:ring-gray-500 transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-white h-10 px-4 py-2" type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
