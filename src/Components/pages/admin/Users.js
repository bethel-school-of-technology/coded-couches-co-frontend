import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter, Link } from "react-router-dom";


const Users = (props) => {
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
    const [users, setUsers] = useState([]);

    // set empty state with initial data
    useEffect(() => {
        axios.get("http://localhost:3000/users").then(result => {
            setUsers(result.data);
        })
    }, []);

    // re-render user function
    const getUser = () => {
        axios.get("http://localhost:3000/users").then(result => {
                    setUsers(result.data);
                    })
    };

    // delete user function
    const DeleteUser = (user) => {
        const url = ("http://localhost:3000/users/" + user.id);
        axios.delete(url)
    .then(res => {
        getUser();});
    };

    // edit user function, send to new page with users info
    const EditUser = (user) => {
        const url = ("http://localhost:3000/users/" + user.id);
        axios.get(url)
    .then(res => {
        if(user) {
        props.history.push({
            pathname: "/edituser",
            state: { detail: {user} }
        });};
    });
    };

    return (
        <div>
        <nav>
            <ul>
                <li>
                <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                <Link to="/createUser">Create User</Link>
                </li>
                <li>
                <Link to="/inv">Inventory</Link>
                </li>
            </ul>
        </nav>
        <h1>Users Management</h1>
    { users.map(user => 
            <table border="1" key={user.id}>
                <thead>
                    <tr>
                        <th>USER ID:</th>
                        <th>NAME:</th>
                        <th>Admin:</th>
                        <th>CREATED:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{(user.admin === true)? 'is admin': 'is not admin'}</td>
                        <td>{user.createdAt}</td>
                    </tr>
                    <tr>
                        <td><button onClick={() => {if (window.confirm("Are you sure?")) DeleteUser(user)}}>REMOVE</button></td>
                        <td><button onClick={() => EditUser(user)}>EDIT USER</button></td>
                    </tr>
                </tbody>
            </table>
            ) };
            
    </div>
    );
};

export default withRouter(Users);