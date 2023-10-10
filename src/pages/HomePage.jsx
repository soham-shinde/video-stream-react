import React from 'react'
import Navbar from '../components/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CardSlider from '../components/CardSlider';
import { getMoviesList } from '../api/api-module';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="banner-container" style={{
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url('/img/banner-img.jpeg'), lightgray 50% / cover no-repeat"

            }}>
                <div className="back-blur">
                    <div className="logo-1">
                        <img src="img/logo.svg" alt="" />
                        Video Stream
                    </div>
                    <div style={{ width: "80rem", marginTop: "20px" }}>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}

                            autoplay={true}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            className="swiper_container"

                        >
                            <SwiperSlide style={{ width: "37rem", height: "25rem", position: "relative" }}>
                                <div className="carousel-item">
                                    <div className="card">
                                        <img className="card-image" src="./img/back/back-1.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: "37rem", height: "25rem", position: "relative" }}>
                                <div className="carousel-item">
                                    <div className="card">
                                        <img className="card-image" src="./img/back/back-2.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: "37rem", height: "25rem", position: "relative" }}>
                                <div className="carousel-item">
                                    <div className="card">
                                        <img className="card-image" src="./img/back/back-3.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: "37rem", height: "25rem", position: "relative" }}>
                                <div className="carousel-item">
                                    <div className="card">
                                        <img className="card-image" src="./img/back/back-5.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="mo-list">
                    <h3>New Release</h3>
                    <div id="slider-container">
                        <CardSlider cards={getMoviesList(10)} />
                    </div>
                </div>
                <div className="mo-list">
                    <h3>Popular films</h3>
                    <div id="slider-container">
                        <CardSlider cards={getMoviesList(10)} />
                    </div>
                </div>
                <div style={{margin :"3rem 1rem"}}>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={true}
                        modules={[ Autoplay]}
                        className="mySwiper"
                        loop={true}
                    >
                        <SwiperSlide style={{width:"50rem"}}>
                            <div className="card">
                                <img className="card-image" src="./img/back/back-1.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{width:"50rem"}}>
                            <div className="card">
                                <img className="card-image" src="./img/back/back-2.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{width:"50rem"}}>
                            <div className="card">
                                <img className="card-image" src="./img/back/back-3.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{width:"50rem"}}>
                            <div className="card">
                                <img className="card-image" src="./img/back/back-4.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>

                <div className="mo-list">
                    <h3>Action Movies</h3>
                    <div id="slider-container">
                        <CardSlider cards={getMoviesList(10)} />
                    </div>
                </div>
                <div className="mo-list">
                    <h3>Hindi Drama Movies</h3>
                    <div id="slider-container">
                        <CardSlider cards={getMoviesList(10)} />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
