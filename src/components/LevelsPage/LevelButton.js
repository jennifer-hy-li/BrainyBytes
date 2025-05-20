import './LevelButton.css';
function LevelButton({children}) {
    return (
        <button className = "level-button">{children}</button>
    );
}

export default LevelButton;