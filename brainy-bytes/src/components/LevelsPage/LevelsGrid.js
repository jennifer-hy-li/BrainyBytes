import LevelButton from './LevelButton';
import './LevelsGrid.css'

function LevelsGrid(){
    const levels = Array.from({length:16}, (_,i) => i+1);
    return(
        <div className="Levels-grid">
            {levels.map((level) => (
                <LevelButton key={level}>{level}</LevelButton>
            ))}
        </div>
    )
}
export default LevelsGrid;
