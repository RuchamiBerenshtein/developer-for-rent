import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <Link to="/login">Login</Link>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Navigation;
