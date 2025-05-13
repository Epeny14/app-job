import React from "react";

import { Link } from "react-router-dom";

import '../styles/final.css';

import Img13 from '../img/arrow-left.png';
import '../styles/header-final.css';

const Final = () => {
    return (
        <div>
            <div className="smartphone-10">
                <div className="screen-10">
                    <div className='header-final'>
                        <div>
                            <Link to="/">
                                <img src={Img13} alt="arrow" className='arrow-left-900'></img>
                            </Link>

                        </div>
                        <div>
                            <p className="actu-140">L'inscription validée</p>
                        </div>
                        <div class="horizontal-line-final"></div>
                    </div>

                    <div className="section-final">
                        <h1 className="text-final-1">Vous êtes bien inscrit</h1>
                        <h1 className="text-final-2">à France Travail</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Final;