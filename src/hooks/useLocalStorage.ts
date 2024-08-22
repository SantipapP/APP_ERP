// Import useState from React for managing state
import { useState } from 'react';

// Define interface for User data structure
interface UserData {
  EMP_ID: string,
  EMP_Password: string,
  EMP_FirstName: string,
  EMP_LastName:string,
  EMP_DateOfBirth: string,
  EMP_Gender: string,
  EMP_HireDate: string,
  EMP_Position: string,
  EMP_DepartmentID: string,
  EMP_Salary: string,
  EMP_Email: string,
  EMP_Phone: string,
  EMP_Address: string,
  EMP_City:string,
  EMP_State:string,
  EMP_Country:string
}

// Custom hook useLocalStorage for storing data in localStorage
const useLocalStorage = (key: string, initialValue: UserData[]) => {
  // Initialize state storedValue with localStorage data or initialValue
  const [storedValue, setStoredValue] = useState<UserData[]>(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Parse stored JSON or return initialValue if parsing fails or no data exists
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Define setValue function to update state and store data in localStorage
  const setValue = (value: UserData[]) => {
    try {
      // Allow value to be a function to update based on previous state
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Update state
      setStoredValue(valueToStore);
      // Store in localStorage as JSON
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  // Return storedValue state and setValue function as a tuple
  return [storedValue, setValue] as const;
};

// Export useLocalStorage hook for use in other components
export default useLocalStorage;
