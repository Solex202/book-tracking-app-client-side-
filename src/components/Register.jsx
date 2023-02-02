import React from 'react'
import { useForm } from "react-hook-form";


const Register = () => {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="username"
        ref={register({ required: true })}
      />
      {errors.name && <p>This field is required</p>}

      <input
        type="passowrd"
        name="password"
        ref={register({ required: true })}
      />
      {errors.name && <p>This field is required</p>}

      <input type="submit" />
    </form>

    // <div>
    //     <form>
    //         <input type="text" placeholder="username"/> 
    //         <input type="password" placeholder="password"/> 
    //         <button>submit</button>
    //     </form>
    // </div>
  )
}

export default Register