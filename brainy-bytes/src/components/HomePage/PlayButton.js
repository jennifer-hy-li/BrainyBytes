import './PlayButton.css';
import { Link } from 'react-router-dom';
function PlayButton({children}) {
    return (
        <Link to="/Topics">
            <button className = "play-button">{children}</button>
        </Link>
    );
}

export default PlayButton;