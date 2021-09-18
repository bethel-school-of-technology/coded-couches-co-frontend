import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';


const Users = (props) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/users").then(result => {
            setUsers(result.data);
        })
    }, []);

    const getUser = () => {
        axios.get("http://localhost:3000/users").then(result => {
                    setUsers(result.data);
                    })
    };

    const DeleteUser = (id) => {
        const url = ("http://localhost:3000/users/" + id);
        axios.delete(url)
    .then(res => {
        getUser();});
    };

    const EditUser = (user) => {
        const url = ("http://localhost:3000/users/" + user.id);
        axios.get(url)
    .then(res => {
        if(user) {
        props.history.push({
            pathname: "/edituser",
            search: '?query=abc',
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
            </ul>
        </nav>
        <h1>Users Management</h1>
        <ul>
        <table>
    { users.map(user => 
            <li key={user.id}>
                USER ID:{user.id} <br /> NAME: {user.username} <br /> Admin: {(user.admin === true)? 'is admin': 'is not admin'} <br /> CREATED: {user.createdAt} <br />
                <button onClick={() => DeleteUser(user.id) }>REMOVE</button>
                <button onClick={() => EditUser(user)}>EDIT USER</button>
            </li>
            ) }
            </table>
    </ul>
    </div>
    );
};



export default withRouter(Users);