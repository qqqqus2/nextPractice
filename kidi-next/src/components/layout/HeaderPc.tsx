"use client";

import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

// 메뉴 데이터 분리
const MENU_DATA = [
    { id: 1, name: "나의 실손청구", href: "#" },
    { id: 2, name: "나의 자녀청구", href: "#" },
    { id: 3, name: "나의부모/제3자 청구", href: "#" },
    {
        id: 4,
        name: "고객지원",
        href: "#",
        subMenus: [
            { id: 41, name: "문의하기", href: "#" },
            { id: 42, name: "공지사항", href: "#" },
            { id: 43, name: "FAQ", href: "#" },
            { id: 44, name: "자료실", href: "#" },
            { id: 45, name: "AI챗봇상담", href: "#" },
            { id: 46, name: "고객상담", href: "#" },
        ],
    },
    {
        id: 5,
        name: "마이페이지",
        href: "#",
        subMenus: [
            { id: 51, name: "내 정보관리", href: "#" },
            { id: 52, name: "청구이력", href: "#" },
            { id: 53, name: "나의 보험관리", href: "#" },
            { id: 54, name: "나의 병원관리", href: "#" },
            { id: 55, name: "나의 진료이력", href: "#" },
            { id: 56, name: "나의 자녀관리", href: "#" },
            { id: 57, name: "나의 위임관리", href: "#" },
            { id: 58, name: "약관동의 관리", href: "#" },
        ],
    },
    { id: 6, name: "시스템소개", href: "#" },
];

export default function HeaderPc() {
    // 상태 관리
    const [currentMenu, setCurrentMenu] = useState<string>("");
    const [currentDepth2Menu, setCurrentDepth2Menu] = useState<string>("");
    const [isFontSizeLarge, setIsFontSizeLarge] = useState(false);

    const isActive = (menuName: string) => currentMenu === menuName;
    const isActiveDepth2 = (menuName: string) => currentDepth2Menu === menuName;

    const renderBlindSpan = (menuName: string, isDepth2 = false) => {
        if (
            (isDepth2 && isActiveDepth2(menuName)) ||
            (!isDepth2 && isActive(menuName))
        ) {
            return <span className="blind">(선택됨)</span>;
        }
        return null;
    };

    const handleFontSizeToggle = () => {
        setIsFontSizeLarge((prev) => !prev);
        // 실제 폰트 사이즈 변경 로직 추가 필요
    };

    return (
        <div className="inner">
            <h1 id="logo">
                <Link href="/" title="홈페이지 바로가기">
                    <span className="logo" aria-hidden="true"></span>
                    실손24
                </Link>
            </h1>

            <div className="header-topMenu">
                <span className="myInfo-txt">김보험님 안녕하세요.</span>
                <span className="myInfo-txt logout-time">
                    마지막 로그아웃 시간{" "}
                    <em className="time">2024.00.00 02:55</em>
                </span>
                <button type="button" className="btn btn-tiny btn-gray">
                    로그아웃
                </button>
                <button
                    type="button"
                    className={classNames("btn btn-tiny btn-lightBlue", {
                        active: isFontSizeLarge,
                    })}
                    onClick={handleFontSizeToggle}
                    aria-pressed={isFontSizeLarge}
                >
                    {isFontSizeLarge ? "원래크기" : "큰 글자"} 보기
                </button>
            </div>

            <div className="right">
                <button
                    type="button"
                    className="btn-alarm btn on"
                    aria-label="알람 확인"
                >
                    <span className="blind">새 알람 있음</span>
                </button>
                <button
                    type="button"
                    className="btn-menu btn"
                    aria-label="전체메뉴 열기"
                >
                    <span className="blind">전체메뉴</span>
                    <span aria-hidden="true" className="gnb-icon"></span>
                </button>
            </div>

            <nav className="gnb-menu" aria-label="메인 메뉴">
                <ul>
                    {MENU_DATA.map((menu) => (
                        <li key={menu.id}>
                            <Link
                                href={menu.href}
                                className={classNames({
                                    active: isActive(menu.name),
                                })}
                                onClick={() => setCurrentMenu(menu.name)}
                                aria-current={
                                    isActive(menu.name) ? "page" : undefined
                                }
                            >
                                {menu.name}
                                {renderBlindSpan(menu.name)}
                            </Link>
                            {menu.subMenus && (
                                <ul className="depth-2">
                                    {menu.subMenus.map((subMenu) => (
                                        <li key={subMenu.id}>
                                            <Link
                                                href={subMenu.href}
                                                className={classNames({
                                                    active: isActiveDepth2(
                                                        subMenu.name
                                                    ),
                                                })}
                                                onClick={() =>
                                                    setCurrentDepth2Menu(
                                                        subMenu.name
                                                    )
                                                }
                                                aria-current={
                                                    isActiveDepth2(subMenu.name)
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {subMenu.name}
                                                {renderBlindSpan(
                                                    subMenu.name,
                                                    true
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
