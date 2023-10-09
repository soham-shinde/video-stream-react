import React from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import MPosterCard from './MPosterCard';
import CastCard from './CastCard';
export default function CastCardSlider({cards}) {
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
        <><div onClick={goPrev} class="c-btns">
            <img src="/img/pre-icon.svg" alt="" />
        </div>

            <Swiper
                ref={swiperRef}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true, enabled: false }}
                slidesPerView={7}
                spaceBetween={20}
                modules={[Navigation, Scrollbar]}
                style={{ height: "16rem", padding: "10px" }}
            >
                {cards.map((element, index) => (
                    <SwiperSlide key={index} style={{ width: '11rem' }}>
                       <CastCard dataItem={element}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div onClick={goNext} class="c-btns">
                <img src="/img/next-icon.svg" alt="" />
            </div>
        </>
    );
}
