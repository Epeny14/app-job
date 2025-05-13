import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../styles/inscription.css';

import Img13 from '../img/arrow-left.png';
import '../styles/header-inscription.css';

const Choice = () => {
    const navigate = useNavigate();
    const [selection, setSelection] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleOui = () => setSelection('oui');
    const handleNon = () => setSelection('non');

    const handleValider = () => {
        if (selection) {
            // Redirection selon la sélection
            if (selection === 'oui') {
                navigate('/final');
            } else {
                navigate('/final');
            }
        } else {
            setErrorMessage("Veuillez sélectionner Oui ou Non avant de valider.");
        }
    };

    return (
        <div>

            <div className="smartphone-9">
                <div className="screen-9">
                    <div className='header-inscription'>
                        <div>
                            <Link to="/validation">
                                <img src={Img13} alt="arrow" className='arrow-left-inscription'></img>
                            </Link>

                        </div>
                        <div>
                            <p className="actu-inscription-60">Mon maintien d'inscription</p>
                            <p className="actu-inscription-70">Période du 01 au 30 août 2024</p>
                        </div>

                        <div class="horizontal-line-choice"></div>
                    </div>

                    <div className="title-inscription">
                        <h1 className="under-title-20">Je souhaite rester inscrit à</h1>
                        <h1 className="under-title-21">France Travail</h1>
                    </div>

                    <div className="section-choice-200">


                        <div className="button-14"
                            onClick={handleOui}
                            style={{ backgroundColor: selection === 'oui' ? '#087ACC' : '#F2F5F8' }}

                        >
                            <p className="under-button-14">Oui</p>
                        </div>



                        <div className="button-15"
                            onClick={handleNon}
                            style={{ backgroundColor: selection === 'non' ? '#087ACC' : '#F2F5F8' }}
                        >
                            <p className="under-button-15">Non</p>
                        </div>
                    </div>


                    <div className="text-choice">
                        <h6 className="title-rules">Quelques rappels</h6>

                        <p className="under-text-choice-1">En application du code du travail, toute fausse<br />
                            déclaration vous expose à des sanctions<br />
                            pénales, à une radiation, ainsi qu'a l'exclusion<br />
                            du revenu de remplacement.
                        </p>

                        <p className="under-text-choice-2">
                            En maintenant votre inscription, vous vous<br />
                            engagez à (1) :
                        </p>

                        <p className="under-text-choice-3">
                            Accomplir et pouvoir justifier selon (votre projet professionnel)<br />
                            des démarches en vue<br />
                            de retrouver un emploi, de réaliser votre<br />
                            projet de reconversion professionnelle, de<br />
                            créer, reprendre ou développer une<br />
                            entreprise
                        </p>

                        <p className="under-text-choice-4">
                            Vous rendre à tous vos rendez-vous,
                        </p>

                        <p className="under-text-choice-5">
                            Signaler tout changement de situation dans<br />
                            un délai de 72 heures notamment en cas de<br />
                            changement d'adresse, d'entrée en<br />
                            formation, de reprise de travail, de maladie,<br />
                            de retraite, etc...
                        </p>

                        <p className="under-text-choice-6">
                            (1) Article L5411-2, articles L5411-6 et<br />
                            suivants, articles L5412-1 et suivants, article<br />
                            L5423-1-2 du code du travail.
                        </p>
                    </div>

                    <div>
                        <button className="button-next-1" onClick={handleValider}>Poursuivre</button>
                    </div>
                    {errorMessage && <p className="text-erreur-1" style={{ color: 'red' }}>{errorMessage}</p>}
                </div>
            </div>

        </div>
    );

};

export default Choice;