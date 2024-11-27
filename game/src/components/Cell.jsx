import React from 'react'

const Cell = ({value, onClick}) => {
  return (
    <div 
       className="w-24 h-24 bg-white text-2xl font-bold flex items-center justify-center 
                 border border-gray-400 cursor-pointer hover:bg-gray-200"
      onClick={onClick}
      >
      {value}
    </div>
  )
}

export default Cell
