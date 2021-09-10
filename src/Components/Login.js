import axios from "axios";
import React, { useState } from "react"; 
import { withRouter } from "react-router";


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    //user id 16 = admins admins has admin true
    const signIn = (e) => {
        e.preventDefault();
        
        if (username.length >= 3 && password.length >= 6) {
            const req = {
                username: username,
                password: password
            };
                //add "post user url" in place or url
            axios.post("http://localhost:3000/users/login", req).then(result => {
                //when jwt is working and ready uncomment below code min 52 video
                const token = result.data.jwt;
                localStorage.setItem("myJWT", token);
                //need to find where admin in teh json will be stored to verify if true or not...
                let admin = false;
                if (token) {
                    //this isnt working correctly yet need to set it too if(admin), when there is an admin table created
                    if (admin = true) {
                        props.history.push("/admin");
                    } else {
                        props.history.push("/shop");
                    };
                }
                console.log(result.data);
            })
        }
    };
    return (<div>
        <form onSubmit={ signIn }>
            <h1>Login!</h1>
            <label>Username</label>
            <input type="text" name="username" minlength="3" onChange={ e => setUsername(e.target.value)}></input> <br></br>
            <label>Password</label> 
            <input type="text" name="password" minlength="6" onChange={ e => setPassword(e.target.value)}></input> <br></br>
            <button >Login</button>
        </form>
    </div>);

}

export default withRouter(Login);