import './PlayButton.css';
import { useNavigate } from 'react-router-dom';
function PlayButton({route, text}) {
    const navigate = useNavigate();
    return (
        <button className="play-button" onClick={() => navigate(route)}>
            {text}
        </button>
    );
}

export default PlayButton;