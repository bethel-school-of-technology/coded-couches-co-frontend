import axios from "axios";
import React from "react"; 
import { withRouter } from "react-router-dom";
import { useState } from "react"; 
import Layout from "./Layout";

const URL = process.env.REACT_APP_API_URL
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
                password: password
            };
            axios.post(`${URL}/users`, req).then(result => {
                document.getElementById("createUser").reset();
                props.history.push("/admin/users");
            });
        } else {
            return alert("Username needs to be at least 3 characters, and Password at least 6 characters")
        };
    };



    return (
        <div  className="adminLayout">
        <Layout>
        </Layout>
        <br></br><h1>Create a User</h1><br></br>
        <form onSubmit={ createUser } id="createUser">
            <div className="create">
                <label>Username</label>
                <input type="text" className="inventoryInput" name="username" minLength="3" onChange={ e => setUsername(e.target.value)} ></input> <br></br>
                <label>Password</label> 
                <input type="text" className="inventoryInput" name="password" minLength="6" onChange={ e => setPassword(e.target.value)} ></input> <br></br>
                <button className="btn-add">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                </button>
            </div>
        </form>
    </div>
    );
};



export default withRouter(Createusers);