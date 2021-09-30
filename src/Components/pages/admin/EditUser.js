import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter, useLocation } from "react-router-dom";
import Layout from "./Layout";

const URL = process.env.REACT_APP_API_URL

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
        const url = (`${URL}/users/` + user.id);
        if (username.length >= 3 && password.length >= 6) {
            const req = {
                username: username,
                password: password,
                // admin: admin
            };
            axios.put(url, req).then(result => {
                props.history.push("/admin/user/edit");
            });
        } else {
            return alert("Username needs to be at least 3 characters, and Password at least 6 characters")
        };
    };

    return (
        <div  className="adminLayout">

        <Layout>
        </Layout>
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
            <button className="btn-add" onClick={() => EditUser(location.state.detail.user)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>
            </button>
        </div>
    </div>
    );
};



export default withRouter(Editusers);