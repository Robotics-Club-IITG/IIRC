import React from 'react'
import './LeaderBoardNav.css'

function LeaderBoardNav({ active, setActive, style }) {
  const itemName = ['CV', 'ROS', 'ANSYS', 'FUSION'];

  return (
    <div className='leaderBoardNav p-1' style={style}>
      {itemName.map((item, index) => {
        return (
          <div 
          key={index}
          onClick={() => {
            setActive(index);
          }}
          className={`p-2 cursor-pointer ${index === active ? 'active' : ''}`}
          >{item}</div>
        )
      })}
    </div>
  )
}

export default LeaderBoardNav