import axios from "axios";
import React, { useState } from "react"; 
import { withRouter } from "react-router-dom";



const SignUp = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
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


    return (<div>
        <div  id="signUp">
            <h1>Sign Up!</h1>
            <label>Username</label>
            <input type="text" name="username" value={username} minLength="3" onChange={ e => setUsername(e.target.value)} ></input> <br></br>
            <label>Password</label> 
            <input type="text" name="password" value={password}  minLength="6" onChange={ e => setPassword(e.target.value)} ></input> <br></br>
            <button onClick={() => signIn(username, password)}>Sign Up</button>
        </div>
    </div>);

}

export default withRouter(SignUp);