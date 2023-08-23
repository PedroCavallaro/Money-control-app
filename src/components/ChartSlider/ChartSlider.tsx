"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import FixedChart from "../Charts/FixedChart";
import "swiper/css";
import "swiper/css/pagination";
import "./ChartSlider.css";
import RelativeChart from "../Charts/RelativeChart";
import SpentComparsionChart from "../Charts/SpentComparsionChart";

export default function ChartSlider() {
    return (
        <>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
            >
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
