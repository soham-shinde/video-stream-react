import React from 'react'

export default function Loader() {
    return (
        <div id="loadingModal" className="modal">
            <div className="modal-content">
                <div className="loader"></div>
                <p>Loading...</p>
            </div>
        </div>
    )
}
