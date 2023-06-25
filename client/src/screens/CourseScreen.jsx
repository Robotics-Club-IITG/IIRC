import React from 'react'
import CourseCard from '../components/CourseCard'
import './CourseScreen.css'

function CourseScreen() {
  const cardDetails = [
    {title:'COMPUTER VISION',bgColor:'#F7ACAC',color:'#EA1B0E'},
    {title:'OPERATING ROS',bgColor:'#FFD249',color:'#EA1B0E'},
    {title:'STRUCTURE ANSYS',bgColor:'#E27391',color:'#BF4C6B'},
    {title:'AUTOCAD FUSION 360',bgColor:'#B09675',color:'#604442'},
    {title:'ARTIFICIAL INTELLIGENCE',bgColor:'#D4B6D4',color:'#B595BF'},
  ];
  
  return (
    <div className='courseScreen'>
      <div className="courseScreen__card">
      {
        cardDetails.map((detail, index) => {
          var {title , bgColor , color} = detail;
          return <CourseCard key={index} title={title} bgColor={bgColor} color={color} cardNo={index+1} />
        })
      }
      </div>
      
    </div>
  )
}

export default CourseScreen