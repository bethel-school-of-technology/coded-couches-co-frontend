import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter } from "react-router-dom";

const Admin = ({history}) => {
    //get inventory 
    const [inventories, setInv] = useState([]);
    useEffect(() => {   
        axios.get("http://localhost:3000/inventories").then(result => {
        setInv(result.data);
        })
    }, []);

        //get users
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/users").then(result => {
            setUsers(result.data);
        })
    }, []);

    // test button for users
// function test() {
//     console.log(users);
// }

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    const signIn = () => {

        
        if (name !== "" && description !== "") {
            const req = {
                name: name,
                description: description
            };

            const token = localStorage.getItem("myJWT");

            if(!token) {
                history.push("/login")
            }

            const options = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            axios.post("http://localhost:3000/inventories", req, options).then(result => {
                console.log(result.data);
            });
        }
    };

    return (
    <div>
        <form onSubmit={ signIn }>
            <h1>Add Inventory</h1>
            <label>Item Name</label>
            <input type="text" name="name" onChange={ e => setName(e.target.value)}></input> <br></br>
            <label>Description</label> 
            <input type="text" name="description" onChange={ e => setDescription(e.target.value)}></input> <br></br>
            <button>Add Item</button>
        </form>
    <h1>All the Inventory</h1>
    <ul>
    { inventories.map(inventories => 
            <li key={inventories.id}>
                IINVENTORY ID:{inventories.id} <br /> NAME: {inventories.name} <br /> DESCRIPTION: {inventories.description}
            </li>
            ) }
    </ul> 
    {/* <button onClick={test}>this is a test</button> */}


    <h1>All the Users</h1>
    <ul>
    { users.map(users => 
            <li key={users.id}>
                USER ID:{users.id} <br /> NAME: {users.username} <br /> PASSWORD: {users.password}
            </li>
            ) }
    </ul> 
    {/* <button onClick={test}>this is a test</button> */}
    </div>
);

}

export default withRouter(Admin);