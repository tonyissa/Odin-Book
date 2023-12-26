import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Login from '../../pages/Login/index';
import { useState, useEffect } from 'react';
import { UserContext } from '../UserContext';
import Header from '../Header';

export default function ProtectedOutlet() {
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    function logoutWithMessage() {
        setUser(null);
        navigate('.', { state: { status: 'Please log back in' } });
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
                    parsedUser.logoutWithMessage = logoutWithMessage;
                    setUser(parsedUser);
                }
            } catch (err) {
                console.log(err)
            }
        }

        if (location.state?.user) {
            location.state.user.logoutWithMessage = logoutWithMessage;
            setUser(location.state.user);
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