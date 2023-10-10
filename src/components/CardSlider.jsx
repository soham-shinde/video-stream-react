import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import MPosterCard from './MPosterCard';

// Install Swiper modules

const CardSlider = ({ cards }) => {
    const swiperRef = React.useRef(null);

    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <><div onClick={goPrev} className="c-btns">
            <img src="/img/pre-icon.svg" alt="" />
        </div>

            <Swiper
                ref={swiperRef}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true, enabled: false }}
                slidesPerView={5}
                spaceBetween={20}
                modules={[Navigation, Scrollbar]}
                style={{ height: "23rem", padding: "10px" }}
            >
                {cards.map((element, index) => (
                    <SwiperSlide key={index} style={{ width: '11rem' }}>
                       <MPosterCard element={element}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div onClick={goNext} className="c-btns">
                <img src="/img/next-icon.svg" alt="" />
            </div>
        </>
    );
};

export default CardSlider;
