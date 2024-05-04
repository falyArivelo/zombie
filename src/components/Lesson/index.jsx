import React from 'react'
import './style.scss'
import Title from '../Title';
import Quiz from '../Quiz';

const Index = () => {
    // const { chapterId } = useParams(); // Extract chapterId from URL parameters
    //     console.log(chapterId);
    // const [details, setDetails] = useState(null);
    // const [chapitre, setChapitre] = useState(null);
    // const [quiz, setQuiz] = useState(null);

    const jsonData = {
        entete: "Langue et communication",
        paragraphe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam qui enim accusamus quae possimus maiores architecto fugit, dicta, quibusdam eligendi nisi, temporibus libero vitae. Harum magni mollitia quas doloribus perspiciatis.",
        image: "./assets/images/bocasay.jpg",
        videoId: "REPkDlRMQNs",
    };

    return (
        <div className='lesson'>
            <Title data={jsonData} />

            <Title data={jsonData} />

            <Title data={jsonData} />

            <Quiz />

        </div>
    )
}

export default Index