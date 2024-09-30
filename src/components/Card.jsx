import React from 'react'

const Card = ({children}) => {
  return (
    <div className="h-auto border-2 border-cyan-800 bg-cyan-400 my-6 mx-32 py-2 px-2 rounded-xl flex flex-col items-center ">
        {children}
    </div>
  )
}

export default Card