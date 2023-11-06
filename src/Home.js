import React, { useState, useRef } from 'react';
import './Home.css';
import cardImage from './image/image1.png';
import qrImage from './image/qr.png';
import bellIcon from './image/bell_icon.png';
import option from './image/option.png';
import camera from './image/camera.png';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [cardOpen, setCardOpen] = useState(false);
    const [slideUp, setSlideUp] = useState(false);
    const [startY, setStartY] = useState(null); 
    const cardRef = useRef(null);
    const navigate = useNavigate();

    const navigateToEdit = () => {
        navigate("/Edit");
    };

    const navigateToCardBook = () => {
        navigate("/CardBook");
    };

    const navigateToHome = () => {
        navigate("/");
    };
    

    const handleMouseDown = (e) => {
        setStartY(e.clientY);
    };

    const handleMouseUp = (e) => {
        if (slideUp) { 
            setSlideUp(false);
            return;
        }
        if (e.clientY - startY < -50) { 
            setSlideUp(!slideUp);
        } else {
            setCardOpen(!cardOpen); 
        }
    };

    return (
        <div className="Home">
            <div className="content-wrapper">
                <div className="settings-notification">
                    <button className="icon-button">
                        <div className="bell-icon-wrapper">
                            <img src={bellIcon} alt="Bell Icon" className="bell-icon"/>
                        </div>
                    </button>
                    <button className="icon-button">
                        <div className="option-icon-wrapper">
                            <img src={option} alt="Option Icon" className="option-icon"/>
                        </div>
                    </button>
                </div>

                <div className="card-section">
                    {cardOpen && (
                        <div className="button-container">
                            <button className="action-button file-button">
                                <div className="icon file-icon"></div>
                                파일
                            </button>
                            <button className="action-button edit-button"
                            onClick={navigateToEdit}>
                                <div className="icon edit-icon"></div>
                                수정하기
                            </button>
                            <button className="action-button delete-button">
                                <div className="icon delete-icon"></div>
                                삭제하기
                            </button>
                      </div>
                    )}
                    <img 
                        ref={cardRef}
                        src={cardImage}
                        alt="Business Card" 
                        className={`card-image ${cardOpen ? 'moved' : ''} ${slideUp ? 'slide-up' : ''}`}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                    />
                    <div 
                        className="card-hover-overlay"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                    >
                        <div className="card-hover-overlay-content">
                            <div 
                                className="image-overlay"
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                            ></div>
                            <div 
                                className="text-overlay"
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                            >명함을 아래로 내려서<br/>관리하세요!</div>
                            <div 
                                className="white-gray-gradient"
                                onMouseUp={handleMouseUp}
                            ></div>
                            <div 
                                className="hand-icon"
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                            ></div>
                        </div>
                    </div>
                    {slideUp && (
                        <img 
                            src={qrImage}
                            alt="QR Code" 
                            className="qr-image"
                        />
                    )}
                </div>

                <button className="camera-button">
                    <img src={camera} alt="Camera icon" className="camera-icon"/>
                </button>

                <div className="bottom-sidebar">
                    <button className="nav-button1"
                    onClick={navigateToHome}></button>
                    <button className="nav-button2"
                    onClick={navigateToCardBook}></button>
                    <button className="nav-button3"></button>
                </div>
            </div>
        </div>
    );
}

export default Home;