import axios from "axios";
import React, { useState, useEffect } from "react"; 
import { withRouter } from "react-router";


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/users").then(result => {
            setUsers(result.data);
        })
    }, []);

    //function for updating state of users
    const getUser = () => {
        axios.get("http://localhost:3000/users").then(result => {
                    setUsers(result.data);
                    // console.log(result.data);
                    })
    };

    const getUserData = () => {
        return axios.get("http://localhost:3000/users").then(result => {
                    console.log(result.data);
                    return result.data;
                    
                    })
    };
    

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
                getUser();
                getUserData();
                //when jwt is working and ready uncomment below code min 52 video
                console.log(getUserData);
                const token = result.data.jwt;
                localStorage.setItem("myJWT", token);
                //need to find where admin in teh json will be stored to verify if true or not...
                const admin = result.data;
                if (token) {
                    // this isnt working correctly yet need to set it too if(admin), when there is an admin table created
                    if (admin) {
                        props.history.push("/dash");
                    } else {
                        props.history.push("/shop");
                    };
                }
            })
        } else {
            return alert("Username needs to be at least 3 characters, and Password at least 6 characters")
        };
    };
    return (<div>
        <form onSubmit={ signIn }>
            <h1>Login!</h1>
            <label>Username</label>
            <input type="text" name="username" minLength="3" onChange={ e => setUsername(e.target.value)}></input> <br></br>
            <label>Password</label> 
            <input type="text" name="password" minLength="6" onChange={ e => setPassword(e.target.value)}></input> <br></br>
            <button >Login</button>
        </form>
    </div>);

}

export default withRouter(Login);