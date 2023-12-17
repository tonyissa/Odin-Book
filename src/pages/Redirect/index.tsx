import Feed from '../Feed/index';
import Login from '../Login/index';

export default function Redirect() {
    let user;

    if (user) {
        return <Feed />
    } 

    return <Login />
}