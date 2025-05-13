import React from "react";
import Img90 from '../img/arrow-right.png';
import Img91 from '../img/arrow-right.png';
import Img13 from '../img/arrow-left.png';

import { Link } from "react-router-dom";


import '../styles/validations.css';

const Validations = () => {
    return (
        <div>
            <div className="smartphone-8">
                <div className="screen-8">
                    <div className='header-validation-1'>
                        <div>
                            <Link to="/questionnaire">
                                <img src={Img13} alt="arrow" className='arrow-left-validation'></img>
                            </Link>
                        </div>
                        <div>
                            <p className="actu-validation-100">Mon actualisation</p>
                            <p className="actu-validation-110">Période du 01 au 30 août 2024</p>
                        </div>

                        <div class="horizontal-line-100"></div>
                    </div>

                    <div className="border-blue">
                        <div>
                            <p className="paragraph-blue">Mes activités</p>
                            <p className="paragraph-blue-2">CDD, CDI, intérim, auto-</p>
                            <p className="paragraph-blue-3">entreprise...</p>
                            <p className="text-02">1 activité renseignée</p>
                        </div>
                        <div>
                            <img src={Img90} className="border-image1" alt="arrow-right" />
                        </div>
                    </div>

                    <div className="border-box">
                        <div>
                            <p className="paragraph-box">Mes situations particulières</p>
                            <p className="paragraph-box-2">Arrêt maladie, formation... </p>
                            <p className="text-03">Aucune situation renseignée</p>
                        </div>
                        <div>
                            <img src={Img91} className="border-image2" alt="arrow-right" />
                        </div>
                    </div>

                    <div className="border-final">
                        <div>
                            <p className="paragraph-finals">Valider ma déclaration</p>
                            <p className="paragraph-finals-1">Terminer mon actualisation</p>
                        </div>
                        <div className="border-blues">
                            <Link to="/inscription" className="link-border">
                                <p className="text-blues">Finaliser</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Validations;