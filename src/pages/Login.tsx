import { useState } from 'react';
import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
      });

    const handleChange=(e: any)=>{
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    }
    
    const handleSubmit = (event: any) => {
        event.preventDefault(); 

        if(formData.email == '' || formData.password == '' ||formData.username == '' ){
            return false;   
        }
    
        // Log the form data to the console
        console.log('Email:', formData.email);
        console.log('Username:', formData.username);
        console.log('Password:', formData.password);
      };
    
  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
        <form className="space-y-4">
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
              placeholder="Username"
              className="w-full border-none outline-none"
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-none outline-none"
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

