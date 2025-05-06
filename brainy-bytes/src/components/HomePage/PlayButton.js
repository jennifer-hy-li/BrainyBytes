import './PlayButton.css';
function PlayButton({children}) {
    return (
        <button className = "play-button">{children}</button>
    );
}

export default PlayButton;