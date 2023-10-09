import React from 'react'
import Navbar from '../components/Navbar'
import AutoPlayVideo from '../components/AutoPlayVideo'
import MPosterCard from '../components/MPosterCard'
import { getMoviesList } from '../api/api-module'
import Footer from '../components/Footer'

export default function MoviesListPage() {
    return (
        <>
            <Navbar />
            <div class="pos-container">
                <div class="pos-item">
                    <div class="into-v-container">
                        <AutoPlayVideo />
                    </div>
                    <div class="pos-info">
                        <div class="pos-button">
                            <img src="./img/logo.svg" alt="" />
                            Watch Now
                        </div>
                        <div class="pos-desc">
                            Lorem ipsum dolor sit  consectetur, adipisicing elit. Voluptas vitae minima, ipsum odio dolor
                            velit recusandae tempore magnam corrupti quam, sint dolore voluptates architecto labore fugiat ipsam
                            libero modi natus.
                        </div>
                    </div>
                </div>
            </div>
            <div className='mo-list'>
                <h3>Action Movies</h3>
                <div className='m-l-list' >
                        {
                            getMoviesList(10).map((movie, index) => {
                                return (
                                    <MPosterCard key={index} element={movie} />
                                )
                            })
                        }
                </div>
            </div>
            <div className='mo-list'>
                <h3>Science Fiction Movies</h3>
                <div className='m-l-list' >
                        {
                            getMoviesList(10).map((movie, index) => {
                                return (
                                    <MPosterCard key={index} element={movie} />
                                )
                            })
                        }
                </div>
            </div>
            <div className='mo-list'>
                <h3>Adventure Movies</h3>
                <div className='m-l-list' >
                        {
                            getMoviesList(10).map((movie, index) => {
                                return (
                                    <MPosterCard key={index} element={movie} />
                                )
                            })
                        }
                </div>
            </div>
            <div className='mo-list'>
                <h3>Hindi Movies</h3>
                <div className='m-l-list' >
                        {
                            getMoviesList(10).map((movie, index) => {
                                return (
                                    <MPosterCard key={index} element={movie} />
                                )
                            })
                        }
                </div>
            </div>
            <Footer/>
        </>
    )
}
