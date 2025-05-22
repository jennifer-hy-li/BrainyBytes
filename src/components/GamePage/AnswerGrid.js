import { useState } from 'react';
import './AnswerGrid.css';
function AnswerGrid({answers, correctAnswer}) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [buttonStyle, setButtonStyle] = useState("level-button");

    //TODO: Make it so that only the correct button turns green (not all buttons)
    const handleClick = (answer, index) => {
        if(answer === correctAnswer){
            setButtonStyle('correct');
        }

    };
    return (

        <div className = "answer-grid">
            {answers.map((answer, index) => (
                    <button onClick={() =>handleClick(answer, index)} className ={buttonStyle} disabled={selectedAnswer !== null}>{answer}</button>
            ))}
        
        </div>
    );
}

export default AnswerGrid;