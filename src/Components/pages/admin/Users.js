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
        <div style={{display: "flex",flexDirection: "column",alignItems: "flex-start"}}>

        <Layout>
        </Layout>
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
                        <td><button className="removeButton" onClick={() => {if (window.confirm("Are you sure?")) DeleteUser(user)}}>REMOVE</button></td>
                        <td><button onClick={() => EditUser(user)}>EDIT USER</button></td>
                    </tr>
                </tbody>
            </table>
            ) };
            {/* <Table columns={columns} data={data} /> */}
    </div>
    );
};

export default withRouter(Users);