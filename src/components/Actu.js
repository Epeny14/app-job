import React, { useState } from "react";
import '../styles/actu.css';
import { Link } from "react-router-dom";

import Img16 from '../img/arrow-right.png'
import Img13 from '../img/arrow-left.png';
import '../styles/headeractu.css';

const Actu = () => {
    // Initialisation des états pour la couleur des boutons Oui et Non
    const [ouiColor, setOuiColor] = useState(''); // Pas de couleur par défaut
    const [nonColor, setNonColor] = useState(''); // Pas de couleur par défaut

    // Fonction pour gérer le clic sur le bouton Oui
    const handleOuiClick = () => {
        setOuiColor('#087ACC'); // Changer la couleur en vert
        setNonColor(''); // Réinitialiser la couleur du bouton Non
    };

    // Fonction pour gérer le clic sur le bouton Non
    const handleNonClick = () => {
        setNonColor('#087ACC'); // Changer la couleur en rouge
        setOuiColor(''); // Réinitialiser la couleur du bouton Oui
    };

    return (
        <div>
            <div className="smartphone-3">
                <div className="screen-3">
                    <div className='header-140'>
                        <div>
                            <Link to="/debut">
                                <img src={Img13} alt="arrow" className='arrow-left-140'></img>
                            </Link>
                        </div>
                        <div>
                            <p className="actu-130">Mes activités</p>
                            <p className="actu-120">Période du 01 au 30 août 2024</p>
                        </div>
                        <div class="horizontal-line-3"></div>
                    </div>

                    <div className="text-section-100">
                        <p className='text-job'>France Travail à connaisance des</p>
                        <p className='text-job'>activités suivantes, vérifiez-les et</p>
                        <p className='text-job'>complétez-les si nécessaire :</p>
                    </div>


                    <div className="border-actu">
                        <div className="border-50">
                            <div className="section-red">
                                <p className="under-text-red">Connue - à completer</p>
                            </div>
                        </div>
                        <div className="section-50">
                            <div>
                                <p className="text-service">Artek</p>
                                <p className="text-emploi">Pour un employeur</p>
                            </div>
                            <div>
                                <Link to="/formulaire" className="link-oclock">
                                    <img src={Img16} alt="arrow-left" className="arrows"></img>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <hr className="line-horizontale-1" />

                    <div className="text-section-11">
                        <p className="under-text-11">J'ai eu une autre activité pour un</p>
                        <p className="under-text-12">employeur et/ou j'ai une autre</p>
                        <p className="under-text-13">entreprise;</p>
                    </div>

                    <div className="section-choice-91">
                        <div className="button-1"
                            style={{ backgroundColor: ouiColor }} // Appliquer la couleur selon l'état
                            onClick={handleOuiClick} // Gérer le clic

                        >
                            <p className="under-button-1">Oui</p>
                        </div>

                        <div className="button-2"
                            style={{ backgroundColor: nonColor }} // Appliquer la couleur selon l'état
                            onClick={handleNonClick} // Gérer le clic
                        >
                            <p className="under-button-2">Non</p>
                        </div>
                    </div>

                    <div className="section-oclock">
                        <div className="under-oclock-1">
                            <div className="time">
                                <p>Heures Totales</p>
                                <p className="under-time-2">-</p>
                            </div>
                            <div className="price">
                                <p>Montant total</p>
                                <p className="under-price-2">-</p>
                            </div>
                        </div>
                        <div>
                            <div className="button-oclock">
                                <p className="paragraph-oclock">Poursuivre</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Actu;