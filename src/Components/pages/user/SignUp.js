import axios from "axios";
import React, { useState } from "react"; 
import { withRouter } from "react-router-dom";



const SignUp = (props) => {

    // set initial state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    // sing up new user function with character parameters requirements
    const signIn = (username, password) => {
        if (username.length >= 3 && password.length >= 6) {
            const req = {
                username: username,
                password: password
            };
            axios.post("http://localhost:3000/users/", req).then(result => {
                props.history.push("/login");
                console.log(result.data);
            })
        } else {
            return alert("Username needs to be at least 3 characters, and Password at least 6 characters")
        };
    };


    return (<div className="login-page">
            <div className="login-page">
                <div className="form">
                    <div className="login-form">
                        <input type="text" placeholder="Username"  minLength="3" onChange={ e => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" minLength="6"  onChange={ e => setPassword(e.target.value)}/>
                        <button onClick={() => signIn(username, password)}>SignUp</button>

                    </div>
                </div>
            </div>
    </div>);

}

export default withRouter(SignUp);