import React from "react";
import '../styles/mainhome.css';
import { Link } from "react-router-dom";
import Img100 from '../img/Screenshot-home.png';
import Img101 from '../img/icons-user.png';

const MainHome = () => {
    return (
        <div>
            <div className='smartphone'>
                <div className='screen'>


                    <div className='section-home'>
                        <div className='sections-120'>
                            <div className='text-section-home'>
                                <h2 className='under-text-120'>Mon Espace</h2>
                            </div>
                            <div className='icon-section-home'>
                                <img src={Img101} alt='user' className='img-section-user'></img>
                            </div>
                        </div>
                        <Link to="/espace">
                            <img src={Img100} alt="profile" className='img-section-home'></img>
                        </Link>

                        <div className="text-section">
                            <p>Cette application a été réalisée par </p>
                            <p>Blaise ENGONZOLOKI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainHome;
