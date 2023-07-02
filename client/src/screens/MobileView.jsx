import React, { useState } from 'react'
import { cardDetails } from '../components/themeDetails'
import Popup from '../components/Popup';
import Navbar from '../components/Navbar';

function MobileView() {
  const [expand, setExpand] = useState(false)
  const [cardNo, setCardNo] = useState(0);
  const MobileViewCard = ({ title, cardNo, bgColor, color }) =>{
    const styles = { 
      backgroundColor: bgColor,
      fontFamily :"Furore"
    }
    return (
      <div onClick={() => {
        setCardNo(cardNo);
        setExpand(true);
        }} style={styles} className='h-20 flex justify-center items-center border-black rounded-lg w-[80%] border-2 text-black'>
        <h1>{title}</h1>
      </div>
    )
  }
  return (
    <div className='text-white bg-[#FFD0D0] h-screen overflow-hidden'>
      <div className='mb-10'><Navbar bgColor={'#FFD0D0'} color={'black'}/></div>
      <div className='h-[80vh]  flex flex-col items-center space-y-10'>  
      {cardDetails.map((detail, index) => {
        return <MobileViewCard key={index} title={detail.title} cardNo={index+1} bgColor={detail.bgColor} color={detail.color} />
      })}
      </div>
      <div className={`courseCard__popup ${expand ? '':'hidden'}`} >
        {expand && <Popup expand={expand} setExpand={setExpand} cardNo={cardNo} />}
      </div>
    </div>
  )
}

export default MobileView