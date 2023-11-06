import React, { useState } from 'react';
import './Edit.css';
import { useNavigate } from 'react-router-dom';
import cardImage from './image/image2.png';


function Edit() {
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        name: '',
        email: '',
        affiliation: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    };

    const handleSave = () => {
        console.log(info);
        // 여기에 정보를 저장하는 코드를 추가할 수 있습니다. 예를 들어, 백엔드 API 호출 등.
    };

    const navigateToHome = () => {
        navigate("/");
    };

    const navigateToCardBook = () => {
        navigate("/CardBook");
    };

    return (
        <div className="Edit">
            <div className="content-wrapper">
                <div className="box">
                    <img src={cardImage} alt="Profile" className="profile-img" />
                    <div className="info-input">
                        <label>
                            <span></span>
                            <input type="text" name="name" value={info.name} onChange={handleChange} placeholder="이름 입력" />
                        </label>
                        <label>
                            <span></span>
                            <input type="text" name="email" value={info.email} onChange={handleChange} placeholder="이메일 입력" />
                        </label>
                        <label>
                            <span></span>
                            <input type="text" name="affiliation" value={info.affiliation} onChange={handleChange} placeholder="소속 입력" />
                        </label>
                        <label>
                            <span></span>
                            <input type="text" name="location" value={info.location} onChange={handleChange} placeholder="장소 입력" />
                        </label>
                    </div>
                </div>
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

export default Edit;
