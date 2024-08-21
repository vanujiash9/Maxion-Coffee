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
      alert('Đăng nhập thành công');
    },
  });

  console.log("Form values:", formik.values);
  console.log("Form errors:", formik.errors);
  console.log("Form touched:", formik.touched);

  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <a href="/bt4">
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
            </svg>
          </div>
          Maxion Coffee
        </div>
      </a>
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
        <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
            <p className="mt-1.5 text-sm font-medium text-white/50">Welcome back, enter your credentials to continue.</p>
          </div>
          <div className="p-6 pt-0">
            <form onSubmit={formik.handleSubmit}>
              <BasicTextField
                label="Username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                name="username"
                required={true}
                helperText={formik.touched.username && formik.errors.username}
                error={formik.errors.username && formik.touched.username ? formik.errors.username : undefined}
              />
              <BasicTextField
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                required={true}
                helperText={formik.touched.password && formik.errors.password}
                error={formik.errors.password && formik.touched.password ? formik.errors.password : undefined}
              />
              <div className="mt-4 flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    className="outline-none focus:outline focus:outline-sky-300"
                    checked={formik.values.remember}
                    onChange={formik.handleChange}
                  />
                  <span className="text-xs">Remember me</span>
                </label>
                <a className="text-sm font-medium text-foreground underline" href="/forgot-password">Forgot password?</a>
              </div>
              <div className="mt-4 flex items-center justify-end gap-x-2">
                <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200" href="/bt4/register">Register</a>
                <button className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2" type="submit">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
