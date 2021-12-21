import React from 'react';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div className="login-from" >
            <div>
                <h2>Login Sir</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" ></input>
                    <br/>
                    <input type="password" name="" id="" ></input>
                    <br/>
                    <input type="Submit" value="Submit" />
                </form>
                <p>new to Amazone Website ?? <Link to="/register" >Create Account</Link></p>
                <div>-------------or-------------</div>
                <button 
                className="btn-regular" onClick={handleGoogleLogin} >
                    Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;