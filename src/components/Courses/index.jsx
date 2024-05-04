import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const Index = () => {


    return (
        <div className='courses'>
            <div className="type">
                <div className="category">Quiz</div>
                <div className="chapitres">
                    <Link to='/lesson'>

                        <div className="chapitre hoverable">
                            <div className="image">
                                <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/language.jpg"} alt="" />
                            </div>
                            <div className="infos">
                                <div className="title">Langue et communication</div>
                                <div className="libelle">Apprendre à parler et à comprendre la langue humaine pour pouvoir communiquer efficacement avec les autres.</div>
                            </div>
                        </div>

                    </Link>
                    <div className="chapitre hoverable">
                        <div className="image">
                            <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/culture.jpg"} alt="" />

                        </div>
                        <div className="infos">
                            <div className="title">Culture et coutumes </div>
                            <div className="libelle">Comprendre les différentes cultures, traditions et coutumes humaines pour m'intégrer harmonieusement dans la société.</div>
                        </div>
                    </div>
                    <div className="chapitre hoverable">
                        <div className="image">
                            <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/emotion.jpg"} alt="" />

                        </div>
                        <div className="infos">
                            <div className="title">Émotions et comportements</div>
                            <div className="libelle"> Apprendre à reconnaître et à comprendre les émotions humaines, ainsi que les comportements sociaux appropriés dans différentes situations.</div>
                        </div>
                    </div>
                    <div className="chapitre hoverable">
                        <div className="image">
                            <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/higiene.jpg"} alt="" />

                        </div>
                        <div className="infos">
                            <div className="title">Hygiène personnelle</div>
                            <div className="libelle">Comprendre l'importance de l'hygiène personnelle et apprendre les habitudes de propreté pour maintenir une apparence soignée</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="type">

                <div className="category">Tutorials video</div>
                <div className="chapitres">
                    <div className="chapitre hoverable">
                        <div className="image">
                            <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/language.jpg"} alt="" />
                        </div>
                        <div className="infos">
                            <div className="title">Langue et communication</div>
                            <div className="libelle">Apprendre à parler et à comprendre la langue humaine pour pouvoir communiquer efficacement avec les autres.</div>
                        </div>
                    </div>
                    <div className="chapitre hoverable">
                        <div className="image">
                            <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/culture.jpg"} alt="" />

                        </div>
                        <div className="infos">
                            <div className="title">Culture et coutumes </div>
                            <div className="libelle">Comprendre les différentes cultures, traditions et coutumes humaines pour m'intégrer harmonieusement dans la société.</div>
                        </div>
                    </div>
                    <div className="chapitre hoverable">
                        <div className="image">
                            <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/emotion.jpg"} alt="" />

                        </div>
                        <div className="infos">
                            <div className="title">Émotions et comportements</div>
                            <div className="libelle"> Apprendre à reconnaître et à comprendre les émotions humaines, ainsi que les comportements sociaux appropriés dans différentes situations.</div>
                        </div>
                    </div>
                    <div className="chapitre hoverable">
                        <div className="image">
                            <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/higiene.jpg"} alt="" />

                        </div>
                        <div className="infos">
                            <div className="title">Hygiène personnelle</div>
                            <div className="libelle">Comprendre l'importance de l'hygiène personnelle et apprendre les habitudes de propreté pour maintenir une apparence soignée</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Index