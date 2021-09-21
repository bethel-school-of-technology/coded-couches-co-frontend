import axios from 'axios';
import React, { useEffect, useState } from 'react';

const URL = process.env.API_URL;

const Profile = () => {
    //const { user } = users;
    const [user, setUser] = useState([]);

    useEffect((id) => {
        axios.get(`${URL}/users/profile` + id).then(result => {
            setUser(result.data);
            console.log(result.data);
        })
    }, []);
    
    return(
        <div>
            <h3>Welcome, {user.username}!</h3>
            <div>{console.log(user)}</div>
        </div>
    );
}

export default Profile;

// {user.map((user) =>(
//     <div key={user.id}>
//         <div>
//         {user.firstName}{' '}{user.lastName}{<br></br>}
//         {user.email}
//         </div>
//     </div>
// ))}