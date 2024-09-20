import {  useState } from 'react';
import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa';
import { useLoginMutation } from '../api/auth';
import { useToast } from '../Toast/Toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {showToast} = useToast()
  const navigate = useNavigate()

  const [login, { isLoading}] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.email === '' || formData.password === '' || formData.username === '') {
      showToast('All fields are required.','warning');
      return;
    }

    try {
      const response =await login({
        email: formData.email,
        password: formData.password
      }).unwrap();

      console.log('Login Successful:', response?.access_token); 
      showToast('Login successful!','success');
      navigate('/')
    } catch (error: any) {
      // Error handling based on status code
      if (error?.status === 401) {
        showToast('Incorrect password.','error');
      } else if (error?.status === 404) {
        showToast('Incorrect email address.','error');
      } else {
        showToast('An unexpected error occurred.','info');
      }
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full flex justify-center flex-col">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              name='email'
              placeholder="Email"
              className="w-full border-none outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name='username'
              placeholder="Username"
              className="w-full border-none outline-none"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              name='password'
              placeholder="Password"
              className="w-full border-none outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
      {isLoading &&
   <div className='w-full h-20  flex justify-center items-center'>
   <span className="loading loading-spinner loading-sm"></span>
 </div>
 
      }
        </form>
      </div>
    </div>
  );
};

export default Login;
