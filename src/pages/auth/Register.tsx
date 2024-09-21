import React, {  useState } from 'react';
import { FaEnvelope, FaHome, FaLock, FaPhone, FaUser, FaUserCircle } from 'react-icons/fa';
import { useRegisterMutation } from '../../api/auth';
import { useToast } from '../../Toast/Toast';
import { useNavigate } from 'react-router-dom';

interface RegisterRequest {
  name: string;
  contact: string;
  address: string;
  email: string;
  username: string;
  password: string;
}

const Register: React.FC = () => {
    const [registrApi,{isLoading}] = useRegisterMutation()
    const navigate = useNavigate()
    const {showToast} = useToast()
  const [formData, setFormData] = useState<RegisterRequest>({
    name: '',
    contact: '',
    address: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try{
        const response = await registrApi(formData).unwrap()
        if (response?.message === 'success'){
            showToast('Registration successful!','success',10000)
            navigate('/login')
        }
    }catch(error: any){
        if (error?.status){
            if(error.status === 409){
                // console.log('Email already exists')
                console.log(error['data'].message)
                showToast(error['data'].message,'warning')
            }
        }
    }
    // console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:border-blue-500">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border-none outline-none"
              required
            />
          </div>
  
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:border-blue-500">
            <FaPhone className="text-gray-400 mr-2" />
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact"
              className="w-full border-none outline-none"
              required
            />
          </div>
  
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:border-blue-500">
            <FaHome className="text-gray-400 mr-2" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full border-none outline-none"
              required
            />
          </div>
  
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:border-blue-500">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border-none outline-none"
              required
            />
          </div>
  
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:border-blue-500">
            <FaUserCircle className="text-gray-400 mr-2" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full border-none outline-none"
              required
            />
          </div>
  
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:border-blue-500">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border-none outline-none"
              required
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
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

export default Register;
