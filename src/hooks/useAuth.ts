import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export const useAuth = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            try {
                const userData = JSON.parse(storedData);
                if (userData && Array.isArray(userData) && userData.length > 0) {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error('Error parsing userData from Local Storage:', error);
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Login!',
            });
            navigate('/'); // ถ้าไม่มีข้อมูลใน Local Storage ให้ navigate ไปยังหน้า Login
        }
    }, [navigate]);

    return { isLoggedIn };
};
