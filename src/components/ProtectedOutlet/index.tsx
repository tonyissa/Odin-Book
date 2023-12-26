import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Login from '../../pages/Login/index';
import { useState, useEffect } from 'react';
import { UserContext } from '../UserContext';
import Header from '../Header';
import { User } from '../../types/types';

export default function ProtectedOutlet() {
    const location = useLocation();
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    function logoutWithMessage() {
        setUser(null);
        navigate('.', { state: { status: 'Please log back in' } });
    }

    function logout() {
        setUser(null);
        navigate('.');
    }

    function addMethodsToUser(user: User) {
        user.logoutWithMessage = logoutWithMessage
        user.logout = logout
    }

    useEffect(() => {
        async function checkAuth() {
            try {
                const response = await fetch('http://localhost:3000/api/auth', {
                    mode: 'cors',
                    credentials: 'include'
                })
                if (response.status === 200) {
                    const parsedUser = await response.json();
                    addMethodsToUser(parsedUser)
                    setUser(parsedUser);
                }
            } catch (err) {
                console.log(err)
            }
        }

        if (location.state?.user) {
            addMethodsToUser(location.state.user)
            setUser(location.state.user);
        } else if (location.state?.status) {
            // do nothing
        } else {
            checkAuth();
        }
        setRedirect(true);
        
    }, [location.state])

    if (redirect) {
        return user ? 
            <UserContext.Provider value={user}>
                <Header />
                <Outlet />
            </UserContext.Provider>
            : 
            <Login message={location.state?.status} />;
    }
}