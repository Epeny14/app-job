import React from "react";


import '../styles/resume.css';
import { Link } from "react-router-dom";

import Img13 from '../img/arrow-left.png';
import '../styles/headers-10.css';

const Resume = () => {
    return (
        <div>
            <div className="smartphone-6">
                <div className="screen-6">

                    <div className='header-150'>
                        <div>
                            <Link to="/formulaire">
                                <img src={Img13} alt="arrow" className='arrow-left-150'></img>
                            </Link>

                        </div>
                        <div>
                            <p className="actu-150">Mon actualisation</p>
                            <p className="actu-160">Période du 01 au 30 août 2024</p>
                        </div>

                        <div class="horizontal-line-90"></div>
                    </div>

                    <div className="section-border-25">
                        <div>
                            <h3 className="title-resume">Mes activités</h3>
                            <p className="paragraph-job-1">CDD, CDI, intérim, auto-</p>
                            <p className="paragraph-30">entreprise ...</p>
                            <p className="paragraph-40">1 activité renseignée</p>
                        </div>
                    </div>

                    <div className="section-border-30">
                        <div className="section-resume">
                            <p>Mes situations particulières</p>
                            <p>Arrêt maladie, formation...</p>

                        </div>
                        <div className="section-border-55">
                            <Link to="/questionnaire" className="link-20"><p className="paragraph-start-1">Continuer</p></Link>
                        </div>
                    </div>

                    <div className="section-border-15">
                        <div className="resume-55">
                            <p className="under-resume-1">Valider ma déclaration</p>
                            <p>Terminer mon actualisation</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Resume;