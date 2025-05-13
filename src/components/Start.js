import React from "react";
import '../styles/start.css';
import '../styles/headers.css';
import { Link } from "react-router-dom";

import Img15 from '../img/icons-rocket.png';

import Img13 from '../img/arrow-left.png';

const Start = () => {
    return (
        <div>
            <div className="smartphone-2">
                <div className="screen-2">
                    <div className='header-debut'>
                        <div>
                            <Link to="/savoir">
                                <img src={Img13} alt="arrow" className='arrow-left-debut'></img>
                            </Link>
                        </div>
                        <div>
                            <p className='text-actu'>Mon actualisation</p>
                            <p className='paragraph-period'>Période du 01 au 31 août 2024</p>
                        </div>
                        <div className="horizontal-line-1"></div>
                    </div>

                    <div className="section-border-2">
                        <div>
                            <h3 className="title-actu">Mes activités</h3>
                            <p className="paragraph-job">CDD, CDI, intérim, auto-</p>
                            <p className="paragraph-3">entreprise ...</p>
                        </div>
                        <div>
                            <div className="section-rocket">
                                <img src={Img15} alt="rocket" className="img-rocket-start"></img>
                                <Link to="/activité" className="link-2"><p className="paragraph-start">Démarrer</p></Link>
                            </div>
                        </div>
                    </div>

                    <div className="section-border-10">
                        <div className="under-border-70">
                            <p className="paragraph-situation">Mes situations particulières</p>
                            <p>Arrêt maladie, formation...</p>
                        </div>
                    </div>

                    <div className="section-border-11">
                        <div className="under-border-80">
                            <p className="paragraph-validation">Valider ma déclaration</p>
                            <p>Terminer mon actualisation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Start;