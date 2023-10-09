import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav class="navbar">
            <div class="logo">
                <img src="img/logo.svg" alt="" />
                Video Stream
            </div>
            <ul class="ul-1">
                <li><Link to="">Home</Link></li>
                <li><Link to="/movies-list">Movies</Link>
                    <ul class="sub-list">
                        <li><Link to="/movies-list">All Movies</Link></li>
                        <li>Genres
                            <ul class="sub-list-2">
                                <li><Link to="/movies-list">Science Fiction</Link></li>
                                <li><Link to="/movies-list">Fantasy</Link></li>
                                <li><Link to="/movies-list">Adventure</Link></li>
                                <li><Link to="/movies-list">Action</Link></li>
                                <li><Link to="/movies-list">Animated</Link></li>
                                <li><Link to="/movies-list">Mystery</Link></li>
                                <li><Link to="/movies-list">Thriller</Link></li>
                                <li><Link to="/movies-list">Horror</Link></li>
                                <li><Link to="/movies-list">Comedy</Link></li>
                                <li><Link to="/movies-list">Drama</Link></li>
                                <li><Link to="/movies-list">Romantic</Link></li>
                                <li><Link to="/movies-list">Biography</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/movies-list">Language</Link>
                            <ul class="sub-list-2">
                                <li><Link to="/movies-list">Hindi</Link></li>
                                <li><Link to="/movies-list">English</Link></li>
                                <li><Link to="/movies-list">Tamil</Link></li>
                                <li><Link to="/movies-list">Telugu</Link></li>
                                <li><Link to="/movies-list">Malayalam</Link></li>
                                <li><Link to="/movies-list">Kannada</Link></li>
                                <li><Link to="/movies-list">Bengali</Link></li>
                                <li><Link to="/movies-list">Marathi</Link></li>
                                <li><Link to="/movies-list">Punjabi</Link></li>
                                <li><Link to="/movies-list">Gujarati</Link></li>
                                <li><Link to="/movies-list">Korean</Link></li>
                                <li><Link to="/movies-list">Japanese</Link></li>
                                <li><Link to="/movies-list">Spanish</Link></li>
                                <li><Link to="/movies-list">French</Link></li>
                                <li><Link to="/movies-list">Chinese</Link></li>
                                <li><Link to="/movies-list">German</Link></li>
                                <li><Link to="/movies-list">Italian</Link></li>
                                <li><Link to="/movies-list">Portuguese</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="nav-search-bar">
                <input type="text" class="nav-i" placeholder="Search favorite movie here " name="" id="" />
            </div>
            <div class="sd-s">
                <li><Link to="/"><img src="./img/heart-icon.svg" alt=""/></Link></li>
                <li><Link to="/login"><img src="./img/user-icon.svg" alt=""/></Link></li>
            </div>
        </nav>
    </>
  )
}
