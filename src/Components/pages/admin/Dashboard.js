import React from "react";
import { withRouter } from 'react-router-dom';
import Layout from "./Layout";


const Dashboard = (props) => {
    
    //checking if there is a user, and if so, is he/she an admin, if not re-route
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user) {
        props.history.push("/login");
        alert("you do not have admin priveleges");
        } else if(!user.admin) {
            props.history.push("/login");
        alert("you do not have admin priveleges");
        };
    


return (
    <div  className="adminLayout">
        <Layout>
        </Layout>
        <h1>
            Welcome to Admin Dashboard
            </h1>
    </div>
    );
};



export default withRouter(Dashboard);