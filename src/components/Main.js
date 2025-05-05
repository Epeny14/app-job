import React from "react";
import '../styles/main.css';
import { Link } from "react-router-dom";

import Img1 from '../img/icons8-compte-50.png';
import Img2 from '../img/Bonhomme.png';
import Img3 from '../img/icons-next.png';
import Img4 from '../img/icons8-calendrier-50.png';
import Img5 from '../img/lhorloge.png';
import Img6 from '../img/icon-money.png';
import Img7 from '../img/icon-building.png';

const Main = () => {
    return (
        <div>
            <div className="smartphone">
                <div className="screen">
                    <div className='content-1'>
                        <div className='section-class-1'>
                            <h1 className='section-class-text'>Mon espace</h1>
                            <p className='text-1'>Julien Espoir</p>
                        </div>
                        <div className='section-class-2'>
                            <img src={Img1} alt="profile" className='section-class-img'></img>
                        </div>
                    </div>


                    <div className='section-border'>
                        <div>
                            <img src={Img2} alt="icon" className='img-2'></img>
                        </div>
                        <div>
                            <p className='text-2'>Actualisation de mois août</p>
                            <p className='text-3'>Il vous reste 15 jours</p>
                            <p className='text-4'>M'actualiser</p>
                            <Link to="/savoir"><img src={Img3} alt="arrow-right" className='arrow-right'></img></Link>
                        </div>
                    </div>

                    <div className='border-1'>
                        <div className='under-border-1'>
                            <img src={Img4} alt="horloge" className='img-4'></img>
                            <p className='text-5'>Calendrier</p>
                        </div>
                        <div className='ligne-verticale'></div>
                        <div className='under-border-2'>
                            <img src={Img5} alt="l'heure" className='img-5'></img>
                            <p className='text-6'>Historique</p>
                        </div>
                    </div>

                    <div className='border-2'>
                        <div>
                            <p>Mes allocations</p>
                            <p>Dossier traité</p>
                            <p>Demande du 7</p>
                            <p>nov.2022</p>
                        </div>
                        <div>
                            <img src={Img6} alt="money" className='img-money'></img>
                        </div>
                    </div>

                    <div className='border-3'>
                        <div>
                            <p>Agence L'Hays-Les-Roses</p>
                            <p>Fermée</p>
                        </div>
                        <div>
                            <img src={Img7} alt="building" className='img-house'></img>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;