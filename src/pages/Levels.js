import LevelsGrid from "../components/LevelsPage/LevelsGrid";
import './Levels.css';

function Levels(){
    
    return(
        <div className='Levels-Page'>
            <h1 className = 'header-title'>BrainyBYTES</h1>
            <LevelsGrid />
        </div>
        
    )
}

export default Levels;