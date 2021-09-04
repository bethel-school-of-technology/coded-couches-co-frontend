import axios from "axios";
import React, { useEffect, useState } from "react"; 

const AboutMe = () => {
    const [inventories, setInv] = useState([]);

    useEffect(() => {
                
        axios.get("http://localhost:3000/inventories").then(result => {
        setInv(result.data);
        
        })
    }, []);

function test() {
    console.log(inventories);
}

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    const signIn = () => {

        
        if (name !== "" && description !== "") {
            const req = {
                name: name,
                description: description
            };
            axios.post("http://localhost:3000/inventories", req).then(result => {
                console.log(result.data);
            })
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
                Inventory ID:{inventories.id} <br /> NAME: {inventories.name} <br /> DESCRIPTION: {inventories.description}
            </li>
            ) }
    </ul> 
    <button onClick={test}>this is a test</button>
    </div>
);

}

export default AboutMe;