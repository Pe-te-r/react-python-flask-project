import React, { createContext, useContext } from 'react';

// Create the interface for the context
interface LocalStorageContextProps {
  setData: (key: string, value: any) => void;
  getData: (key: string) => any;
  deleteData: (key: string) => void;
}

// Create the context with a default value
const LocalStorageContext = createContext<LocalStorageContextProps | undefined>(undefined);

// Provider component that will wrap your app
export const LocalStorageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  // Function to set data in localStorage
  const setData = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value)); // Store data as a JSON string
  };

  // Function to get data from localStorage
  const getData = (key: string): any => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null; // Parse the data back to JS object
  };

  // Function to remove data from localStorage
  const deleteData = (key: string) => {
    localStorage.removeItem(key);
  };

  return (
    <LocalStorageContext.Provider value={{ setData, getData, deleteData }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

// Custom hook to use the localStorage context
export const useLocalStorage = (): LocalStorageContextProps => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error('useLocalStorage must be used within a LocalStorageProvider');
  }
  return context;
};
