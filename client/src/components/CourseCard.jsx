import React, { useState } from 'react'
import "./CourseCard.css"
import Popup from './Popup';
import Navbar from './Navbar';

function CourseCard({ title, cardNo, bgColor, color }) {
  const [expand, setExpand] = useState(false);
  const [title1, title2] = [title.substring(0, title.indexOf(' ')), title.substring(title.indexOf(' ') + 1)];
  const prevCardNo = cardNo !== 1 ? (cardNo - 1) : null;
  const nextCardNo = cardNo !== 4 ? (cardNo + 1) : null;
  const numStyle = {
    WebkitTextStroke: `2px ${color}`,
    MozTextStroke: `2px ${color}`,
    msTextStroke: `2px ${color}`,
    textStroke: `2px ${color}`
  };

  const scrollNext = () => {
    let container = document.querySelector('.courseScreen__card');
    let currentCard = document.querySelector(`.courseCard__${cardNo}`);
    let nextCard = document.querySelector(`.courseCard__${cardNo + 1}`);
    nextCard.classList.add('slideIn-animation');
    nextCard.classList.add('z-10');
    document.querySelector('.app').style.backgroundColor = bgColor;
    console.log(document.querySelector('.app').style.backgroundColor);
    let width = window.innerWidth;
    setTimeout(() => {
      currentCard.classList.add('opacity-0');
      nextCard.classList.remove('slideIn-animation');
      container.scrollLeft += width;
      currentCard.classList.remove('opacity-0');
      nextCard.classList.remove('z-10');
    }, 500);
  };

  const scrollPrev = () => {
    let container = document.querySelector('.courseScreen__card');
    let currentCard = document.querySelector(`.courseCard__${cardNo}`);
    let prevCard = document.querySelector(`.courseCard__${cardNo - 1}`);
    prevCard.classList.add('slideOut-animation');
    prevCard.classList.add('z-10');
    let width = window.innerWidth;
    setTimeout(() => {
      currentCard.classList.add('opacity-0');
      prevCard.classList.remove('slideOut-animation');
      container.scrollLeft -= width;
      currentCard.classList.remove('opacity-0');
      prevCard.classList.remove('z-10');
    }, 500);
  };
  return (
    <div className='relative'>

      <div style={{ backgroundColor: bgColor, color: color }} className={`courseCard z-0 ${'courseCard__' + cardNo}`}>
        <div className="cardNav absolute top-0 left-0 w-full"><Navbar  color={color} bgColor={bgColor} /></div>
        <div className="separator min-h-[30vh]"></div>
        {prevCardNo && <img className='courseCard__prevButton cursor-pointer hover:scale-110 duration-300 ease-in-out' onClick={scrollPrev} src={require(`../assets/cardImage${prevCardNo}.png`)} alt="" />}
        {nextCardNo && <img className='courseCard__nextButton cursor-pointer hover:scale-110 duration-300 ease-in-out' onClick={scrollNext} src={require(`../assets/cardImage${nextCardNo}.png`)} alt="" />}
        <h1 onClick={() => setExpand(true)} className='translate-y-8 cursor-pointer'>{title1}</h1>
        <img onClick={() => setExpand(true)} className='w-1/3 z-0 object-contain cursor-pointer' src={require(`../assets/cardImage${cardNo}.png`)} alt="" />
        <h1 onClick={() => setExpand(true)} className='-translate-y-16 cursor-pointer '>
          {title2}
          <p style={numStyle}>{`0${cardNo}`}</p>
        </h1>
      </div>
      <div className={`courseCard__popup ${expand ? '':'hidden'}`} >
        {expand && <Popup expand={expand} setExpand={setExpand} cardNo={cardNo} />}
      </div>
    </div>
  )
}

export default CourseCard