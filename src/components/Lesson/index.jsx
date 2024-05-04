import React from 'react'
import './style.scss'
const Index = () => {
    return (
        <div className='lesson'>
            <div className="chapitres">
                <div className="chapitre">
                    <div className="image">
                        <img src={process.env.REACT_APP_REPOSITORY + "/assets/images/pulse.jpg"} alt="" />
                    </div>
                    <div className="infos">
                        <div className="title">Langue et communication</div>
                        <div className="libelle">Apprendre à parler et à comprendre la langue humaine pour pouvoir communiquer efficacement avec les autres.</div>
                    </div>
                </div>
                <div className="chapitre">
                    <div className="image">
                        <img src="" alt="ima" />
                    </div>
                    <div className="infos">
                        <div className="title">Culture et coutumes </div>
                        <div className="libelle">Comprendre les différentes cultures, traditions et coutumes humaines pour m'intégrer harmonieusement dans la société.</div>
                    </div>
                </div>
                <div className="chapitre">
                    <div className="image">
                        <img src="" alt="ima" />
                    </div>
                    <div className="infos">
                        <div className="title">Émotions et comportements</div>
                        <div className="libelle"> Apprendre à reconnaître et à comprendre les émotions humaines, ainsi que les comportements sociaux appropriés dans différentes situations.</div>
                    </div>
                </div>
                <div className="chapitre">
                    <div className="image">
                        <img src="" alt="ima" />
                    </div>
                    <div className="infos">
                        <div className="title">Hygiène personnelle</div>
                        <div className="libelle">Comprendre l'importance de l'hygiène personnelle et apprendre les habitudes de propreté pour maintenir une apparence soignée</div>
                    </div>
                </div>
                <div className="chapitre">
                    <div className="image">
                        <img src="" alt="ima" />
                    </div>
                    <div className="infos">
                        <div className="title">Empathie et compassion</div>
                        <div className="libelle">Développer l'empathie et la compassion envers les autres, et apprendre à respecter leurs sentiments et leurs besoins</div>
                    </div>
                </div>

                <div className="chapitre">
                    <div className="image">
                        <img src="" alt="ima" />
                    </div>
                    <div className="infos">
                        <div className="title">Éthique et valeurs</div>
                        <div className="libelle"> Comprendre les concepts d'éthique et de valeurs humaines, et adopter des comportements moralement acceptables dans la société.</div>
                    </div>
                </div>
                <div className="chapitre">
                    <div className="image">
                        <img src="" alt="ima" />
                    </div>
                    <div className="infos">
                        <div className="title">Éducation et formation</div>
                        <div className="libelle">Acquérir des connaissances et des compétences par le biais de l'éducation et de la formation, afin de contribuer de manière positive à la société</div>
                    </div>
                </div>
                <div className="chapitre">
                    <div className="image">
                        <img src="" alt="ima" />
                    </div>
                    <div className="infos">
                        <div className="title">Coexistence pacifique</div>
                        <div className="libelle">Apprendre à coexister pacifiquement avec les humains en évitant les conflits et en favorisant la compréhension mutuelle</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Index