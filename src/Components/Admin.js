import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter } from "react-router-dom";

const Admin = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    // const [username, setUserame] = useState("");
    // const [password, setPassword] = useState("");
    const [inventories, setInv] = useState([]);
    const [users, setUsers] = useState([]);
    // const [id, setId] = useState("");

    
    //get inventory 
    useEffect(() => {   
        axios.get("http://localhost:3000/inventories").then(result => {
        setInv(result.data);
        console.log(name)
        })
    }, []);

    //get users
    useEffect(() => {
        axios.get("http://localhost:3000/users").then(result => {
            setUsers(result.data);
        })
    }, []);


    const getAll = () => {
        axios.get("http://localhost:3000/inventories").then(result => {
                    setInv(result.data);
                    console.log(name)
                    })
    }
    // create inventor
    const create = (e) => {
        e.preventDefault()
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
                getAll();
            });
        }
    };




    // create USER
    // const createUser = (e) => {
    //     e.preventDefault()
    //     if (username !== "" && password !== "") {
    //         const req = {
    //             username: username,
    //             password: password
    //         };
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
    //         axios.post("http://localhost:3000/users", req).then(result => {
    //             console.log(result.data);
    //         });
    //     }
    // };



    // delete inventory :from axios website axios.delete(url[, config])
    const DeleteInv = (id) => {
        const url = ("http://localhost:3000/inventories/" + id);
        axios.delete(url)
    .then(res => res.data)
    };
    // delete USER
    // const DeleteUser = (id) => {
    //     const url = ("http://localhost:3000/users/" + id);
    //     axios.delete(url)
    // .then(res => res.data)
    // }



    const EditInv = (id) => {
        const url = ("http://localhost:3000/inventories/" + id);
        if (name !== "" && description !== "") {
            const req = {
                name: name,
                description: description
            };
            axios.put(url, req).then(result => {
                console.log(result.data);
            });
        }
        
    }
    // const EditUser = (id) => {
    //     const url = ("http://localhost:3000/users/" + id);
    //     if (username !== "" && password !== "") {
    //         const req = {
    //             username: username,
    //             password: password
    //         };
    //         axios.put(url, req).then(result => {
    //             console.log(result.data);
    //         });
    //     }
        
    // }




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
                INVENTORY ID:{inventories.id} <br /> NAME: {inventories.name} <br /> DESCRIPTION: {inventories.description} <br />
                <button onClick={() => DeleteInv(inventories.id) }>REMOVE</button> <br/>

                <label>INVENTORY NAME</label>
                <input type="text" name="changeName" onChange={ e => setName(e.target.value)}></input> <br></br>
                <label>DESCRIPTION</label> 
                <input type="text" name="changeDescription" onChange={ e => setDescription(e.target.value)}></input> <br></br>
                <button onClick={() => EditInv(inventories.id)}>Edit Inv</button>
            </li>
            
            ) }
    </form>
    </ul> 


    <h1>All the Users</h1>
    <ul>
        <form>
    { users.map(users => 
            <li key={users.id}>
                USER ID:{users.id} <br /> NAME: {users.username} <br /> CREATED: {users.createdAt} <br />
                {/* <button onClick={() => DeleteUser(users.id) }>REMOVE</button> */}

                {/* <label>User Name</label>
                <input type="text" name="changeUser" onChange={ e => setUser(e.target.value)}></input> <br></br>
                <label>Description</label> 
                <input type="text" name="changePassword" onChange={ e => setPassword(e.target.value)}></input> <br></br>
                <button onClick={() => EditUser(users.id)}>Edit User</button> */}
            </li>
            ) }
            </form>
    </ul> 
    </div>
);

}

export default withRouter(Admin);