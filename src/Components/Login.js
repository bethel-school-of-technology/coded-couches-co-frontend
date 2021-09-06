import axios from "axios";
import React, { useState } from "react"; 
import { withRouter } from "react-router";
///////Is not functional right now, needs to be connected to backend and db see axios post url


const Login = (history) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const signIn = (e) => {
        e.preventDefault();
        
        if (username !== "" && password !== "") {
            const req = {
                username: username,
                password: password
            };
                //add "post user url" in place or url
            axios.post("http://localhost:3000/users", req).then(result => {
                //when jwt is working and ready uncomment below code min 52 video
                const token = result.data.jwt;
                localStorage.setItem("myJWT", token);
                history.push("/shop");
                console.log(result.data);
            })
        }
    };
    return (<div>
        <form onSubmit={ signIn }>
            <h1>Login!</h1>
            <label>Username</label>
            <input type="text" name="username" onChange={ e => setUsername(e.target.value)}></input> <br></br>
            <label>Password</label> 
            <input type="text" name="password" onChange={ e => setPassword(e.target.value)}></input> <br></br>
            <button>Login</button>
        </form>
    </div>);

}

export default withRouter(Login);