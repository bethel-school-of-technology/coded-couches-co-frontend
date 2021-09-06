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

    const create = () => {

        
        if (name !== "" && description !== "") {
            const req = {
                name: name,
                description: description
            };
            // const token = localStorage.getItem("myJWT");
            // if(!token) {
            //     history.push("/login")
            // }
            // const options = {
            //     headers: {
            //         "Authorization": `Bearer ${token}`
            //     }
            // }

// add ",options" after req when ready for jwt
            axios.post("http://localhost:3000/inventories", req).then(result => {
                console.log(result.data);
            });
        }
    };


    // can manually delete with this function, but cant automate it.
    const Delete = (e) => {
        e.preventDefault();
        axios
    .delete(`http://localhost:3000/inventories/inv/${inventories.id}`)
    .then(res => res.data)
    }



    return (
    <div>
        <form onSubmit={ create }>
            <h1>Add Inventory</h1>
            <label>Item Name</label>
            <input type="text" name="name" onChange={ e => setName(e.target.value)}></input> <br></br>
            <label>Description</label> 
            <input type="text" name="description" onChange={ e => setDescription(e.target.value)}></input> <br></br>
            <button>Add Item</button>
        </form>
    <h1>All the Inventory</h1>
    <ul>
    <form>
    { inventories.map(inventories => 
            <li key={inventories.id}>
                INVENTORY ID:{inventories.id} <br /> NAME: {inventories.name} <br /> DESCRIPTION: {inventories.description}
                <button onClick={ Delete }>REMOVE</button>
            </li>
            
            ) }
    </form>
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