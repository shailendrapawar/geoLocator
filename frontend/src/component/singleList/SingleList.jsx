import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import { MdHistory } from "react-icons/md";

import { useNavigate} from "react-router-dom"


const SingleList = ({ data }) => {
    const navigate=useNavigate()
    return (
        <div className='w-full h-16 bg-slate-300 flex '>
            <div className='w-[70%] flex flex-col justify-center'>
                <div className=' flex gap-1 h-[50%] items-center pl-2'>
                    <FaUserCircle className='h-full w-6' />
                    {data.name} ({data.id})
                </div>
                <div className=' flex justify-between pl-2 pr-2'>
                    9:30
                    {data.status ? <span className='text-green-600 bg-green-300 w-20 text-center '>Active</span> : <span className='bg-slate-300 w-auto pl-2 pr-2 text-slate-600'>not logged in yet</span>}

                </div>
            </div>
            <div className='w-[30%] justify-center items-center gap-3' style={data.status ? { display: "flex"  } : { display: "none" }} >
                <MdHistory className='h-6 w-6' />
                <MdMyLocation
                onClick={()=>{
                    navigate("/singleUserMap",{
                        state:{
                            data
                        }
                    })
                }}
                className='h-6 w-6 text-blue-500'/>
            </div>
        </div>
    )
}

export default SingleList