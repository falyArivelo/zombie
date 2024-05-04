import React from 'react'
import './style.scss'

const Index = ({ data }) => {
    return (
        <div className='title'>
            <div className="entete">{data.entete}</div>
            <div className="paragraphe">
                {data.paragraphe}
            </div>
            <div className="images">
                <div className="image">
                    <img src={process.env.REACT_APP_REPOSITORY +data.image} alt="" srcset="" />
                </div>
            </div>

        </div>
    )
}

export default Index