/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
   <div className='bg-yellow-500 text-white p-4 text-3xl'>User:{userid}</div>
  )
}

export default User
