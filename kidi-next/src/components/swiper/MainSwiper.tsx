"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// 스타일 import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideItem {
    id: number;
    image: string;
    title: string;
    desc?: string;
}

// 슬라이드 데이터
const slideData: SlideItem[] = [
    {
        id: 1,
        image: "/img/img/img-mainBanner-pc.png",
        title: "슬라이드 1",
        desc: "설명 1",
    },
    {
        id: 2,
        image: "/img/img/img_loading_pc.png",
        title: "슬라이드 2",
        desc: "설명 2",
    },
];

export default function MainSwiper() {
    return (
        <div className="swiper-main">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="swiper-main"
            >
                {slideData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="swiper-slide">
                            <Link href="#">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    width={740}
                                    height={424}
                                    priority={slide.id === 1}
                                />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
