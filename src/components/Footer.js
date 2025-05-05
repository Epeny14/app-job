import React from "react";
import '../styles/footer.css';
import Img8 from '../img/icons-accueil.png';
import Img9 from '../img/icon-message.png';
import Img10 from '../img/icon-document.png';
import Img11 from '../img/icon-calendrier.png';
import Img12 from '../img/icon-chat.png';

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <hr className='footer-horizontal' />
                <div className='under-footer'>
                    <div className=''>
                        <img className='img-message' src={Img8} alt='message'></img>
                        <p>Accueil</p>
                    </div>
                    <div className=''>
                        <img className='img-mail' src={Img9} alt='courrier'></img>
                        <p>Courriers</p>
                    </div>
                    <div className=''>
                        <img className='img-document' src={Img10} alt='document'></img>
                        <p>Documents</p>
                    </div>
                    <div className=''>
                        <img src={Img11} className='img-rdv' alt='calendrier'></img>
                        <p className='text-rdv'>RDV</p>
                    </div>
                    <div className=''>
                        <img className='img-chat' src={Img12} alt='conseiller'></img>
                        <p>Conseiller</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;