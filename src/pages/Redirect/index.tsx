import { useLocation } from 'react-router-dom';
import Feed from '../Feed/index';
import Login from '../Login/index';
import { useState, useEffect } from 'react';

export default function Redirect() {
    const [loading, setLoading] = useState(true);
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
                    setUser(parsed.user);
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
        setLoading(false);
    }, [location.state])

    if (!loading) {
        return user ? <Feed /> : <Login />;
    }
}