"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import classNames from "classnames";

export default function Header() {
    const [isLargeSize, setIsLargeSize] = useState(false);
    const [isAlertPopupOpen, setIsAlertPopupOpen] = useState(false);
    const [isGnbOpen, setIsGnbOpen] = useState(false);

    useEffect(() => {
        // localStorage에서 글자 크기 설정 가져오기
        const savedLargeSize = localStorage.getItem("largeSize") === "true";
        setIsLargeSize(savedLargeSize);

        if (savedLargeSize) {
            document.documentElement.classList.add("lg-size");
        }
    }, []);

    // 큰 글자 모드 토글
    const toggleLgSize = () => {
        setIsLargeSize((prev) => {
            const newValue = !prev;
            // localStorage에 설정 저장
            localStorage.setItem("largeSize", String(newValue));

            if (newValue) {
                document.documentElement.classList.add("lg-size");
            } else {
                document.documentElement.classList.remove("lg-size");
            }

            return newValue;
        });
    };

    // 알람 팝업 토글
    const toggleAlertPop = () => {
        setIsAlertPopupOpen(!isAlertPopupOpen);
    };

    // GNB 토글
    const toggleGnb = () => {
        setIsGnbOpen(!isGnbOpen);
        document.body.classList.toggle("gnbOpen");
    };

    return (
        <header id="header" className="header">
            <div className="inner">
                <h1 id="logo">
                    <Link href="/" title="홈페이지 바로가기" tabIndex={0}>
                        <span className="logo" aria-hidden="true" />
                        <span className="blind">실손24</span>
                    </Link>
                </h1>

                <div className="right">
                    <div className="checkbox toggle-type-1 sizeModeType">
                        <label htmlFor="sizeMode">
                            <input
                                type="checkbox"
                                id="sizeMode"
                                className="lg-sizeToggle"
                                onChange={toggleLgSize}
                                checked={isLargeSize}
                            />
                            <i aria-hidden="true" className="lbl" />
                            <span className="status-info">큰 글자보기</span>
                        </label>
                    </div>

                    <button
                        type="button"
                        title="알람 팝업 열기"
                        aria-controls="alertListPop"
                        onClick={toggleAlertPop}
                        className={classNames("btn-alarm btn", {
                            on: true, // 알람 있을 때 조건 추가 필요
                        })}
                    >
                        <strong className="blind">
                            알람 확인 버튼 (새 알람 있음)
                        </strong>
                    </button>

                    <button
                        type="button"
                        aria-label="전체메뉴 열기"
                        className="btn-menu btn"
                        onClick={toggleGnb}
                    >
                        <strong className="blind">전체메뉴</strong>
                        <span aria-hidden="true" className="gnb-icon" />
                    </button>
                </div>
            </div>
        </header>
    );
}
