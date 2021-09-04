import axios from "axios";
import React, { useState } from "react"; 

const SignUp = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    const signIn = (e) => {
        e.preventDefault();
        
        if (name !== "" && description !== "") {
            const req = {
                name: name,
                description: description
            };
                //add "post user url" in place or url
            axios.post("http://localhost:3000/inventories", req).then(result => {
                console.log(result.data);
            })
        }
    };
    return (<div>
        <form onSubmit={ signIn }>
            <h1>Sign Up!</h1>
            <label>Item Name</label>
            <input type="text" name="name" onChange={ e => setName(e.target.value)}></input> <br></br>
            <label>Description</label> 
            <input type="text" name="description" onChange={ e => setDescription(e.target.value)}></input> <br></br>
            <button>Add Item</button>
        </form>
    </div>);

}

export default SignUp;