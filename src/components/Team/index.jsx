import React from 'react'
import MyImage from '../MyImage'
import './style.scss'

const index = () => {
    return (
        <div className='team'>

            <div className="teammate">
                <MyImage image={"pdp.jpg"} />
            </div>

            <div className="teammate">
                <MyImage image={"pdp.jpg"} />
            </div>

            <div className="teammate">
                <MyImage image={"pdp.jpg"} />
            </div>

            <div className="teammate">
                <MyImage image={"pdp.jpg"} />
            </div>

        </div>
    )
}

export default index