import React from 'react'
import "./CourseCard.css"

function CourseCard({ title, cardNo, bgColor, color }) {
  const [title1, title2] = [title.substring(0, title.indexOf(' ')), title.substring(title.indexOf(' ') + 1)];
  const prevCardNo = cardNo !== 1 ? (cardNo - 1) : null;
  const nextCardNo = cardNo !== 5 ? (cardNo + 1) : null;
  const numStyle = {
    WebkitTextStroke: `2px ${color}`,
    MozTextStroke: `2px ${color}`,
    msTextStroke: `2px ${color}`,
    textStroke: `2px ${color}`
  };

  const scrollNext = () => {
    let container = document.querySelector('.courseScreen__card');
    let width = window.innerWidth;
    container.scrollLeft = container.scrollLeft + width ;
    console.log(container.scrollLeft);
    console.log(width);
  }
  const scrollPrev = () => {
    let container = document.querySelector('.courseScreen__card');
    let width = window.innerWidth;
    container.scrollLeft = container.scrollLeft - width ;
  }
  return (
    <div style={{ backgroundColor: bgColor, color: color }} className='courseCard z-0'>
      {prevCardNo && <img className='courseCard__prevButton' onClick={scrollPrev} src={require(`../assets/cardImage${prevCardNo}.png`)} alt="" />}
      {nextCardNo && <img className='courseCard__nextButton ' onClick={scrollNext} src={require(`../assets/cardImage${nextCardNo}.png`)} alt="" />}
      <h1 className='translate-y-8 -z-1'>{title1}</h1>
      <img className='w-1/3 z-0 object-contain' src={require(`../assets/cardImage${cardNo}.png`)} alt="" />
      <h1 className='-translate-y-16 '>
        {title2}
        <p style={numStyle}>{`0${cardNo}`}</p>
      </h1>

    </div>
  )
}

export default CourseCard