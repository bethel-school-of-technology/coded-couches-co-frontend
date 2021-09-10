import React from 'react';
import users from '../users';

const Profile = () => {
    const { user } = users;

    // const logginUser = () => {

    // }
    
    return(
        <div>
        {user.map((user) =>(
            <div key={user.id}>
                <div>
                {user.firstName}{' '}{user.lastName}{<br></br>}
                {user.email}
                </div>
            </div>
        ))}
        </div>
    );
}

export default Profile;