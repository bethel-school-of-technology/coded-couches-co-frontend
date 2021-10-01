import axios from "axios";
import React, { useState } from "react"; 
import { withRouter } from "react-router";

const URL = process.env.REACT_APP_API_URL

const Login = (props) => {

    // set initial state to empty
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // sing in user function with character parameters requirements, and admin check, with routing based on admin
    const signIn = (e) => {
        e.preventDefault();
        if (username.length >= 3 && password.length >= 6) {
            const req = {
                username: username,
                password: password
            };
            axios.post(`${URL}/users/login`, req).then(result => {
                const token = result.data.jwt;
                const user = result.data.user;
<<<<<<< HEAD
                
=======
                console.log(user)
>>>>>>> bba49e361a1f240b33bcc3b3233ae4b68de6d0e6
                localStorage.setItem("myJWT", token);
                localStorage.setItem("user", JSON.stringify(user));
                const admin = result.data.user.admin;
                if (token) {
                    if (admin) {
                        props.history.push({
                            pathname: "/admin/dashboard",
                        });
                    } else {
                        props.history.push("/");
                    };
                }
            })
        } else {
            return alert("Username needs to be at least 3 characters, and Password at least 6 characters")
        };
    };


    return (<div>
        <form onSubmit={ signIn }>
            <div className="login-page">
                <div className="loginText">
                    <p>Login</p>
                </div>
                <div className="form">
                    <div className="login-form">
                        <input type="text" placeholder="Username"  minLength="3" onChange={ e => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password"   onChange={ e => setPassword(e.target.value)}/>
                        <button>login</button>
                        <p className="message">Not registered? <a href="/signup">Create an account</a></p>
                    </div>
                </div>
            </div>
        </form>
    </div>);

}

export default withRouter(Login);
