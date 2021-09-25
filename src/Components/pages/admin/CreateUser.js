import axios from "axios";
import React from "react"; 
import { withRouter, Link } from "react-router-dom";
import { useState } from "react"; 


const Createusers = (props) => {

    //checking if there is a user, and if so is he an admin, if not re-route
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user) {
        props.history.push("/login");
        alert("you do not have admin priveleges");
        } else if(!user.admin) {
            props.history.push("/login");
        alert("you do not have admin priveleges");
        };

    // set initial state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


     // create a user
    const createUser = (e) => {
        e.preventDefault()
        if (username.length >= 3 && password.length >= 6) {
            const req = {
                username: username,
                password: password,
                // admin: admin
            };
            // const token = localStorage.getItem("myJWT");
            // if(!token) {
            //     history.push("/login")
            // }
            // const options = {
            //     headers: {
            //         "Authorization": `Bearer ${token}`
            //     }
            // }
            // add ",options" after req when ready for jwt
            axios.post("http://localhost:3000/users", req).then(result => {
                console.log(result.data);
                // setUsername("");
                // setPassword("");
                document.getElementById("createUser").reset();
                props.history.push("/users");
            });
        } else {
            return alert("Username needs to be at least 3 characters, and Password at least 6 characters")
        };
    };



    return (
        <div>
        <nav>
            <ul>
                <li>
                <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
        <h1>Create a User</h1>
        <form onSubmit={ createUser } id="createUser">
            <label>Username</label>
            <input type="text" name="username" minLength="3" onChange={ e => setUsername(e.target.value)} ></input> <br></br>
            <label>Password</label> 
            <input type="text" name="password" minLength="6" onChange={ e => setPassword(e.target.value)} ></input> <br></br>
            <button>Create</button>
        </form>
    </div>
    );
};



export default withRouter(Createusers);