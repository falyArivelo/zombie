import React, { useEffect, useState } from 'react'
import './style.scss'
import { motion as m } from 'framer-motion'

import { apiClient } from '../../servuce/ApiClient'
import { imageVariants } from '../../motions/animation'
import { Link } from 'react-router-dom'

const Index = () => {
    const [chapitres, setChapitres] = useState([{}])

    useEffect(() => {
        const fetchChapters = async () => {
            const response = await apiClient.get('/chapitres');
            console.log(response)
            setChapitres(response.data);
        };
        console.log("chapitres");

        fetchChapters();
    }, []);


    return (
        <div className='courses'>
            <div className="type">
                <div className="category">Courses</div>
                <div className="chapitres">
                    {chapitres.map((chapitre, index) => (
                        <Link to={`/chapter-details/${chapitre.idChapitre}`}>
                            <m.div key={index}
                                initial="initial"
                                animate="animate"
                                exit={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', transition: { duration: .3, delay: Math.abs(index * 0.1 - (0.1 * 4)) } }}
                                transition={{ duration: .5, delay: index * 0.1 + 0.5 }} // Décalage de 0.3s entre chaque image
                                variants={imageVariants}
                                className="chapitre hoverable">
                                <div className="image">
                                    {chapitre.image && (
                                        <m.img
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: .2, delay: .3 }}
                                            exit={{ opacity: 0 }}
                                            src={process.env.REACT_APP_REPOSITORY + "/assets/images/" + chapitre.image} alt={chapitre.image} />
                                    )}
                                </div>
                                <div className="infos">
                                    <div className="title">{chapitre.chapitre}</div>
                                </div>
                            </m.div>

                        </Link>
                    ))}
                </div>

            </div>

        </div>

    )
}

export default Index
