import { useState } from 'react';
import './AnswerGrid.css';
function AnswerGrid({answers, correctID}) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [buttonStyle, setButtonStyle] = useState("answer-button");

    //TODO: Make it so that only the correct button turns green (not all buttons)
    const handleClick = (answer) => {
        if(correctID.includes(answer.id)){
            setButtonStyle('correct');
        }else {
            setButtonStyle('wrong');
        }

    };
    return (

        <div className = "answer-grid">
            {answers.map((answer) => (
                    <button onClick={() =>handleClick(answer)} className ={buttonStyle} disabled={selectedAnswer !== null}>{answer.answer}</button>
            ))}
        
        </div>
    );
}

export default AnswerGrid;