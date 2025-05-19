import './HomePage.css';
import BBLogo from './BBLogo.svg';
import PlayButton from './PlayButton';
function HomePage() {
    return (
        // TODO: Add routing ability to buttons
        <div className = 'home-page'>
            <img src={BBLogo} alt="Logo" class="logo" />
            <PlayButton route="/AuthPage" text="Login"/>
            <PlayButton route="/Topics" text="Play as Guest"/>
        </div>
        
    )
}

export default HomePage;
