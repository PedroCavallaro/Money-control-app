"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import FixedChart from "../Charts/FixedChart";
import "./ChartSlider.css";
import "swiper/css";
import RelativeChart from "../Charts/RelativeChart";
import SpentComparsionChart from "../Charts/SpentComparsionChart";

export default function ChartSlider() {
    return (
        <>
            <Swiper centeredSlides={true} loop={true} slidesPerView={1}>
                <SwiperSlide>
                    <FixedChart />
                </SwiperSlide>
                <SwiperSlide>
                    <RelativeChart />
                </SwiperSlide>
                <SwiperSlide>
                    <SpentComparsionChart />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
