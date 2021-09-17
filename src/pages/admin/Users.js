import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
// you have a table that lists all users 


const Users = () => {

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
    }



    return (
        <div>Hello Users
        <nav>
            <ul>
                <li>
                <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                <Link to="/inv">Inventory</Link>
                </li>
                <li>
                <Link to="">Dashboard</Link>
                </li>
                <li>
                <Link to="">Inventory</Link>
                </li>
            </ul>
        </nav>
        <ul>
        <table>
    { users.map(user => 
            <li key={user.id}>
                USER ID:{user.id} <br /> NAME: {user.username} <br /> Admin: {(user.admin === true)? 'is admin': 'is not admin'} <br /> CREATED: {user.createdAt} <br />
                <button onClick={() => DeleteUser(user.id) }>REMOVE</button> <br />
            </li>
            ) }
            </table>
    </ul>
    </div>
    );
};



export default withRouter(Users);