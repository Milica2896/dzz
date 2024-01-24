import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModeSelection.css';

export default function ModeSelection({ setDifficulty1, setDifficulty2, mode, setMode, setSelectedHeuristic, onFinish }) {
    const navigate = useNavigate();
    const [value, setValue] = useState(1);
    const [selectedHeuristic, setHeuristic] = useState('easy'); // Promenite ovo

    useEffect(() => {
        if (value % 2 === 0) play();
    }, [value]);

    function onSubmit(e) {
        e.preventDefault();
        onFinish();
    }

    function play() {
        // Logic for play
    }

    const covekracunar = () => {
        navigate(`/covekracunar/${selectedHeuristic}`);
        console.log(selectedHeuristic, " ovo je nesto za PROVERU ");
    };

    const handleHeuristicChange = (e) => {
        setHeuristic(e.target.value); // Ažurirajte ovo
        console.log(e.target.value, " ovo je nesto ");
    };

    return (
        <>
            <div className='global-form-div'>
                <form className="game-mode-form" onSubmit={onSubmit}>
                    <h1 className='game-title'>Nine Man&apos;s Morris</h1>
                    <div className='mode-div'>
                    {(mode === 'human-ai' || mode === 'ai-ai') && (
                            <>
                                <p>Difficulty:</p>
                                <select className='mode-selection' onChange={(e) => setDifficulty1(e.target.value)}>
                                    <option value='easy'>Easy</option>
                                    <option value='medium'>Medium</option>
                                    <option value='hard'>Hard</option>
                                </select>
                            </>
                        )}

                      
                        {mode === 'ai-ai' && (
                            <select className='mode-selection' onChange={(e) => setDifficulty2(e.target.value)}>
                                <option value='easy'>Easy</option>
                                <option value='medium'>Medium</option>
                                <option value='hard'>Hard</option>
                            </select>
                        )}
                    </div>
                    <p>Choose who plays</p>
                    <select className='mode-selection' onChange={(e) => setMode(e.target.value)}>
                        <option value='human-human'>Human-Human</option>
                        <option value='ai-ai'>Ai - Ai</option>
                    </select>
                    <button onClick={() => setValue(value + 1)} className="btn-96">
                        <span>Play game</span>
                    </button>
                    <br /><br /> <p>Or a computer human</p>
                    <select className='mode-selection' onChange={handleHeuristicChange}>
                        <option value=''>Choose a weight</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                    <button onClick={covekracunar} className="btn-95">
                        <span>Human-Ai</span>
                    </button>
                </form>
            </div>
        </>
    );
}
