import React, { useState } from 'react'
import './Popup.css'
import { popupDetails } from './themeDetails'
import closeButton from '../assets/close.svg'

function Popup({ expand,setExpand, cardNo }) {
  const { title, bgLeft, bgRight, colorLeft } = popupDetails[cardNo - 1];
  const stylesLeft = {
    backgroundColor: bgLeft,
    color: colorLeft
  };
  const [showText, setShowText] = useState(false);
  const stylesRight = {
    backgroundColor: bgRight,
    color: 'black'
  }
  const numStyle = {
    WebkitTextStroke: `2px ${colorLeft}`,
    MozTextStroke: `2px ${colorLeft}`,
    msTextStroke: `2px ${colorLeft}`,
    textStroke: `2px ${colorLeft}`
  };

  const WeekElement = ({ weekNo }) => {
    const [showContent, setShowContent] = useState(false);
    const handleClick = () => {
      setShowContent(!showContent);
    }
    return (
      <div className='popup__right_weekElement px-5 py-2'>
        <div className='flex items-center'>
          <h1 className='flex-1 flex items-center'>WEEK {weekNo}</h1>
          <img onClick={handleClick} className={`text-black w-6 cursor-pointer ${showContent ? 'rotate-45 duration-300' : 'rotate-90 duration-500'}`} src={closeButton} alt="" />
        </div>
        <div className='overflow-hidden'>
          {<p className={`popup__right_weekElementExpand ${showContent ? 'show' : ''}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui ullam, perferendis fuga ab corrupti repellendus accusantium ipsum laborum rerum modi repellat consectetur quo esse unde amet distinctio ea voluptates.
          </p>}
        </div>
      </div>
    )
  }

  const handleClose = () => {
    const element = document.querySelector('.popup');
    element.classList.remove('enter-animation');
    element.classList.add('exit-animation');
    setTimeout(() => {
      element.classList.remove('exit-animation');
      setExpand(false);
    }, 500);
    
  }
  return (
    expand ?
      (
        <div className="popup__outer">
          <div className={`popup ${expand ? 'enter-animation' : 'exit-animation'}`}>

            <div style={stylesLeft} className="popup__left">
              <div className="popup__left_closeButton">
                <svg className='cursor-pointer' onClick={handleClose} width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.1464 51.3536L19.5 51.7071L19.8536 51.3536L33.5 37.7071L47.1464 51.3536L47.5 51.7071L47.8536 51.3536L51.3536 47.8536L51.7071 47.5L51.3536 47.1464L37.7071 33.5L51.3536 19.8536L51.7071 19.5L51.3536 19.1464L47.8536 15.6464L47.5 15.2929L47.1464 15.6464L33.5 29.2929L19.8536 15.6464L19.5 15.2929L19.1464 15.6464L15.6464 19.1464L15.2929 19.5L15.6464 19.8536L29.2929 33.5L15.6464 47.1464L15.2929 47.5L15.6464 47.8536L19.1464 51.3536Z" fill={colorLeft} stroke={colorLeft} />
                  <rect x="2" y="2" width="63" height="63" rx="31.5" stroke={colorLeft} stroke-width="4" />
                </svg>

              </div>
              <div className="popup__left_title">
                {title.split(' ').map((word, index) => {
                  return (
                    <h1 key={index}>{word}</h1>
                  )
                })}
              </div>
              <div className='popup__left_num' style={numStyle}>
                0{cardNo}
              </div>
            </div>
            <div style={stylesRight} className="popup__right overflow-y-scroll">
              <div className="popup__right_item mt-14 m-10">
                <h2>01</h2>
                < hr className='border-gray-300 ' />
                <h1>
                  OVERVIEW
                </h1>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, atque placeat eos nesciunt cumque, officia quis qui deserunt quas totam velit amet earum minus ut! Quae facilis voluptatem alias voluptates nam aliquid cumque ex corporis beatae veritatis cum vitae nihil deleniti voluptatum, porro quisquam necessitatibus ipsa provident voluptatibus non repellat.
                  <br /><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non expedita cupiditate ipsum in minima quo nesciunt <span className={!showText && 'hidden'}> aperiam dolor, possimus corrupti repellendus dolore nam. Deserunt, nostrum nulla! Quaerat quo saepe eum harum dicta expedita iure itaque, blanditiis voluptatem aliquid voluptate mollitia fugit? Numquam blanditiis, esse voluptatibus nobis minima laudantium vitae sunt! Quidem aut neque maiores omnis nesciunt ad unde iste</span>
                  {!showText && <button onClick={() => setShowText(true)} className='block underline'><br />Read more</button>}
                </p>
              </div>
              <div className="popup__right_item mt-14 m-10">
                <h2>02</h2>
                < hr className='border-gray-300 ' />
                <h1>
                  TASK LIST
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, atque placeat eos nesciunt cumque, officia quis qui deserunt quas totam velit amet earum minus ut! Quae facilis voluptatem alias voluptates nam aliquid cumque ex corporis beatae veritatis cum vitae nihil deleniti voluptatum, porro quisquam necessitatibus ipsa provident voluptatibus non repellat.
                </p>
                <div className="popup__right_weekElementContainer space-y-4 my-4">
                  <WeekElement weekNo={'01'} />
                  <WeekElement weekNo={'02'} />
                  <WeekElement weekNo={'03'} />
                </div>
              </div>
              <div className="popup__right_item mt-14 m-10">
                <h2>03</h2>
                < hr className='border-gray-300' />
                <h1>
                  SUBMISSION
                </h1>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, atque placeat eos nesciunt cumque, officia quis qui deserunt quas totam velit amet earum minus ut! Quae facilis voluptatem alias voluptates nam aliquid cumque ex corporis beatae veritatis cum vitae nihil deleniti voluptatum, porro quisquam necessitatibus ipsa provident voluptatibus non repellat.
                </p>
              </div>

            </div>
          </div>
        </div>
      ) : ''
  )
}

export default Popup
