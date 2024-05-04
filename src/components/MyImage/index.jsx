import React from 'react'
import './style.scss'

const Index = ({ image}) => {
    return (
        <div className='my-image-container'>
            <img src={`assets/images/${image}`} alt="" />
        </div>
    )
}

export default Index