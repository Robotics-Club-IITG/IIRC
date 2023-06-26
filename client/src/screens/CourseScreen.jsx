import React from 'react'
import CourseCard from '../components/CourseCard'
import './CourseScreen.css'
import { cardDetails } from '../components/themeDetails'
function CourseScreen() {
  
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