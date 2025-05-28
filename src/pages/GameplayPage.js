import { useParams } from "react-router-dom";
import { questions } from "../data/questions";
import './GameplayPage.css';
import AnswerGrid from "../components/GamePage/AnswerGrid";

function GameplayPage() {
    const { topicId, level } = useParams();
    const topic = questions[topicId];
    const levelIndex = parseInt(level) - 1; 
    const levelData = topic?.levels?.[levelIndex]; //list of questions
    return (
        <div className="dark-wrapper-grid">
            {/* Goal/points col */}
            <div>
                <h className = 'question-text'>Goal for {topic.name} level {level}:</h>
                <h className = 'question-text'> 1000pts </h>
            </div>
            

            {/* question */}
            <div>
                <h className = 'question-text'> QUESTION1: {levelData[0].question} ?</h>
            </div>
            
            {/* time remain */}
            <div>
                <h className = 'question-text'> time remaining:</h>
                <h className = 'question-text'> 00:00</h>
            </div>

            {/* answers */}
            <div>
                <AnswerGrid answers = {levelData[0].answers} correctID = {levelData[0].correctID}></AnswerGrid>
            </div>

        </div>
    )
}

export default GameplayPage;
