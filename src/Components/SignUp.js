import axios from "axios";
import React, { useEffect, useState } from "react"; 

const SignUp = () => {
    const [inventories, setInv] = useState([]);

    useEffect(() => {
                //change url to new DB, change all actor to new user or inv
        axios.get("http://localhost:3000/inventories").then(result => {
        setInv(result.data);
        
        })
    }, []);

function test() {
    console.log(inventories);
}

    return (
    <div>
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

export default SignUp;