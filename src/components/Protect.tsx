import React from 'react';
import { useAuth } from '../context_comp/Auth'; // Import the custom hook
import { useLocalStorage } from '../context_comp/Storage';

interface ProtectedRouteProps {
  roleRequired: string;
  children: React.ReactNode;
}

// ProtectedRoute component to restrict access based on roles
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roleRequired, children }) => {
  const { role ,loginAsAdmin,loginAsUser} = useAuth();
  const {getData}=useLocalStorage()

  const token = getData('token')
  if (role == '' && token){
    const role = getData('role')
    console.log(role)
    if(role){
      if (role == 'ADMIN'){
        loginAsAdmin()
      }else if(role == 'USER'){
        loginAsUser()
      }
    }
  }
  if (role !== roleRequired) {
    return <h1>You do not have access to this page</h1>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
