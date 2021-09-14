import axios from "axios";
import React, { useState } from "react"; 
import { withRouter } from "react-router-dom";



const SignUp = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const signIn = (e) => {
        e.preventDefault();
        
        if (username.length >= 3 && password.length >= 6) {
            const req = {
                username: username,
                password: password
            };
                //add "post user url" in place or url
            axios.post("http://localhost:3000/users/", req).then(result => {
                props.history.push("/login");
                console.log(result.data);
            })
        }
    };


    return (<div>
        <form onSubmit={ signIn }>
            <h1>Sign Up!</h1>
            <label>Username</label>
            <input type="text" name="username" minLength="3" onChange={ e => setUsername(e.target.value)} ></input> <br></br>
            <label>Password</label> 
            <input type="text" name="password" minLength="6" onChange={ e => setPassword(e.target.value)} ></input> <br></br>
            <button>Sign Up</button>
        </form>
    </div>);

}

export default withRouter(SignUp);