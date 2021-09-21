<<<<<<< HEAD
//import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
=======
import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter, useLocation, Link } from "react-router-dom";


>>>>>>> 13d94bbf0f3ef252d645f86bf6ba5cdfbb9781eb


const Editusers = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // using previous pages information
    const location = useLocation();
    
    // setting previous pages information
    useEffect(() => {
    }, [location]);

    // edit current user information
    const EditUser = (user) => {
        const url = ("http://localhost:3000/users/" + user.id);
        if (username !== "" && password !== "") {
            const req = {
                username: username,
                password: password,
                // admin: admin
            };
            axios.put(url, req).then(result => {
                setUsername("");
                setPassword("");
                props.history.push("/users");
            });
        } 
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
                <li>
                <Link to="/createUser">Create User</Link>
                </li>
            </ul>
        </nav>
        <h1>Edit User</h1>
    <ul>
        <div >
            <div> 
            USER ID:{location.state.detail.user.id} <br /> 
            NAME: {location.state.detail.user.username} <br /> 
            Admin: {(location.state.detail.user.admin === true)? 'is admin': 'is not admin'} <br /> 
            CREATED: {location.state.detail.user.createdAt} <br />
            <label>User Name</label>
                <input type="text" name="changeUser" value={username} onChange={ e => setUsername(e.target.value)}></input> <br></br>
                <label>Change Password</label> 
                <input type="text" name="changePassword" value={password} onChange={ e => setPassword(e.target.value)}></input> <br></br>
                <button onClick={() => EditUser(location.state.detail.user)}>SAVE</button>
            </div>
            </div>
    </ul> 
    </div>
    );
};



export default withRouter(Editusers);