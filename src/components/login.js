import React from 'react';
import userIcon from '../imgs/icons/user-icon.svg';
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const signIn=()=>{
    console.log('signed in!')
}

const Login = () => {
    return (
        <div className="body">
            <div className="login-form">
                <div className="login-form-text">
                    <div className="sign-in-title">
                        <img src={userIcon} alt="user-icon" className="icon"></img>
                        <h1>Sign In</h1>
                    </div>
                    <br></br>
                    <div>
                        <div className="form-group">
                            <input type="email" className="form-control form-input" id="email" placeholder="Enter your Email address"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-input" id="password" placeholder="Enter your Password"></input>
                        </div>
                        <div className="form-group">
                            <input type="button" className="form-control" id="login" value="Login as a manager" onClick={signIn}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wellcome-container">
                <h1 className="wellcome-title">Welcome to Program4Rent...</h1>
            </div>
        </div>
    )
}

export default Login;