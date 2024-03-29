/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Container({Children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>{Children}</div>
  )
}

export default Container
