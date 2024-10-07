import React from 'react'
import './Campus.css'
import gallary_1 from '/src/assets/gallery-1.png'
import gallary_2 from '/src/assets/gallery-2.png'
import gallary_3 from '/src/assets/gallery-3.png'
import gallary_4 from '/src/assets/gallery-4.png'
import white_arrow from '/src/assets/white-arrow.png'
const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={gallary_1} alt="" />
                <img src={gallary_2} alt="" />
                <img src={gallary_3} alt="" />
                <img src={gallary_4} alt="" />
            </div>

            <button className='btn dark-btn'>see more here <img src={white_arrow} alt="" /></button>
        </div>
    )
}

export default Campus
