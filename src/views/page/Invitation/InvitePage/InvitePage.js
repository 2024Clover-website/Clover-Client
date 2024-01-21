import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import '../../../style/Invitation/InvitePage/InvitePage.css';

function InvitePage() {
    function handleClick(e) {
        window.location.href = '/invite1'
    }
    return (
        <div className='container'>
            <div className='smartContainer'>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    초대장
                </div>
            </div>
            <div className='titleContainer'>
                <div className='titleName'>
                    In A Row
                </div>
            </div>
            <div className='blankContainer'>
            </div>
            <div className='openContainer'>
                <button onClick={handleClick} className='openButton'>
                    초대장 열기
                </button>
            </div>
        </div>
    )
}
export default InvitePage;
