import React from 'react';
import { useAuth } from '../context_comp/Auth'; // Import the custom hook

interface ProtectedRouteProps {
  roleRequired: string;
  children: React.ReactNode;
}

// ProtectedRoute component to restrict access based on roles
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roleRequired, children }) => {
  const { role } = useAuth();

  if (role !== roleRequired) {
    return <h1>You do not have access to this page</h1>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
