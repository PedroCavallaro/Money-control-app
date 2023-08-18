"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import FixedChart from "../Charts/FixedChart";
import "swiper/css";

export default function Slider() {
    return (
        <>
            <Swiper centeredSlides={true} slidesPerView={1}>
                <SwiperSlide>
                    <FixedChart />
                </SwiperSlide>
                <SwiperSlide>
                    <FixedChart />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
