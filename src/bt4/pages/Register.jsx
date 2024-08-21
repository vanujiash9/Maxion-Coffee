import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicTextField from '../pages/textField';

function Register() {
  const navigate = useNavigate(); 
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    validateField(name, value); // Validate field on change
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name, formValues[name]); // Validate field on blur
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'username':
        if (!value) {
          error = 'Tên người dùng là bắt buộc';
        } else if (value.length < 4) {
          error = 'Tên người dùng phải có ít nhất 4 kí tự';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Email là bắt buộc';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email không hợp lệ';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Cần phải cập nhật mật khẩu';
        } else if (value.length < 8) {
          error = 'Mật khẩu phải có ít nhất 8 kí tự';
        } else if (!/[A-Z]/.test(value)) {
          error = 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          error = 'Cần phải xác nhận mật khẩu';
        } else if (value !== formValues.password) {
          error = 'Mật khẩu không khớp';
        }
        break;
      default:
        break;
    }
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    Object.keys(formValues).forEach((field) => {
      validateField(field, formValues[field]);
      if (formErrors[field]) {
        isValid = false;
      }
    });
    // Ensure all fields are validated
    if (!formValues.password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Cần phải cập nhật mật khẩu',
      }));
      isValid = false;
    }
    if (!formValues.confirmPassword) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Cần phải xác nhận mật khẩu',
      }));
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formValues);
      alert('Đăng ký thành công');
      navigate('/bt4/productList');
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <a href="/bt4">
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
              />
            </svg>
          </div>
          Maxion Coffee
        </div>
      </a>
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="mx-5 border border-gray-300 shadow-lg rounded-lg bg-white p-6">
          <div className="flex flex-col mb-4">
            <h3 className="text-xl font-semibold leading-6 tracking-tight text-gray-900">Register</h3>
            <p className="mt-1.5 text-sm font-medium text-gray-600">Welcome! Vui lòng điền thông tin của bạn vào dưới đây để đăng ký.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <BasicTextField
              label="Username"
              type="text"
              value={formValues.username}
              onChange={handleChange}
              onBlur={handleBlur}
              name="username"
              error={!!formErrors.username}
              helperText={formErrors.username}
              className="w-full"
            />
            <BasicTextField
              label="Email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              error={!!formErrors.email}
              helperText={formErrors.email}
              className="w-full"
            />
            <div className="relative">
              <BasicTextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={formValues.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                error={!!formErrors.password}
                helperText={formErrors.password}
                className="w-full"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="relative mt-4">
              <BasicTextField
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                value={formValues.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                name="confirmPassword"
                error={!!formErrors.confirmPassword}
                helperText={formErrors.confirmPassword}
                className="w-full"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  className="outline-none focus:outline focus:outline-blue-300"
                />
                <span className="text-xs">Remember me</span>
              </label>
              <a className="text-sm font-medium text-blue-500 underline" href="/forgot-password">Forgot password?</a>
            </div>
            <div className="mt-4 flex items-center justify-end gap-x-2">
              <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-600 hover:ring hover:ring-white h-10 px-4 py-2 duration-200" href="/bt4/login">Log in</a>
              <button className="font-semibold hover:bg-gray-300 hover:text-gray-900 hover:ring hover:ring-gray-500 transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-white h-10 px-4 py-2" type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
