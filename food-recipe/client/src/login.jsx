import "./login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Login(){

    const [name,setname] = useState("")
    const [password,setpassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      try {
        axios.post('http://localhost:6001/login',{username: name,password: password},
            {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            }
          })
        .then(data => {
            navigate('/recipies')
        })
        .catch(e => console.log(e))
      } catch (error) {
        console.log(error);
      }
    }

    return(
      <div className="wrapper">
         <div className="title">
            Login
         </div>
         <form onSubmit={handleSubmit}>
            <div className="field">
               <input value={name} onChange={e => setname(e.target.value)} type="text" required />
               <label>Username</label>
            </div>
            <div className="field">
               <input value={password} onChange={e => setpassword(e.target.value)}  type="password" required />
               <label>Password</label>
            </div>
            <div className="field">
               <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
               Not a member? <Link to={"/register"}>Signup now</Link>
            </div>
         </form>
      </div>
    )
}