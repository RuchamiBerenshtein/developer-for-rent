import React,{useState} from 'react';
import userIcon from '../imgs/icons/user-icon.svg';
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios').default;
const url = new URL('https://meetings-test.herokuapp.com/user/signin')


const signIn=(email,password) =>{
    if(email === '' || password === ''){

    }
    else{
         axios.post(url, {
           username:email,
           password:password
          })
          .then((response) =>{
              return response.data;
          })
          .then((data) =>{
            if(data.id){
                window.location.href="http://localhost:3000/Manager";
            }
        })
          .catch(function (error) {
            return error;
          });
    }
    console.log('signed in!')
}


const Login = () => {

    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('');

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
                            <input type="email" className="form-control form-input" id="email" placeholder="Enter your Email address" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-input" id="password" placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <input type="button" className="form-control" id="login" value="Login as a manager" onClick={()=>signIn(email,password)}></input>
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