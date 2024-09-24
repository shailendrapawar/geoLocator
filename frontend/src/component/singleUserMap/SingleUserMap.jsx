import React from 'react'
import { useLocation } from 'react-router'

const SingleUserMap = () => {
    const location=useLocation()
    const {data}=location.state||{};
    console.log(data)
  return (
    <div className='text-black'>


    </div>
  )
}

export default SingleUserMap