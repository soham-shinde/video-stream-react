import React from 'react'

export default function CastCard({dataItem}) {
    return (
        <>
            <div className="slide">
                <div className="s-card">
                    <div className="s-card-overlay"></div>
                    <img src={dataItem.imgUrl} alt="" className="s-card-img" />
                    <div className="s-card-details fadeIn-bottom">
                        <h3 className="s-card-title">{dataItem.title}</h3>
                        <p className="select-text">{dataItem.role}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
