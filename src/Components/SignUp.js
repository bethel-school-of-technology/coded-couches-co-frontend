import axios from "axios";
import React, { useEffect, useState } from "react";

//set initial state?

//connect inputs and buttons to functions

//have to make crud functions on backend 

const SignUp = () => {
    const [actor, setActors] = useState([]);

    useEffect(() => {
    
        axios.get("http://localhost:3000/actor").then(result => {
        setActors(result.data);
        
        })
    }, []);

function test() {
    console.log(actor);
}

    return (
    <div>
    <h1>All the Users</h1>
    <ul>
    { actor.map(actors => 
            <li key={actors.actor_id}>
                {actors.actor_id} {actors.first_name} {actors.last_name}
            </li>
            ) }
    </ul> 
    <button onClick={test}>this is a test</button>
    </div>
);
}

export default SignUp;