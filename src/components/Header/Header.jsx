import { Link } from 'react-router-dom';
import argentBankLogo from '../../assets/img/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logoutReducer } from '../../store/auth/authSlice';


function Header() {

    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
    const firstName = useSelector((state)=>state.auth.userFirstName);
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logoutReducer());
    }

    return (
        <nav className="main-nav">
            <Link to={"/"}className="main-nav-logo">
            <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {
                isLoggedIn ? 
                    <div>
                        <Link to={"/profile"} className="main-nav-item">
                            <i className="fa fa-user-circle headerIcon"></i>
                            {firstName}
                        </Link>
                        <Link to={"/"} className="main-nav-item" onClick={handleLogout}>
                            <i className="fa fa-sign-out headerIcon"></i>
                            Sign Out
                        </Link>
                    </div>
                :
                    <div>
                        <Link to={"/login"} className='main-nav-item'>
                            <i className="fa fa-user-circle headerIcon"></i>
                            Sign In
                        </Link>
                    </div>
            }   
        </nav>
    )
}


export default Header