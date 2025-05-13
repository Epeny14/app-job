import React, { useState } from "react";


import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";



import '../styles/question.css';

import Img13 from '../img/arrow-left.png';
import '../styles/headerquestion.css';

const Question = () => {
    // /State pour gérer les boutons sélectionnés (true pour "OUI", false pour "NON")
    const [answers, setAnswers] = useState({
        question1: null,
        question2: null,
        question3: null,
    });

    const [errorMessage, setErrorMessage] = useState('');

    // Fonction pour gérer la sélection des boutons
    const handleSelection = (question, answer) => {
        setAnswers({
            ...answers,
            [question]: answer,
        });
    };

    // Vérifie si tous les boutons "NON" sont sélectionnés
    const allNonSelected =
        answers.question1 === false &&
        answers.question2 === false &&
        answers.question3 === false;

    const navigate = useNavigate();

    // Fonction pour passer à la page suivante
    const goToNextPage = () => {
        if (allNonSelected) {

            // Logique pour changer de page, par exemple utiliser react-router
            navigate('/validation');

        } else {
            setErrorMessage("Vous devez sélectionner 'OUI' ou 'NON' pour toutes les questions avant de valider.");
        }
    };

    return (
        <div>
            <div className="smartphone-7">
                <div className="screen-7">
                    <div className='header-question-1'>
                        <div>
                            <Link to="/situation">
                                <img src={Img13} alt="arrow" className='arrow-left-question'></img>
                            </Link>
                        </div>
                        <div>
                            <p className="actu-question-100">Mes situations particulières</p>
                            <p className="actu-question-110">Période du 01 au 30 août 2024</p>
                        </div>

                        <div class="horizontal-line-7"></div>
                    </div>

                    <div className="section-question">
                        <p className="text-formation-1">Jai été en formation</p>

                        <button className="button-10"
                            style={{
                                backgroundColor: answers.question1 === true ? "#087ACC" : "",
                            }}
                            onClick={() => handleSelection("question1", true)}
                        >
                            OUI
                        </button>





                        <button className="button-11"
                            style={{
                                backgroundColor: answers.question1 === false ? "#087ACC" : "",
                            }}
                            onClick={() => handleSelection("question1", false)}
                        >
                            NON
                        </button>

                    </div>




                    <div class="horizontal-line-question-1"></div>

                    <div className="section-question-1">
                        <p className="text-formation-2">Jai été en arrêt maladie ou en congé maternité</p>

                        <button className="buttons-12"
                            style={{
                                backgroundColor: answers.question2 === true ? "#087ACC" : "",
                            }}
                            onClick={() => handleSelection("question2", true)}
                        >
                            OUI
                        </button>

                        <button className="buttons-13"
                            style={{
                                backgroundColor: answers.question2 === false ? "#087ACC" : "",
                            }}
                            onClick={() => handleSelection("question2", false)}
                        >
                            NON
                        </button>
                    </div>

                    <div class="horizontal-line-question-2"></div>

                    <div className="section-question-2">
                        <p className="text-formation-3">Jai perçu une nouvelle pension <br />
                            d'invalidité ou une nouvelle <br />
                            pension de retraite
                        </p>

                        <button className="buttons-14"
                            style={{
                                backgroundColor: answers.question3 === true ? "#087ACC" : "",
                            }}
                            onClick={() => handleSelection("question3", true)}
                        >
                            OUI
                        </button>

                        <button className="buttons-15"
                            style={{
                                backgroundColor: answers.question3 === false ? "#087ACC" : "",
                            }}
                            onClick={() => handleSelection("question3", false)}
                        >
                            NON
                        </button>
                    </div>

                    <div>
                        {/* Bouton pour passer à la page suivante */}
                        <button className="button-next-question" onClick={goToNextPage}>Poursuivre</button>
                    </div>
                    {errorMessage && <p className="text-erreur-2" style={{ color: 'red' }}>{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default Question;