import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter } from "react-router-dom";
import Layout from "./Layout";

const URL = process.env.REACT_APP_API_URL

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
        axios.get(`${URL}/users`).then(result => {
            setUsers(result.data);
        })
    }, []);

    // re-render user function
    const getUser = () => {
        axios.get(`${URL}/users`).then(result => {
                    setUsers(result.data);
                    })
    };

    // delete user function
    const DeleteUser = (user) => {
        const url = (`${URL}/users/` + user.id);
        axios.delete(url)
    .then(res => {
        getUser();});
    };

    // edit user function, send to new page with users info
    const EditUser = (user) => {
        const url = (`${URL}/users/` + user.id);
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
        <div  className="adminLayout">

        <Layout>
        </Layout>
        <h1>Users Management</h1>
    
            <table border="1" >
                <thead>
                    <tr>
                        <th>USER ID:</th>
                        <th>NAME:</th>
                        <th>Admin:</th>
                        <th>CREATED:</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                { users.map(user => 
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{(user.admin === true)? 'is admin': 'is not admin'}</td>
                        <td>{user.createdAt}</td>
                        <td><button className="btn-delete" onClick={() => {if (window.confirm("Are you sure?")) DeleteUser(user)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        </button>
                        <button className="btn-edit" onClick={() => EditUser(user)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg></button></td>
                    </tr>
                    ) }
                </tbody>
            </table>
            
            {/* <Table columns={columns} data={data} /> */}
    </div>
    );
};

export default withRouter(Users);