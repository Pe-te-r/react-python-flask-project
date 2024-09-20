import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for the toast context
interface ToastContextProps {
  showToast: (message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

// Create the Toast context
const ToastContext = createContext<ToastContextProps | undefined>(undefined);

// Provider component for the Toast context
export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; type: 'info' | 'success' | 'warning' | 'error' } | null>(null);

  // Function to show the toast
  const showToast = (message: string, type: 'info' | 'success' | 'warning' | 'error'): void => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000); // Hide toast after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className="toast toast-top toast-end p-4">
          <div className={`alert ${getToastClass(toast.type)} shadow-lg rounded-lg`}>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

// Function to get toast class based on type
const getToastClass = (type: 'info' | 'success' | 'warning' | 'error'): string => {
  switch (type) {
    case 'success':
      return 'alert-success bg-green-100 text-green-800';
    case 'warning':
      return 'alert-warning bg-yellow-100 text-yellow-800';
    case 'error':
      return 'alert-error bg-red-100 text-red-800';
    case 'info':
    default:
      return 'alert-info bg-blue-100 text-blue-800';
  }
};

// Custom hook to use the toast context
export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
