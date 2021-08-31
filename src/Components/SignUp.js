import React from "react";

const SignUp = () => {
return (
    <form>
        <p>Add Name</p>
        <input type="text" name="name" placeholder="name"></input>
        <p>Create Password</p>
        <input type="password" name="password" placeholder="password"></input>
        <br></br>
        <button type="submit">Submit</button>
    </form>
)

}

export default SignUp;