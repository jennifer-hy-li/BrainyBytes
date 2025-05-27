import { useParams, useNavigate } from 'react-router-dom';
import './LevelsGrid.css'

function LevelsGrid(){
    const levels = Array.from({length:16}, (_,i) => i+1);
    const { topicId } = useParams();
    const navigate = useNavigate();
    return(
        <div className="Levels-grid">
            {levels.map((level) => (
                <button onClick={() => navigate(`/Play/${topicId}/${level}`)} className ="level-button">{level}</button>
            ))}
        </div>
    )
}
export default LevelsGrid;
