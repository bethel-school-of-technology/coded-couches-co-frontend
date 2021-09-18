import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
// you have a table that lists all users 


const Createusers = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    const getUser = () => {
        axios.get("http://localhost:3000/users").then(result => {
                    setUsers(result.data);
                    })
    };

     // create USER
     const createUser = (e) => {
        e.preventDefault()
        if (username !== "" && password !== "") {
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
                getUser();
                document.getElementById("createUser").reset();
            });
        }
    };



    return (
        <div>Hello Create Users
        <nav>
            <ul>
                <li>
                <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                <Link to="/users">Users</Link>
                </li>
                <li>
                <Link to="/editUser">Edit User</Link>
                </li>
            </ul>
        </nav>
        <h1>Create a User</h1>
        <form onSubmit={ createUser } id="createUser">
            <label>Username</label>
            <input type="text" name="username" minLength="3" onChange={ e => setUsername(e.target.value)} ></input> <br></br>
            <label>Password</label> 
            <input type="text" name="password" minLength="6" onChange={ e => setPassword(e.target.value)} ></input> <br></br>
            {/* <label>If Admin Check</label> 
            <input type="checkbox" name="admin" onChange={ e => setAdmin(e.target.type === "checkbox" ? e.target.checked : e.target.value)} >
                </input> <br></br> */}
            <button>Create</button>
        </form>
    </div>
    );
};



export default withRouter(Createusers);