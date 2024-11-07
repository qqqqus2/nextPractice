"use client";

import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

export default function Header() {
    const [currentMenu, setCurrentMenu] = useState("");
    const [currentDepth2Menu, setCurrentDepth2Menu] = useState("");

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

    return (
        <header id="header" className="header web-header">
            <div className="inner">
                <h1 id="logo">
                    {/* WA-09-02  a > title 추가, aria-label 삭제 수정  */}
                    <Link href="/" title="홈페이지 바로가기">
                        {/* 07-01 i태그에서 span 태그로 변경 */}
                        {/* WA-09-02  텍스트 수정  */}
                        <span
                            className="logo"
                            aria-hidden="true"
                            aria-label="실손24 아이콘"
                        ></span>
                        실손24
                    </Link>
                </h1>

                {/* 웹버전 로그인 & 큰글자보기 */}
                <div className="header-topMenu">
                    <span className="myInfo-txt">김보험님 안녕하세요.</span>
                    {/* 06-27 수정 : 마지막 로그아웃 시간 추가 */}
                    <span className="myInfo-txt logout-time">
                        마지막 로그아웃 시간{" "}
                        <em className="time">2024.00.00 02:55</em>
                    </span>
                    <button type="button" className="btn btn-tiny btn-gray">
                        로그아웃
                    </button>
                    <button
                        type="button"
                        className="btn btn-tiny btn-lightBlue"
                        id="toggleSize"
                    >
                        큰글자 보기
                    </button>
                </div>

                {/* 06-11 위치 조정 */}
                {/* WA-09-02 - right 영역 위치 변경 (키보드 탭 이동 순서 이슈)  */}
                <div className="right">
                    {/* 06-17 알람 구조 변경 */}
                    {/* 06-20 알럿 리스트 팝업 형태로 변경 */}
                    {/* WA-09-02 aria-haspopup="true", aria-expanded="false" 삭제 */}
                    <button
                        type="button"
                        title="알람 팝업 열기"
                        aria-controls="alertListPop"
                        className="btn-alarm btn on"
                    >
                        {/* WA-09-02 버튼 텍스트 변경 / alarm들어오면 (새 알람 있음) 텍스트 추가, blind class추가 */}
                        <strong className="blind">
                            알람 확인 버튼 (새 알람 있음)
                        </strong>
                    </button>
                    {/* WA-09-02 전체메뉴 열기로 명칭 교체 */}
                    <button
                        type="button"
                        aria-label="전체메뉴 열기"
                        className="btn-menu btn"
                    >
                        {/* WA-09-02 blind class추가 */}
                        <strong className="blind">전체메뉴</strong>
                        <span aria-hidden="true" className="gnb-icon"></span>
                    </button>
                </div>

                {/* WA-09-02 active 된 gnb에 선택됨이라는 클래스 추가 */}
                <nav className="gnb-menu">
                    <ul>
                        <li>
                            <Link
                                href="#"
                                className={classNames({
                                    active: isActive("나의 실손청구"),
                                })}
                                onClick={() => setCurrentMenu("나의 실손청구")}
                            >
                                나의 실손청구
                                {renderBlindSpan("나의 실손청구")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className={classNames({
                                    active: isActive("나의 자녀청구"),
                                })}
                                onClick={() => setCurrentMenu("나의 자녀청구")}
                            >
                                나의 자녀청구
                                {renderBlindSpan("나의 자녀청구")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className={classNames({
                                    active: isActive("나의부모/제3자 청구"),
                                })}
                                onClick={() =>
                                    setCurrentMenu("나의부모/제3자 청구")
                                }
                            >
                                나의부모/제3자 청구
                                {renderBlindSpan("나의부모/제3자 청구")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className={classNames({
                                    active: isActive("고객지원"),
                                })}
                                onClick={() => setCurrentMenu("고객지원")}
                            >
                                고객지원
                                {renderBlindSpan("고객지원")}
                            </Link>
                            <ul className="depth-2">
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2("문의하기"),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu("문의하기")
                                        }
                                    >
                                        문의하기
                                        {renderBlindSpan("문의하기", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2("공지사항"),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu("공지사항")
                                        }
                                    >
                                        공지사항
                                        {renderBlindSpan("공지사항", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2("FAQ"),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu("FAQ")
                                        }
                                    >
                                        FAQ
                                        {renderBlindSpan("FAQ", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2("자료실"),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu("자료실")
                                        }
                                    >
                                        자료실
                                        {renderBlindSpan("자료실", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2(
                                                "AI챗봇상담"
                                            ),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu("AI챗봇상담")
                                        }
                                    >
                                        AI챗봇상담
                                        {renderBlindSpan("AI챗봇상담", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2("고객상담"),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu("고객상담")
                                        }
                                    >
                                        고객상담
                                        {renderBlindSpan("고객상담", true)}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className={classNames({
                                    active: isActive("마이페이지"),
                                })}
                                onClick={() => setCurrentMenu("마이페이지")}
                            >
                                마이페이지
                                {renderBlindSpan("마이페이지")}
                            </Link>
                            <ul className="depth-2">
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2(
                                                "내 정보관리"
                                            ),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu("내 정보관리")
                                        }
                                    >
                                        내 정보관리
                                        {renderBlindSpan("내 정보관리", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2("청구이력"),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu("청구이력")
                                        }
                                    >
                                        청구이력
                                        {renderBlindSpan("청구이력", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2(
                                                "나의 보험관리"
                                            ),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu(
                                                "나의 보험관리"
                                            )
                                        }
                                    >
                                        나의 보험관리
                                        {renderBlindSpan("나의 보험관리", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2(
                                                "나의 병원관리"
                                            ),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu(
                                                "나의 병원관리"
                                            )
                                        }
                                    >
                                        나의 병원관리
                                        {renderBlindSpan("나의 병원관리", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2(
                                                "나의 진료이력"
                                            ),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu(
                                                "나의 진료이력"
                                            )
                                        }
                                    >
                                        나의 진료이력
                                        {renderBlindSpan("나의 진료이력", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2(
                                                "나의 자녀관리"
                                            ),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu(
                                                "나의 자녀관리"
                                            )
                                        }
                                    >
                                        나의 자녀관리
                                        {renderBlindSpan("나의 자녀관리", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2(
                                                "나의 위임관리"
                                            ),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu(
                                                "나의 위임관리"
                                            )
                                        }
                                    >
                                        나의 위임관리
                                        {renderBlindSpan("나의 위임관리", true)}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className={classNames({
                                            active: isActiveDepth2(
                                                "약관동의 관리"
                                            ),
                                        })}
                                        onClick={() =>
                                            setCurrentDepth2Menu(
                                                "약관동의 관리"
                                            )
                                        }
                                    >
                                        약관동의 관리
                                        {renderBlindSpan("약관동의 관리", true)}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className={classNames({
                                    active: isActive("시스템소개"),
                                })}
                                onClick={() => setCurrentMenu("시스템소개")}
                            >
                                시스템소개
                                {renderBlindSpan("시스템소개")}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
