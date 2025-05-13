import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/form.css';

import '../styles/header-form.css';

import Img13 from '../img/arrow-left.png';

import { Link } from "react-router-dom";

const Form = () => {
    const [formData, setFormData] = useState({ date: "", dates: "", price: "", texte: "" });
    const navigate = useNavigate();



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Rediriger vers la page des résultats et passer les données du formulaire
        navigate("/results", { state: { formData } });
    };

    return (
        <div>
            <div className="smartphone-4">
                <div className="screen-4">
                    <div className='header-2'>
                        <div>
                            <Link to="/activité">
                                <img src={Img13} alt="arrow" className='arrow-left-2'></img>
                            </Link>
                        </div>
                        <div>
                            <p className="actu-14"> Consulter une activité</p>
                        </div>

                        <div class="horizontal-line-4"></div>
                    </div>

                    <div className="content-form">
                        <div className="border-content">
                            <p className="paragraph-content">Connue - à compléter</p>
                        </div>

                        <div className="paragraph-content-1">
                            <h2 className="title-activity">Activité pour un employeur</h2>
                            <h4 className="title-activity-1">Débuté le 03 mai 2023</h4>
                        </div>

                        <div className="section-form">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>
                                        Nom de l'employeur:
                                        <label className="label-1">Artek</label>
                                    </label>
                                </div>
                                <br />
                                <div>
                                    <label>
                                        Date de debut:
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </label>
                                </div>
                                <br />
                                <div>
                                    <label>
                                        Date de fin :
                                        <input
                                            type="date"
                                            name="dates"
                                            value={formData.dates}
                                            onChange={handleChange}
                                            required
                                        />
                                    </label>
                                </div>
                                <br />
                                <div>
                                    <label>
                                        Salaire brut :
                                        <input
                                            type="number"
                                            name="price"
                                            min="0"
                                            step=".01"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="Salaire brut"
                                            required
                                        />
                                    </label>
                                </div>
                                <br />
                                <div>
                                    <label>
                                        Heures travaillées :
                                        <input
                                            type="number"
                                            name="texte"
                                            value={formData.texte}
                                            onChange={handleChange}
                                            placeholder=" Heures travaillées "
                                            required
                                        />
                                    </label>
                                </div>
                                <button type="submit" className="form-button">Modifier</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Form;