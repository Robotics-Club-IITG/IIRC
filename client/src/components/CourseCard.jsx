/* This is a React component called `CourseCard` that takes in four props: `title`, `cardNo`,
`bgColor`, and `color`. It renders a card with an image, title, and number. It also includes
functions to scroll to the previous or next card when the corresponding buttons are clicked. The
component also imports a CSS file for styling. */
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
    <div style={{ backgroundColor: bgColor, color: color }} className={`courseCard z-0 ${'courseCard__'+cardNo}`}>
      {prevCardNo && <img className='courseCard__prevButton' onClick={scrollPrev} src={require(`../assets/cardImage${prevCardNo}.png`)} alt="" />}
      {nextCardNo && <img className='courseCard__nextButton ' onClick={scrollNext} src={require(`../assets/cardImage${nextCardNo}.png`)} alt="" />}
      <h1 className='translate-y-8'>{title1}</h1>
      <img className='w-1/3 z-0 object-contain' src={require(`../assets/cardImage${cardNo}.png`)} alt="" />
      <h1 className='-translate-y-16 '>
        {title2}
        <p style={numStyle}>{`0${cardNo}`}</p>
      </h1>

    </div>
  )
}

export default CourseCard