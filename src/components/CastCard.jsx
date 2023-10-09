import React from 'react'

export default function CastCard({dataItem}) {
    return (
        <>
            <div class="slide">
                <div class="s-card">
                    <div class="s-card-overlay"></div>
                    <img src={dataItem.imgUrl} alt="" class="s-card-img" />
                    <div class="s-card-details fadeIn-bottom">
                        <h3 class="s-card-title">{dataItem.title}</h3>
                        <p class="select-text">{dataItem.role}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
