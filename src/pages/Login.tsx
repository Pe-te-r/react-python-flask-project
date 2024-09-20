// import { useEffect, useState } from 'react';
// import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa';
// import { useLoginMutation } from '../api/auth';

// const Login = () => {
//   // const[sendData,{isSuccess}] = useLoginMutation()
//   const [login, { isSuccess,data,isError ,status,error}] = useLoginMutation();

//     const [formData, setFormData] = useState({
//         email: '',
//         username: '',
//         password: ''
//       });

//     const handleChange=(e: any)=>{
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value
//         }));
//     }
    
//     const handleSubmit = async(event: any) => {
//         event.preventDefault(); 

//         if(formData.email == '' || formData.password == '' ||formData.username == '' ){
//             return false;   
//         }

//         try {
//            await login({email:formData.email,password:formData.password}).unwrap()
//           // console.log(response)
          
//         } catch (error: any) {
//           if(error?.status === 401){
//             console.log('Invalid credentials');
//           }
//         // console.log('Error:', error);
          
//         }
        
//         // Log the form data to the console
//         // console.log('Email:', formData.email);
//         // console.log('Username:', formData.username);
//         // console.log('Password:', formData.password);
//       };
    
//       useEffect(()=>{
//         if(isSuccess && data){
//           console.log()

//             console.log('here i');
            
//             console.log('Login Successful');
//         } 
//         if(isError && data){
//           // console.log('Error:', data);
//           // console.log('Login Failed');
//           // Handle the error here
//         }
//       },[isSuccess,isError])
//   return (
//     <div className="flex items-center justify-center min-h-screen  bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
//         <form className="space-y-4">
//           <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
//             <FaEnvelope className="text-gray-400 mr-2" />
//             <input
//               type="email"
//               name='email'
//               placeholder="Email"
//               className="w-full border-none outline-none"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
//             <FaUser className="text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full border-none outline-none"
//               name='username'
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
//             <FaLock className="text-gray-400 mr-2" />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full border-none outline-none"
//               name='password'
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useEffect, useState } from 'react';
import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa';
import { useLoginMutation } from '../api/auth';

const Login = () => {
  const [login, { isSuccess, data, isLoading, isError, error }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');

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
      setMessage('All fields are required.');
      return;
    }

    try {
      const response =await login({
        email: formData.email,
        password: formData.password
      }).unwrap();

      console.log('Login Successful:', response);
      setMessage('Login successful!');
    } catch (error: any) {
      // Error handling based on status code
      if (error?.status === 401) {
        setMessage('Unauthorized: Incorrect email or password.');
      } else if (error?.status === 404) {
        setMessage('Not Found: The resource could not be found.');
      } else {
        setMessage('An unexpected error occurred.');
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
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </form>
        <div className="toast toast-top toast-end">
  <div className="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  </div>
      </div>
    </div>
  );
};

export default Login;
