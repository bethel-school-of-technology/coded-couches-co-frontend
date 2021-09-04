import axios from "axios";
import React, { useEffect, useState } from "react"; 

///////Is not functional right now, needs to be connected to backend and db see axios post url


const SignUp = () => {
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
            axios.post("url", req).then(result => {
                console.log(result.data);
            })
        }
    };
    return (<div>
        <form onSubmit={ signIn }>
            <h1>Sign Up!</h1>
            <label>Username</label>
            <input type="text" name="username" onChange={ e => setUsername(e.target.value)}></input> <br></br>
            <label>Password</label> 
            <input type="text" name="password" onChange={ e => setPassword(e.target.value)}></input> <br></br>
            <button>Sign In</button>
        </form>
    </div>);

}

export default SignUp;