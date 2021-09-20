import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

//User id 33 ADMINS, ADMINS, has admin property true

const Admin = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [admin, setAdmin] = useState("")
  const [inventories, setInv] = useState([]);
  const [users, setUsers] = useState([]);
  // const [id, setId] = useState("");

  // const resetFieldUser = () => {
  //     setUsername("");
  //     setPassword("");
  // }

  //function for updating state of inventories
  const getInv = () => {
    axios.get("http://localhost:3000/inventories").then((result) => {
      setInv(result.data);
    });
  };
  //function for updating state of users
  const getUser = () => {
    axios.get("http://localhost:3000/users").then((result) => {
      setUsers(result.data);
      console.log(result.data);
      console.log(users.data);
      console.log(result.data.admin);
    });
  };

  //get inventory
  useEffect(() => {
    axios.get("http://localhost:3000/inventories").then((result) => {
      setInv(result.data);
    });
  }, []);

  //get users
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((result) => {
      setUsers(result.data);
    });
  }, []);

  // create inventory
  const createInv = (e) => {
    e.preventDefault();
    if (name !== "" && description !== "") {
      const req = {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        image: image,
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
      axios.post("http://localhost:3000/inventories", req).then((result) => {
        console.log(result.data);
        getInv();
        document.getElementById("createInv").reset();
        //need to set state of input values to empty
        // setName("");
        // setDescription("");
      });
    }
  };

  // create USER
  const createUser = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      const req = {
        username: username,
        password: password,
        // admin: admin
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
      axios.post("http://localhost:3000/users", req).then((result) => {
        console.log(result.data);
        // setUsername("");
        // setPassword("");
        getUser();
        document.getElementById("createUser").reset();
      });
    }
  };

  // const handleInputChange = (e) => {
  //     e.preventDefault();

  //   const { value } = e.target;
  //     setPassword(value);

  // }

  // NEED TO ADD PREVENT DEFAULT TO THESE ROUTES WITHOUT AFFECTING PARAMETERS
  // delete inventory :from axios website axios.delete(url[, config])
  const DeleteInv = (id) => {
    const url = "http://localhost:3000/inventories/" + id;
    axios.delete(url).then((res) => {
      // res.data;
      getInv();
    });
  };

  // delete USER
  const DeleteUser = (id) => {
    const url = "http://localhost:3000/users/" + id;
    axios.delete(url).then((res) => {
      getUser();
    });
  };

  // NEED TO ADD PREVENT DEFAULT TO THESE ROUTES WITHOUT AFFECTING PARAMETERS
  const EditInv = (id) => {
    const url = "http://localhost:3000/inventories/" + id;
    if (name !== "" && description !== "") {
      const req = {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        image: image,
      };
      axios.put(url, req).then((result) => {
        getInv();
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setImage("");
      });
    }
  };

  // const a = document.getElementById("allUsers");

  const EditUser = (id) => {
    const url = "http://localhost:3000/users/" + id;
    if (username !== "" && password !== "") {
      const req = {
        username: username,
        password: password,
        // admin: admin
      };
      axios.put(url, req).then((result) => {
        getUser();
        // document.getElementById("allUsers").reset();
        // originalState ();
        // a.value = a.defaultValue;
        setUsername("");
        setPassword("");
      });
    }
  };

  // const originalState = ("allUsers").html("");

  return (
    <div>
      <form onSubmit={createInv} id="createInv">
        <h1>Add Inventory</h1>
        <label>Item Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>{" "}
        <br></br>
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>{" "}
        <br></br>
        <label>Price</label>
        <input
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        ></input>{" "}
        <br></br>
        <label>Quantity</label>
        <input
          type="text"
          name="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        ></input>{" "}
        <br></br>
        <label>Image Url</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
        ></input>{" "}
        <br></br>
        <button>Add Item</button>
      </form>

      <h1>All the Inventory</h1>
      <ul>
        <div id="allInv">
          {inventories.map((inventories) => (
            <li key={inventories.id}>
              INVENTORY ID:{inventories.id} <br /> NAME: {inventories.name}{" "}
              <br /> DESCRIPTION: {inventories.description} <br />
              PRICE: {inventories.price} <br /> QUANTITY: {inventories.quantity}{" "}
              <br /> IMAGE: {inventories.image} <br />
              <button onClick={() => DeleteInv(inventories.id)}>
                REMOVE
              </button>{" "}
              <br />
              <label>INVENTORY</label>
              <input
                type="text"
                name="changeName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>{" "}
              <br></br>
              <label>DESCRIPTION</label>
              <input
                type="text"
                name="changeDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>{" "}
              <br></br>
              <label>PRICE</label>
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>{" "}
              <br></br>
              <label>QUANTITY</label>
              <input
                type="text"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              ></input>{" "}
              <br></br>
              <label>IMAGE</label>
              <input
                type="text"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>{" "}
              <br></br>
              <button onClick={() => EditInv(inventories.id)}>Edit Inv</button>
            </li>
          ))}
        </div>
      </ul>

      <h1>Create a User</h1>
      <form onSubmit={createUser} id="createUser">
        <label>Username</label>
        <input
          type="text"
          name="username"
          minLength="3"
          onChange={(e) => setUsername(e.target.value)}
        ></input>{" "}
        <br></br>
        <label>Password</label>
        <input
          type="text"
          name="password"
          minLength="6"
          onChange={(e) => setPassword(e.target.value)}
        ></input>{" "}
        <br></br>
        {/* <label>If Admin Check</label> 
            <input type="checkbox" name="admin" onChange={ e => setAdmin(e.target.type === "checkbox" ? e.target.checked : e.target.value)} >
                </input> <br></br> */}
        <button>Create</button>
      </form>

      <h1>All the Users</h1>
      <ul>
        <div>
          {users.map((user) => (
            <li key={user.id}>
              USER ID:{user.id} <br /> NAME: {user.username} <br /> Admin:{" "}
              {user.admin === true ? "is admin" : "is not admin"} <br />{" "}
              CREATED: {user.createdAt} <br />
              <button onClick={() => DeleteUser(user.id)}>REMOVE</button> <br />
              <label>User Name</label>
              <input
                type="text"
                name="changeUser"
                onChange={(e) => setUsername(e.target.value)}
              ></input>{" "}
              <br></br>
              <label>Change Password</label>
              <input
                type="text"
                name="changePassword"
                onChange={(e) => setPassword(e.target.value)}
              ></input>{" "}
              <br></br>
              <button onClick={() => EditUser(user.id)}>Edit User</button>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default withRouter(Admin);
