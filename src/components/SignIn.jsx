import React, { useState } from 'react';
import { login } from '../api/authApi';
import logo from './../assets/logo2.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setApiError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.match(/\S+@\S+\.\S+/)) newErrors.email = 'Invalid email';
    if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const data = await login(form);
      localStorage.setItem('token', data.token);
      navigate('/reservation');
    } catch (err) {
      setApiError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-[90%] sm:max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-6">
        <div className="text-center">
          <img src={logo} alt="Logo" className="h-16 sm:h-20 w-auto object-contain mx-auto" />
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Sign in
          </h1>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              className={`mt-1 p-2 pl-4 w-full rounded-md shadow-sm border ${
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                className={`mt-1 p-2 pl-4 pr-10 w-full rounded-md shadow-sm border ${
                  errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                placeholder="••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-300"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
          </div>

          {apiError && <p className="text-sm text-red-600 text-center">{apiError}</p>}

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
