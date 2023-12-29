import { useState } from "react";
import { getUserProfile, login } from "../../services/api";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { loginReducer, setUserFirstName, setUserLastName } from "../../store/auth/authSlice";


function SignInPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userDatas, setUserDatas] = useState({
        email: "",
        password: ""
    })
    
    async function handleLogin(e) {
        e.preventDefault();
        try {
            const userLogged = await login(userDatas);
            if (userLogged.status===200) {
                dispatch(loginReducer())
                const userDatas = await getUserProfile();
                dispatch(setUserFirstName(userDatas.body.firstName));
                dispatch(setUserLastName(userDatas.body.lastName));
                navigate('/profile');
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleChange(input) {
        const{name, value} = input.target;
        setUserDatas(userDatas=>{
            return {
                ...userDatas,
                [name]: value
            }
        })
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="email" onChange={handleChange} />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" onChange={handleChange} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button> 
                </form>
            </section>
        </main>
    )
}


export default SignInPage;