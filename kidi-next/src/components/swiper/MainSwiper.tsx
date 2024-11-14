"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// 스타일 import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideItem {
    id: number;
    pcImage: string; // PC용 이미지
    mobileImage: string; // 모바일용 이미지
    title: string;
    desc?: string;
}

// 슬라이드 데이터
const slideData: SlideItem[] = [
    {
        id: 1,
        pcImage: "/img/img/img-mainBanner-pc.png",
        mobileImage: "/img/img/img-mainBanner-m.png",
        title: "슬라이드 1",
        desc: "설명 1",
    },
    {
        id: 2,
        pcImage: "/img/img/img_loading_pc.png",
        mobileImage: "/img/img/img_loading_m.png",
        title: "슬라이드 2",
        desc: "설명 2",
    },
];

export default function MainSwiper() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 1025);
        };

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    });
    return (
        <div className="swiper-main">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="swiper-main"
            >
                {slideData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Link href="javascript:void(0)">
                            <Image
                                src={
                                    isMobile ? slide.mobileImage : slide.pcImage
                                }
                                alt={slide.title}
                                width={640}
                                height={367}
                                style={{ width: "100%", height: "auto" }}
                                priority={slide.id === 1}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
