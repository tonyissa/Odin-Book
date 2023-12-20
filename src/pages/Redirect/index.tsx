import { useLocation } from 'react-router-dom';
import Feed from '../Feed/index';
import Login from '../Login/index';
import { useState, useEffect } from 'react';

export default function Redirect() {
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState();
    const location = useLocation();

    useEffect(() => {
        async function checkAuth() {
            try {
                const response = await fetch('http://localhost:3000/api/auth', {
                    mode: 'cors',
                    credentials: 'include'
                })
                const parsed = await response.json();
                if (response.status === 200) {
                    setUser(parsed);
                }
            } catch (err) {
                console.log(err)
            }
        }

        if (location.state?.user) {
            setUser(location.state.user);
        } else {
            checkAuth();
        }
        setRedirect(true);
        
    }, [location.state])

    if (redirect) {
        return user ? <Feed /> : <Login />;
    }
}