import React from 'react'
import './Homepage3.css'
import mobile from '../Assets/mobile.svg'
import playBtn from '../Assets/playbutton.svg'
import blueEclipse from '../Assets/blue.svg'
import greenEclipse from '../Assets/green-r.svg'
import playTri from '../Assets/whiteTri.svg'
import slide_image_1 from '../Assets/10T1.svg'
import slide_image_2 from '../Assets/10T1-1.svg'
import slide_image_3 from '../Assets/10T1-4.svg'
import slide_image_4 from '../Assets/10T1-2.svg'
import slide_image_5 from '../Assets/10T1-3.svg'


// slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

export const Homepage3 = (props) => {
    return (
        <>
            <div ref={props.refer} className='homepage3'>

                <div className='big-box'>
                    <div className='box-2'>
                        <div className='left-content'>
                            <h1>Why Galaxi?</h1>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,”
                                women face higher conduct standards especially in the workplace.
                                Thats why its crucial that, as women, our behavior on the job is
                                beyond reproach. inappropriate behavior is often laughed off
                                <br /><br />
                                inappropriate behavior is often laughed off as “boys will be boys,”
                                women face higher conduct standards especially in the workplace.
                                Thats why its crucial that, as women, our behavior on the job is
                                beyond reproach. inappropriate behavior is often laughed off</p>

                        </div>
                        <div className='right-content'>
                            <img src={mobile} alt='mobile-spider' />

                        </div>


                    </div>



                </div>
                <div className='box-background'>
                    <div className='big-box-2'>
                        <img className='top-left-blue' src={blueEclipse} alt='' />
                        <img className='top-right-blue' src={blueEclipse} alt='' />
                        <div className='explainer-container'>
                            <h1>Explainer Video</h1>
                            <div className='video-section'>
                                <img className='blueCircles' src={playBtn} alt='playBtn' />
                                <img className='whiteArrow' src={playTri} alt='playBtn' />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='feature-section'>
                <img className='bottom-left-green' src={greenEclipse} alt='' />
                <div ref={props.fet}className='feature-text'>
                    <h1>Features</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>

                </div>
                {/* <div className='feature-content-mob'>
                    <img src={mobMobile} alt='' />
                </div> */}

                <div className="swipe-container">
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
                            modifier: 3,
                        }}
                        autoplay={{
                            delay: 1000,
                            reverseDirection: true,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="swiper_container"
                    >
                        <SwiperSlide>
                            <img src={slide_image_1} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_2} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_3} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_4} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_5} alt="slide_image" />
                        </SwiperSlide>


                    </Swiper>
                </div>


            </div>
        </>
    )
}
