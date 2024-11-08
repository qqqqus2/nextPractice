"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// 인터페이스 정의
interface SubMenu {
    id: number;
    name: string;
    href: string;
    mobileOnly?: boolean;
}

interface MenuItem {
    id: number;
    name: string;
    href: string;
    className?: string;
    mobileOnly?: boolean;
    subMenus?: SubMenu[];
}

// 메뉴 데이터 타입 적용
const MOBILE_MENU_DATA: MenuItem[] = [
    {
        id: 1,
        name: "나의 실손청구",
        href: "#",
        className: "claim-1",
    },
    {
        id: 2,
        name: "나의 자녀청구",
        href: "#",
        className: "claim-2",
    },
    {
        id: 3,
        name: "나의부모/제3자 청구",
        href: "#",
        className: "claim-3",
    },
    {
        id: 4,
        name: "고객지원",
        href: "#",
        className: "customer-menu",
        subMenus: [
            { id: 41, name: "문의하기", href: "#", mobileOnly: true },
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
        className: "mypage-menu",
        mobileOnly: true,
        subMenus: [
            { id: 51, name: "내 정보관리", href: "#" },
            { id: 52, name: "청구이력", href: "#" },
            { id: 53, name: "나의 보험관리", href: "#" },
            { id: 54, name: "나의 병원", href: "#" },
            { id: 55, name: "나의 진료이력", href: "#" },
            { id: 56, name: "나의 자녀관리", href: "#" },
            { id: 57, name: "나의 위임관리", href: "#" },
            { id: 58, name: "약관동의 관리", href: "#" },
            { id: 59, name: "환경설정", href: "#" },
        ],
    },
    {
        id: 6,
        name: "시스템소개",
        href: "#",
        className: "system-introduce",
    },
];

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkDevice = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            const isIos = /iphone|ipad|ipod/.test(userAgent);
            const isAndroid = /android/.test(userAgent);
            setIsMobile(!isIos && !isAndroid);
        };

        checkDevice();
    }, []);

    const toggleGnb = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle("gnbOpen");
    };

    // 메뉴 필터링 함수
    const shouldShowMenuItem = (item: MenuItem | SubMenu) => {
        return !item.mobileOnly || (item.mobileOnly && isMobile);
    };

    return (
        <nav
            className="commonGnb"
            role="dialog"
            aria-hidden={!isOpen}
            aria-modal={isOpen}
            tabIndex={-1}
        >
            <button
                type="button"
                aria-label="전체메뉴 닫기"
                className="btn-menu btn"
                onClick={toggleGnb}
            >
                <strong className="blind">전체메뉴</strong>
            </button>

            <div className="user-info">
                {!isMobile && (
                    <Link
                        href="/login/loginEasy"
                        className="link-arrow"
                        role="button"
                    >
                        로그인
                    </Link>
                )}
                <p className="welcome-txt">실손24에 오신걸 환영해요.</p>
                <span className="last-logTime">
                    마지막 로그아웃 시간 2024.07.02 02:55
                </span>
            </div>

            {isMobile && (
                <div className="setting-wrap">
                    <div className="flex">
                        <Link href="#" className="setting-btn">
                            환경설정
                        </Link>
                        <Link
                            href="/memberJoin/joinStart"
                            className="memberJoin-btn"
                        >
                            회원가입
                        </Link>
                    </div>
                </div>
            )}

            <ul className="m-depth-1">
                {MOBILE_MENU_DATA.filter(shouldShowMenuItem).map((menu) => (
                    <li key={menu.id} className={menu.className}>
                        <div className="menu-title">
                            <Link href={menu.href}>{menu.name}</Link>
                        </div>
                        {menu.subMenus && (
                            <ul className="m-depth-2">
                                {menu.subMenus
                                    .filter(shouldShowMenuItem)
                                    .map((subMenu) => (
                                        <li key={subMenu.id}>
                                            <Link href={subMenu.href}>
                                                {subMenu.name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* Footer 부분은 동일하게 유지 */}
            <div className="m-footer">{/* ... 이전 Footer 코드 ... */}</div>
        </nav>
    );
}
