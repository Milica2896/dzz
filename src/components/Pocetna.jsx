// Pocetna.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pocetna.css';


const Pocetna = () => {
    const navigate = useNavigate();
    const [showInfo, setShowInfo] = useState(false);

    const handleInfoClick = () => {
        setShowInfo(true);
    }

    const handlePlayClick = () => {
        navigate('/ModeSelection');
    }

    const handleCloseInfo = () => {
        setShowInfo(false);
    }

    const covekracunar = () => {
        navigate('/covekracunar');
    }
    return (
        <div className="pocetna-container">
            
            <div className="content">
            {!showInfo && <button onClick={handleInfoClick} className="info-button">Info</button>}
                <button onClick={handlePlayClick} className="play-button">Play</button>
                

                {showInfo && (
                    <div className="info-div-container">
                        <p>
                           "Nine Men's Morris" je strategijska društvena igra koja se igra na šahovskoj ploči s 
                           devet figura po igraču. Cilj je postaviti tri svoje figure u niz kako bi se formirala
                            "mühle" i omogućilo uklanjanje protivničkih figura. Igrači se smenjuju postavljajući i 
                            pomerajući svoje figure, a pobjednik je onaj koji efikasno upravlja svojim resursima i eliminira
                             protivničke figure. Igra kombinuje taktičke i strateške elemente, pružajući jednostavno,
                              ali izazovno iskustvo.
                        </p>
                        <button onClick={handleCloseInfo} className="close-button">Zatvori</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Pocetna;