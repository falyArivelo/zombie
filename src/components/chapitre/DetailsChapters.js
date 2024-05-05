import React, { useState, useEffect } from 'react';
import apiClient from '../../apiClient';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.scss'
import Lottie from 'lottie-react';
import animation from '../../assets/hand-loading.json';
import { motion as m } from 'framer-motion'
import { GrValidate } from "react-icons/gr";

const ChapterDetails = () => {
  const { chapterId } = useParams(); // Extract chapterId from URL parameters
  // console.log(chapterId);
  const [details, setDetails] = useState(null);
  const [chapitre, setChapitre] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [idUser, setUserId] = useState();


  useEffect(() => {

    const userDataString = localStorage.getItem('user');
    const userData = JSON.parse(userDataString);

    setUserId(userData.idUser)

    const fetchData = async () => {


      try {
        const response = await apiClient.get(`/chapitres/${chapterId}`);
        const chapterResponse = await apiClient.get(`/details-chapitres/chapitre/${chapterId}`);
        const chapterData = await chapterResponse.data;

        setChapitre(response.data);
        // console.log(response.data);
        setDetails(chapterData);

        // Fetch quiz data related to the chapter
        const quizResponse = await apiClient.get(`/quizz/quizzParChapitre/${idUser}/${chapterId}`);
        setQuiz(quizResponse.data); // Assuming the response data is the quiz object
        console.log(quizResponse.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, [chapterId]);


  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <m.div className='detailsChapter'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .2, delay: .3 }}
      exit={{ opacity: 0 }}
    >
      <div className='entete'>{chapitre.chapitre}</div>
      <h4>Titles</h4>
      <ol className='paragraphes'>
        {details.map((chapter) => (
          <li key={chapter.idDetailsChapitre}>
            <div className='title'>
              {chapter.titre}
               {/* <span className='validated'><GrValidate size={24} color='cyan' /></span> */}
            </div>

            <Link className='view hoverable' to={`/chapter-details-details/${chapter.id_chapitre}/${chapter.id_details_chapitre}`}>View Lesson</Link>

          </li>
        ))}
      </ol>
      {quiz ? (
        quiz.quizz && quiz.quizz.length > 0 ? (
          <div>
            <h5>Your current score : {quiz.note.score}</h5>
            <Link className='view hoverable' to={`/quiz-page/${chapterId}`}>View Quizz</Link>
          </div>
        ) : (

          <Lottie className='hand-loading' animationData={animation}> </Lottie>
        )
      ) : (
        <></>

        // <Lottie className='hand-loading' animationData={animation}> </Lottie>

      )}
    </m.div>
  );
};

export default ChapterDetails;
