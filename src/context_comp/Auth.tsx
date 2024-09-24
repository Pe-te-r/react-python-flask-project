import React, { createContext, useContext, useState, ReactNode } from 'react';
// import { useLocalStorage } from './Storage';

// Define the shape of the AuthContext
interface AuthContextProps {
  role: string;
  loginAsAdmin: () => void;
  loginAsUser: () => void;
  logout: () => void;
}

// Create the AuthContext with default values
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// AuthProvider component to provide the context to the app
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // const {getData}= useLocalStorage()

  const [role, setRole] = useState<string>(''); // Default role is empty

  // Simulate login as Admin
  const loginAsAdmin = () => {
    setRole('admin');
  };

  // Simulate login as User
  const loginAsUser = () => {
    setRole('user');
  };

  // Simulate logout
  const logout = () => {
    setRole('');
  };

  return (
    <AuthContext.Provider value={{ role, loginAsAdmin, loginAsUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
