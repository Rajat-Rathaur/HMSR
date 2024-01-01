import { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useAuthenticate = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;

    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const role = sessionStorage.getItem('role');
        if (!role && pathname !== '/') {
            // User is not authenticated, clear session and navigate to login
            sessionStorage.clear();
            setIsUser(false);
            setIsAdmin(false);
            navigate('/login');
        } else if (role) {
            // User is authenticated, update state based on the role
            setIsUser(role === 'user');
            setIsAdmin(role === 'admin');
        }

    }, [pathname, navigate]);

    useLayoutEffect(() => {
        if (pathname === '/login' || pathname === '/') {
            // Clear session and reset state for login page
            sessionStorage.clear();
            setIsUser(false);
            setIsAdmin(false);
        }
    }, [pathname]);

    return { isUser, isAdmin };
};

export default useAuthenticate;
