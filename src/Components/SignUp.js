import axios from "axios";
import React, { useEffect, useState } from "react";

//set initial state?

//connect inputs and buttons to functions

//have to make crud functions on backend 

const SignUp = () => {
    const [actor, setActors] = useState();

    useEffect(() => {
        axios.get("http://localhost:3000/actor").then(result => {
        console.log(result);
        setActors(result.data);
        })
    }, []);

    return (
    <div>
        <h1>All the Users</h1>
    <ul>
        {/* { actor.first_name.map(actors => 
            <li key={actor.id}>
                {actor.first_name}
            </li>
            ) } */}
    </ul>
    </div>
);
}

export default SignUp;