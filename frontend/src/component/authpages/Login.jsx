import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'
const Login = () => {

    const navigate=useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        if (id != "" || password != "") {
            let res = await axios.post("http://localhost:3000/login", {
                id: id,
                password: password
            })

            
            if(res.data.status==200||res.data.status==201){
               
            const userId=res.data.user._id;
            localStorage.setItem("geolocator/userId",userId)
                navigate("/")

            }
        }


    }

    const [id, setId] = useState("");
    const [password, setPassword] = useState("")


    return (
        <div className='login-body w-full h-[90vh] flex justify-center items-center'>
            <div className='login-block w-[80%] h-[50%] bg-white flex flex-col gap-4 justify-center items-center rounded-md '>


                <input type='number' value={id} onChange={(e)=>{
                    setId(e.target.value);
                }} placeholder='enter id' className='h-10 w-[200px] text-center'></input>

                <input type='text' value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} placeholder='enter password ' className='h-10 w-[200px] text-center'></input>
                <button onClick={(e) => { handleLogin(e) }} className='bg-blue-600 w-[100px] h-8 rounded-lg'>login</button>
            </div>
        </div>
    )
}

export default Login