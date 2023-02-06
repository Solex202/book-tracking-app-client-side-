import React, { useState} from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  // const onSubmit = (data) => console.log(data);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmits = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin' : 'http://localhost:3000/'
     },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log(data);
    // setMessage(data.message);
  };


  return (

    <form onSubmit={(e)=>handleSubmits(e)}>
      <input
        type="text"
        placeholder="username"
        
        onChange={(e)=> setUsername(e.target.value)}
        // ref={register({ required: true })}
      />
      {/* {errors.name && <p>This field is required</p>} */}

      <input
        type="passowrd"
        placeholder="passwords"
        onChange={(e)=> setPassword(e.target.value)}
        // ref={register({ required: true })}
      />
      {/* {errors.name && <p>This field is required</p>} */}

      <Link to="/welcome"><input type="submit" /></Link>
    </form>

  
  )
}

export default Register