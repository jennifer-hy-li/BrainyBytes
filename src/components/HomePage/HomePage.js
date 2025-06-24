import './HomePage.css';
import PlayButton from './PlayButton';
function HomePage() {
    return (
        // TODO: Add routing ability to buttons


        <div className = 'home-page'>
            <h1 className = 'header-title'>BrainyBYTES</h1>
            <div>
                <PlayButton route="/AuthPage" text="Login"/>
                <PlayButton route="/Topics" text="Play as Guest"/>
            </div>
            
        </div>
        
    )
}

export default HomePage;
