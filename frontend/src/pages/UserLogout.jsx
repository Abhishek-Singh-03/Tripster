import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/login'); 
                }
            } catch (error) {
                console.error('Logout failed:', error);
            }
        };

        logout(); // Call the logout function when the component mounts
    }, [token, navigate]); // This will run when the component mounts

    return <div>Logging out...</div>; 
};

export default UserLogout;
