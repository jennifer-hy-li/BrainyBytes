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
                <h>like this {levelIndex}</h>
                <h>and this {topic.name}</h>
            </div>
            

            {/* question */}
            <div>
                <h> QUESTION1: {levelData[0].question}</h>
            </div>
            
            {/* time remain */}
            <div>
                <h> time remaining</h>
            </div>

            {/* answers */}
            <div>
                <AnswerGrid answers = {levelData[0].answers} correctID = {levelData[0].correctID}></AnswerGrid>
            </div>

        </div>
    )
}

export default GameplayPage;
