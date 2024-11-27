import React from 'react'
import Cell from './Cell'

const Board = ({board , handleCellClick , winner}) => {
  return (
    <div className='grid grid-cols-3 place-content-center'>
       
        {board.map((cell,index) =>(
              <Cell
                key={index}
                value={cell}
                onClick={()=>(handleCellClick(index))}
                isWinner={winner}
              />
        ))}
    
    </div>
  )
}

export default Board
