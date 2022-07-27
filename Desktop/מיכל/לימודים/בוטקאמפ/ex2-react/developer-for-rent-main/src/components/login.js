import userIcon from '../imgs/icons/user-icon.svg';
import '../css/login.css';

const signIn=()=>{

}

const Login = () => {
    return (
        <div className="body">
            <div className="login-form">
                <div className="login-form-text">
                    <div className="sign-in-title">
                        <img src={userIcon}></img>
                        <h1>Sign In</h1>
                    </div>
                    <br></br>
                    <div>
                        <div className="form-group">
                            <input type="email" className="form-control form-input" id="email" placeholder="Enter your Email address"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-input" id="password" placeholder="Enter your password"></input>
                        </div>
                        <div className="form-group">
                            <input type="button" className="form-control" id="login" value="Login as a manager" onClick={this.signIn}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wellcome-container">
                <h1 class="wellcome-title">Welcome to Program4Rent...</h1>
            </div>
        </div>
    )
}

export default Login;