import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MPosterCard({ element }) {
    const navigator = useNavigate();
    return (
        <div class="m-card" onClick={()=>{
            navigator(`/movie-player/${element.id}`)

        }}>
            <div class="m-card-overlay"></div>
            <img class="m-card-image" src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt="" />
            <div class="m-card-details fadeIn-bottom">
                <h3 class="m-card-title">{element.title}</h3>
                <p class="m-card-text">{element.genres}</p>
            </div>

        </div>
    )
}
