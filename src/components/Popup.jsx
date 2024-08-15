/* eslint-disable react/prop-types */
// import React from 'react';

function Popup({ text, onClose }) {
    return (
        <div className="popup-overlay bg-black bg-gradient text-dark-emphasis z-3 ">
            <div style={{
                width: "200px",
                height:"70vh"
            }}>
                <button className="close-button bg-primary bg-gradient text-white" onClick={onClose}>Close</button>
                <p className="text-white">{text}</p>
            </div>
        </div>
    );
}

export default Popup;
