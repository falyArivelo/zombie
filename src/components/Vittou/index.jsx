import React, { useEffect, useRef, useState } from 'react'
import './style.scss'

import { granim_image, charByCharNoTrigger } from '../../motions/animation'
import { useGSAP } from '@gsap/react'
import { LuSend } from "react-icons/lu";
import { BsSoundwave } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import axios from 'axios';
const Index = () => {

    const [userId, setUserId] = useState(null);
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const [chat, setChat] = useState([
        // Initialiser le chat avec le message existant

    ]);

    const chatRef = useRef(null);


    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
        granim_image("#canvas-image-blending", process.env.REACT_APP_REPOSITORY +'/assets/images/vittou.jpg');

        const userDataString = localStorage.getItem('user');
        const userData = JSON.parse(userDataString);

        setUserId(userData.idUser)

    }, [])

    useGSAP(() => {
        charByCharNoTrigger(".bot_presentation")
    })


    const ask = async (message) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}/brain-shop/${userId}/${message}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Réponse de l\'API:', response.data);

            // Mettre à jour le chat avec la question et la réponse
            setChat(prevChat => [
                ...prevChat,
                { sender: 'me', content: message },
                { sender: 'bot', content: response.data.message }
            ]);

            // Faire défiler la vue pour afficher la réponse la plus récente
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        } catch (error) {
            console.error('Erreur lors de la récupération des données depuis l\'API:', error);
            // Gérez l'erreur de votre façon
        }
    };


    const handleAsk = () => {
        ask(message); // Appeler la fonction ask avec le contenu de l'entrée de texte
        setMessage(''); // Réinitialiser l'entrée de texte après avoir envoyé la question
    };

    return (
        <div className='vittou'>
            <div className="intern">
                <div className="illustrations">
                    <canvas id="canvas-image-blending"></canvas>
                </div>
                <div className="ask">
                    <div className="bot_presentation">
                        Hi ! I'm Vittou , team Vittoria's bot . How can I help you ?
                    </div>
                    <div ref={chatRef} className="interation">
                        {chat.map((item, index) => (
                            <div key={index} className={item.sender}>
                                {item.content}
                            </div>
                        ))}
                    </div>


                    <div className='input_question'>
                        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}
                            placeholder='Ask me anything' />


                        <button className='send' onClick={handleAsk}>
                            <LuSend size={23} color='black' />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index