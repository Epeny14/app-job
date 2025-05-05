import React from "react";
import '../styles/text.css';
import '../styles/header.css';
import Img14 from '../img/icon-check.png';
import { Link } from 'react-router-dom';

import Img13 from '../img/arrow-left.png';

const Text = () => {
    return (
        <div>
            <div className="smartphone-1">
                <div className="screen-1">
                    <div className='header'>
                        <div>
                            <Link to="/espace">
                                <img src={Img13} alt="arrow" className='arrow-left'></img>
                            </Link>
                        </div>
                        <div>
                            <p className='title-08'>À savoir</p>
                        </div>
                        <div className='horizontal-line'></div>
                    </div>

                    <div className='section-text'>
                        <div className='under-section-text'>
                            <p>Bienvenue dans votre</p>
                            <p>actualisation du mois d'avril</p>
                            <p>2024</p>
                        </div>
                        <div className='under-text-1'>
                            <div className='image-section'>
                                <img src={Img14} alt='check' className='img-check'></img>
                            </div>

                            <div className='paragraph-text-1'>
                                <p>Nous vous invitons à renseigner<br />  les informations nécessaires à la<br />
                                    mise à jour de votre situation, au<br />
                                    renouvellement de votre<br />
                                    inscription, et au versement de<br />
                                    vos allocations si vous avez des<br />
                                    droits.
                                </p>
                            </div>
                        </div>

                        <div className='under-text-2'>
                            <div className='image-section'>
                                <img src={Img14} alt='check' className='img-check'></img>
                            </div>

                            <div className='paragraph-text-2'>
                                <p>
                                    Les éléments connus en France<br />
                                    Travail sont affichés dans votre<br />
                                    déclaration. Vous ne remplisez<br />
                                    que ce dont nous n'avons pas<br />
                                    connaissance.
                                </p>
                            </div>
                        </div>

                        <div className='under-text-3'>
                            <div className='image-section'>
                                <img src={Img14} alt='check' className='img-check'></img>
                            </div>

                            <div className='paragraph-text-3'>
                                <p>
                                    En fin d'actualisation, un<br />
                                    mise à jour de votre situation, au<br />
                                    renouvellement de votre<br />
                                    inscription, et au versement de<br />  vos allocations si vous avez des<br />
                                    droits.
                                </p>
                            </div>
                        </div>

                        <div className='under-text-4'>
                            <div className='image-section'>
                                <img src={Img14} alt='check' className='img-check'></img>
                            </div>

                            <div className='paragraph-text-4'>
                                <p>
                                    Les éléments connus en France<br />
                                    Travail sont affichés dans votre<br />
                                    déclaration. Vous ne remplisez<br />
                                    que ce dont nous n'avons pas<br />
                                    connaissance.
                                </p>
                            </div>

                        </div>

                        <div className='under-text-5'>
                            <div className='image-section'>
                                <img src={Img14} alt='check' className='img-check'></img>
                            </div>

                            <div className='paragraph-text-5'>
                                <p>
                                    En fin d'actualisation, un<br />
                                    récapulatif vous permet de<br />
                                    visualiser votre déclaration.<br />
                                    Soyez attentif à bien la valider<br />
                                    afin de confirmer son<br />
                                    enregistrement. Une fois<br />
                                    validée, vous ne pourrez plus la<br />
                                    modifier. En cas d'erreur, vous<br />
                                    pouvez contacter un conseiller.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='section-button'>
                        <Link to="/debut" className='link'><p className='text-name'>Poursuivre</p></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Text;