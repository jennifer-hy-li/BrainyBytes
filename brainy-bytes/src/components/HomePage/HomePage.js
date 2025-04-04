import './HomePage.css';
import BBLogo from './BBLogo.png';
import PlayButton from './PlayButton';
function HomePage() {
    return (
        // TODO: Add routing ability to buttons
        <div className = 'home-page'>
            <img src={BBLogo} alt="Logo" class="logo" />
            <PlayButton>Login</PlayButton>
            <PlayButton>Play as Guest</PlayButton>
        </div>
        
    )
}

export default HomePage;
