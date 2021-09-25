import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter, useLocation, Link } from "react-router-dom";


const Editusers = (props) => {

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

    // using previous pages information
    const location = useLocation();
    
    // setting previous pages information on to current page
    useEffect(() => {
    }, [location]);

    // edit current user information
    const EditUser = (user) => {
        const url = ("http://localhost:3000/users/" + user.id);
        if (username.length >= 3 && password.length >= 6) {
            const req = {
                username: username,
                password: password,
                // admin: admin
            };
            axios.put(url, req).then(result => {
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
                <li>
                <Link to="/createUser">Create User</Link>
                </li>
            </ul>
        </nav>
        <h1>Edit User</h1>
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>NAME:</th>
                        <th>Admin:</th>
                        <th>CREATED:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{location.state.detail.user.id}</td>
                        <td>{location.state.detail.user.username}</td>
                        <td>{(location.state.detail.user.admin === true)? 'is admin': 'is not admin'}</td>
                        <td>{location.state.detail.user.createdAt}</td>
                    </tr>
                </tbody>
            </table>
            <label>User Name</label>
            <input type="text" name="changeUser" value={username} onChange={ e => setUsername(e.target.value)}></input> <br></br>
            <label>Change Password</label> 
            <input type="text" name="changePassword" value={password} onChange={ e => setPassword(e.target.value)}></input> <br></br>
            <button onClick={() => EditUser(location.state.detail.user)}>SAVE</button>
        </div>
    </div>
    );
};



export default withRouter(Editusers);