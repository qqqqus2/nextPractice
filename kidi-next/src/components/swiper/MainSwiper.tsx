"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideItem {
    id: number;
    image: string;
    title: string;
    desc?: string;
}

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
    const [isAutoplay, setIsAutoplay] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType>();

    // 페이지네이션 bullet의 aria-label 업데이트
    useEffect(() => {
        const updatePaginationLabels = () => {
            const bullets = document.querySelectorAll(
                ".swiper-pagination-bullet"
            );
            bullets.forEach((bullet, index) => {
                const isActive = index === activeIndex;
                bullet.setAttribute(
                    "aria-label",
                    `${isActive ? "(현재) " : ""}슬라이드 ${index + 1}번째`
                );
            });
        };

        updatePaginationLabels();
    }, [activeIndex]);

    const toggleAutoplay = () => {
        if (!swiperRef.current) return;

        if (isAutoplay) {
            swiperRef.current.autoplay.stop();
        } else {
            swiperRef.current.autoplay.start();
        }
        setIsAutoplay(!isAutoplay);
    };

    // 슬라이드가 2개 이상일 때만 스와이퍼 렌더링
    if (slideData.length >= 2) {
        return (
            <div className="relative swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                        renderBullet: function (index, className) {
                            return `<span role="button" class="${className}" tabindex="0"></span>`;
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    keyboard={{ enabled: true }}
                    className="swiper-main"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex);
                    }}
                >
                    {slideData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="swiper-slide">
                                <Link
                                    href="javascript:void(0)"
                                    style={{
                                        position: "relative",
                                        display: "block",
                                        height: "100%",
                                    }}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        priority={slide.id === 1}
                                    />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Navigation Buttons */}
                    <div
                        role="button"
                        aria-label="이전 슬라이드"
                        tabIndex={0}
                        className="swiper-button-prev"
                    ></div>
                    <div
                        role="button"
                        aria-label="다음 슬라이드"
                        tabIndex={0}
                        className="swiper-button-next"
                    ></div>

                    {/* Pagination Container */}
                    <div className="swiper-pagination-container">
                        <div className="swiper-pagination"></div>
                        <button
                            onClick={toggleAutoplay}
                            className={`autoplay-toggle-button ${
                                !isAutoplay ? "pause" : ""
                            }`}
                            aria-label={
                                isAutoplay ? "자동 재생 멈춤" : "자동 재생 시작"
                            }
                            type="button"
                        ></button>
                    </div>
                </Swiper>
            </div>
        );
    }

    // 슬라이드가 1개일 때
    if (slideData.length === 1) {
        return (
            <div>
                <Link href="javascript:void(0)">
                    <Image
                        src={slideData[0].image}
                        alt={slideData[0].title}
                        fill
                        priority
                    />
                </Link>
            </div>
        );
    }

    // 슬라이드가 없을 때
    return (
        <div className="no-banner">
            <Image
                src="/img/img/img_loading_pc.png"
                alt="기본 이미지"
                fill
                priority
            />
        </div>
    );
}
