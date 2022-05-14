import React from 'react'
import SliderUrl from "asset/origin-banner.png"
const Slider = () => {
  return (
    <div className='slider'>
        <div className="container">
            <img className='slider__bg' src={SliderUrl} alt="" />
            {/* <div className='slider__dark'></div> */}
        </div>
    </div>
  )
}

export default Slider