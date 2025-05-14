import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function TopicSlider({ topics }) {
    // TODO: 
    // - Fix left and right images to account for end of list case 
    // - Align left and right photos to be slightly behind/centered to centre photos
    // - Make nav arrows cleaner/on the side of carousol (not on clickable centre image)
    // - Clean up styling
    const [currentSlide, setCurrentSlide] = useState(1);
    const carousolStyle = {
        height: "500px",
        position: 'relative',
        display: 'flex',
    };
    const slideStyle = {
        width: "50%",
        height: "50%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${topics[currentSlide].url})`,
        cursor: 'pointer',
    };
    const slideStyleRight = {
        width: "35%",
        height: "35%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${topics[currentSlide + 1].url})`,
        opacity: 0.5,
    };

    const slideStyleLeft = {
        width: "35%",
        height: "35%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${topics[currentSlide - 1].url})`,
        opacity: 0.5,
    };

    const previousArrow = {
        position: 'absolute',
        top: "20%",
        transform: "translateX(2000%)",
        color: "White",
        cursor: 'pointer',
    };

    const nextArrow = {
        position: 'absolute',
        top: "20%",
        transform: "translateX(4000%)",
        color: "White",
        cursor: 'pointer',
    };
    

    const goToNext = () => {
        setCurrentSlide( (currentSlide) =>
            currentSlide === topics.length - 1 ? 0 : currentSlide + 1
        );
    }
    const goToPrevious = () => {
        setCurrentSlide( (currentSlide) =>
            currentSlide === 0 ? topics.length - 1 : currentSlide - 1
        );
    }
    const navigate = useNavigate();
    
    return (
        <div style ={carousolStyle}>
            <div style = {previousArrow} onClick={goToPrevious}>⇐</div>
            <div style = {nextArrow} onClick={goToNext}>⇒</div>
            <div style={slideStyleLeft}></div>
            <div style ={slideStyle} onClick={() => navigate("/Levels")}></div>
            <div style ={slideStyleRight}></div>
        </div>
        
    );
}

export default TopicSlider;