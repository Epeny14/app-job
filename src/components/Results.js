import React, { useState } from "react";


import { useLocation } from "react-router-dom";

import { useNavigate } from 'react-router-dom';


import '../styles/results.css';

import { Link } from "react-router-dom";

import Img16 from '../img/arrow-right.png';
import Img13 from '../img/arrow-left.png';

const Results = () => {
    // Initialisation des états pour la couleur des boutons Oui et Non
    // const [ouiColor, setOuiColor] = useState(''); // Pas de couleur par défaut
    // const [nonColor, setNonColor] = useState(''); // Pas de couleur par défaut

    const [selectedOption, setSelectedOption] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setErrorMessage(''); // Réinitialise le message d'erreur
    };

    const handleValidate = () => {
        if (!selectedOption) {
            setErrorMessage('Veuillez sélectionner une option.');
        } else {
            // Redirige vers une autre page en fonction de l'option sélectionnée
            navigate(selectedOption === 'non' ? '/situation' : '/situation');

            // Redirige vers une autre page en fonction de l'option sélectionnée
            navigate(selectedOption === 'oui' ? '/situation' : '/situation');
        }
    };



    const location = useLocation();
    const { formData } = location.state || {};

    if (!formData) {
        return <p>Aucune donnée de formulaire disponible</p>;
    }



    // Fonction pour gérer le clic sur le bouton Oui
    // const handleOuiClick = () => {
    //     setOuiColor('#087ACC'); // Changer la couleur en vert
    //     setNonColor(''); // Réinitialiser la couleur du bouton Non
    // };

    // Fonction pour gérer le clic sur le bouton Non
    // const handleNonClick = () => {
    //     setNonColor('#087ACC'); // Changer la couleur en rouge
    //     // setOuiColor(''); // Réinitialiser la couleur du bouton Oui
    // };

    return (
        <div>
            <div className="smartphone-5">
                <div className="screen-5">
                    <div className='header-500'>
                        <div>
                            <Link to="/formulaire">
                                <img src={Img13} alt="arrow" className='arrow-left-500'></img>
                            </Link>
                        </div>
                        <div className="result-display">
                            <div>
                                <p className="actu-600"> Mes activités</p>
                            </div>
                            <div>
                                <p className="actu-500"> Période du 01 au 30 séptembre</p>
                            </div>
                        </div>
                        <div class="horizontal-line-500"></div>
                    </div>

                    <div className="border-result">
                        <div className="border-60">
                            <div>
                                <p className="text-complete">Connue - à completer</p>
                            </div>
                        </div>
                        <div className="section-50">
                            <div>
                                <p className="text-result">Artek</p>
                                <p className="text-emploi-1">pour un employeur</p>
                                <p className="text-emploi-12">Du {formData.date} au {formData.dates} </p>
                            </div>
                            <div>

                                <img src={Img16} alt="arrow-left" className="arrows-result"></img>

                            </div>
                        </div>
                    </div>

                    <hr className="line-horizontale" />

                    <div className="text-section-12">
                        <p className="under-text-14">J'ai eu une autre activité pour un</p>
                        <p className="under-text-15">employeur et/ou j'ai une autre</p>
                        <p className="under-text-16">entreprise</p>
                    </div>

                    <div className="section-result">



                        <button className="button-3"
                            onClick={() => handleOptionSelect('oui')}
                            style={{ backgroundColor: selectedOption === 'oui' ? '#087ACC' : '#f2f5f9' }}
                        >
                            OUI
                        </button>

                        <button className="button-4"

                            onClick={() => handleOptionSelect('non')}
                            style={{ backgroundColor: selectedOption === 'non' ? '#087ACC' : '#F2F5F8' }}
                        >
                            NON
                        </button>
                    </div>

                    <div className="oclock-result">
                        <div className="under-oclock-2">
                            <div className="time-1">
                                <p className="text-time">Heures Totales</p>
                                <p className="under-time-3">{formData.texte} h</p>
                            </div>
                            <div className="price-1">
                                <p className="text-price">Montant total</p>
                                <p className="under-price-3">{formData.price} €</p>
                            </div>
                        </div>



                        <div>
                            <div className="button-result">
                                {/* <Link to="/situation" className="link-situation">
                                    <p className="paragraph-oclock-10">Poursuivre</p>
                                </Link> */}
                                <div className="link-situation">
                                    <button className="paragraph-oclock-10" onClick={handleValidate}>Poursuivre</button>
                                    {errorMessage && <p className="text-erreur">{errorMessage}</p>}
                                </div>




                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};
export default Results;
