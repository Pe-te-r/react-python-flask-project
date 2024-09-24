import React, { useEffect } from 'react';
import { useAuth } from '../context_comp/Auth'; // Import the custom hook
import { useLocalStorage } from '../context_comp/Storage';

interface ProtectedRouteProps {
  roleRequired: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roleRequired, children }) => {
  const { role, loginAsAdmin, loginAsUser } = useAuth();
  const { getData } = useLocalStorage();
  
  const token = getData('token');

  // Move state updates to useEffect to avoid modifying state during render
  useEffect(() => {
    if (role === '' && token) {
      const savedRole = getData('role'); // Fetch the saved role from localStorage
      if (savedRole) {
        if (savedRole === 'ADMIN') {
          loginAsAdmin(); // Set the role to 'admin'
        } else if (savedRole === 'USER') {
          loginAsUser(); // Set the role to 'user'
        }
      }
    }
  }, [role, token, getData, loginAsAdmin, loginAsUser]); // Dependencies to ensure effect runs when these values change

  // If the role doesn't match the required role, restrict access
  if (role !== roleRequired) {
    return <h1>You do not have access to this page</h1>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
