import React,{  useState } from 'react';
import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa';
import { useLoginMutation } from '../../api/auth';
import { useToast } from '../../Toast/Toast';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../context_comp/Storage';

const Login = () => {
  const {showToast} = useToast()
  const navigate = useNavigate()
  const {setData}= useLocalStorage()
  const [code, setCode] = useState<Boolean>(false);

  const [login, { isLoading}] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: '',
    code: '',
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

    if (formData.email === '' || formData.password === '' ) {
      showToast('All fields are required.','warning');
      return;
    }

    try {
      let response: any;
      if(code){
        response =await login({
          email: formData.email,
          password: formData.password,
          code: formData.code 
        }).unwrap();
      }else{
        response =await login({
          email: formData.email,
          password: formData.password
        }).unwrap();
      }

      const user_details=response.user;
      for (let detail in user_details){
        setData(detail,user_details[detail]);
      }
      showToast('Login successful!','success');
      setData('token',response?.token)
      navigate('/')

    } catch (error: any) {
      // Error handling based on status code
      if (error?.status === 401) {
        showToast(error['data'].error,'error');
        if (error['data'].error.startsWith('Email')){
          setCode(true);
          showToast('Enter the verification code sent to your email.','info');
        }
      } else if (error?.status === 404) {
        showToast(error['data'].error,'error');
      } else {
        showToast(error['data'].error,'info');
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
          {code &&
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name='code'
              placeholder="code"
              className="w-full border-none outline-none"
              value={formData.code}
              onChange={handleChange}
              required
              />
          </div>
            }
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
