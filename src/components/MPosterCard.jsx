import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MPosterCard({ element }) {
    const navigator = useNavigate();
    return (
        <div className="m-card" onClick={()=>{
            navigator(`/movie-player/${element.title}`)

        }}>
            <div className="m-card-overlay"></div>
            <img className="m-card-image" src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt="" />
            <div className="m-card-details fadeIn-bottom">
                <h3 className="m-card-title">{element.title}</h3>
                <p className="m-card-text">{element.genres}</p>
            </div>

        </div>
    )
}
