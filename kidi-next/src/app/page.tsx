import MainSwiper from "@/components/swiper/MainSwiper";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="inner">
            <div className="main-top">
                <MainSwiper />
                <div className="main-claim-list">
                    <ul>
                        <li className="item-1">
                            {/* WA-09-02 role 추가 */}
                            <Link href="javascript:void(0)">
                                {/* 10-16 화면명 변경 */}
                                <strong>나의 실손청구</strong>
                                <span>
                                    서류 발급 없이 <br />
                                    간편하게
                                </span>
                            </Link>
                        </li>
                        <li className="item-2">
                            {/* WA-09-02 role 추가 */}
                            <Link href="javascript:void(0)">
                                {/* 10-16 화면명 변경 */}
                                <strong>나의 자녀청구</strong>
                                <span>
                                    내 자녀의 <br />
                                    보험청구
                                </span>
                            </Link>
                        </li>
                        <li className="item-3">
                            {/* WA-09-02 role 추가 */}
                            <Link href="javascript:void(0)">
                                {/* 10-16 화면명 변경 */}
                                <strong>나의부모/제3자 청구</strong>
                                <span>
                                    대리인 청구도 <br />
                                    한번에
                                </span>
                            </Link>
                        </li>
                        <li className="item-4">
                            {/* WA-09-02 role 추가 */}
                            <Link href="javascript:void(0)">
                                {/* 10-16 화면명 변경 */}
                                <strong>청구이력</strong>
                                <span>
                                    내가 신청한 <br />
                                    보험확인
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="main-banner-wrap">
                <div className="upper-banner">
                    {/* WA-09-02 role 추가 */}
                    <Link href="#" className="banner-item">
                        <div className="box">
                            <p className="banner-tit">
                                AI챗봇에게 <br />
                                궁금한 정보를 <span>물어보세요</span>
                            </p>
                            <span className="banner-txt">
                                실손24의 궁금증을 해결해드려요.
                            </span>
                            {/* WA-09-02 - alt 값 삭제  */}
                            <i className="img-wrap">
                                <Image
                                    src="/img/img/img-mainIcon-item1.png"
                                    alt=""
                                    width={158}
                                    height={131}
                                    priority={true}
                                />
                            </i>
                        </div>
                    </Link>
                    {/* 07-02 시스템소개 링크 추가*/}
                    {/* WA-09-02 role 추가 */}
                    {/* 10-15 시스템소개 위치 변경 */}
                    <Link href="/hospitalList" className="banner-item item-1">
                        {/* 10-17 연계병원 시스템소개 위치변경 */}
                        <div className="box">
                            {/* 10-16 제휴병원 -> 연계병원 */}
                            {/* 10-18 연계병원 -> 참여병원 */}
                            <p className="banner-tit">참여병원</p>
                            <span className="banner-txt">
                                실손24에서 청구 가능한 <br />
                                병원을 확인해보세요.
                            </span>
                            <i className="img-wrap">
                                {/* WA-09-02 - alt 값 삭제  */}
                                <Image
                                    src="/img/img/img-mainIcon-item3.png"
                                    alt=""
                                    width={82}
                                    height={76}
                                    priority={true}
                                />
                            </i>
                        </div>
                    </Link>
                </div>
                <ul className="under-banner">
                    {/* 10-15 제휴병원 추가 */}
                    <li>
                        <Link href="/introduce" className="banner-item item-4">
                            {/* 10-17 연계병원 시스템소개 위치변경 */}
                            <div className="box">
                                <p className="banner-tit">시스템 소개</p>
                                <span className="banner-txt">
                                    실손24 청구시스템을 <br />
                                    소개해드려요.
                                </span>
                                <i className="img-wrap">
                                    {/* WA-09-02 - alt 값 삭제  */}
                                    <Image
                                        src="/img/img/img-mainIcon-item2.png"
                                        alt=""
                                        width={82}
                                        height={76}
                                        priority={true}
                                    />
                                </i>
                            </div>
                        </Link>
                    </li>
                    <li>
                        {/* WA-09-02 role 추가 */}
                        <Link href="#" className="banner-item item-2">
                            <div className="box">
                                <p className="banner-tit">
                                    내가 다녀온 병원 찾기
                                </p>
                                <span className="banner-txt">
                                    내가 다녀온 병원을 <br />
                                    찾아보세요.
                                </span>
                                <i className="img-wrap">
                                    {/* WA-09-02 - alt 값 삭제  */}
                                    {/* 10-15 이미지 수정 */}
                                    <Image
                                        src="/img/img/img-mainIcon-item5.png"
                                        alt=""
                                        width={82}
                                        height={76}
                                        priority={true}
                                    />
                                </i>
                            </div>
                        </Link>
                    </li>
                    <li>
                        {/* WA-09-02 role 추가 */}
                        <Link
                            href="javascript:void(0)"
                            className="banner-item item-3"
                        >
                            <div className="box">
                                {/* 07-25 고객센터 => 콜센터로 */}
                                {/* 08-13 콜센터 번호 변경 */}
                                <p className="banner-tit">
                                    <span>실손24 콜센터</span>1811-3000
                                </p>
                                {/* 10-10 문구 수정 */}
                                <span className="banner-txt">
                                    평일 오전 9시 ~ 오후 6시 <br />
                                    (점심시간 12~13시 및 주말,공휴일 제외)
                                </span>
                                <i className="img-wrap">
                                    {/* WA-09-02 alt 삭제 */}
                                    <Image
                                        src="/img/img/img-mainIcon-item4.png"
                                        alt=""
                                        width={82}
                                        height={76}
                                        priority={true}
                                    />
                                </i>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="main-bottom-board">
                <div className="notice-wrap">
                    <h3 className="tit">공지사항</h3>
                    <div className="list">
                        <ul>
                            <li>
                                <Link href="/customer/noticeList">
                                    <span className="tit-name">
                                        실손보험 청구서비스 홈페이지 오픈 안내
                                        실손보험 청구서비스 홈페이지 오픈 안내
                                    </span>
                                    {/* 07-24 type-new 추가 */}
                                    {/* 10-18 클래스 변경 */}
                                    <span className="badge-icon type-newIcon">
                                        신규 등록됨
                                    </span>
                                    <span className="date">2024.04.02</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="javascript:void(0)">
                                    <span className="tit-name">
                                        실손보험 서비스 시스템 점검안내
                                    </span>
                                    {/* 10-18 클래스 변경 */}
                                    <span className="badge-icon type-newIcon">
                                        신규 등록됨
                                    </span>
                                    <span className="date">2024.04.02</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="javascript:void(0)">
                                    <span className="tit-name">
                                        실손보험 서비스 시스템 소개
                                    </span>
                                    <span className="date">2024.04.02</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* WA-09-02 - 더보기 버튼 위치, 구조 수정, role 추가  */}
                    <Link href="/customer/noticeList" className="linked-arrow">
                        <span>공지사항 더보기</span>
                    </Link>
                </div>
                <div className="faq-wrap">
                    <h3 className="tit">FAQ</h3>
                    <div className="list">
                        <ul>
                            <li>
                                <Link href="javascript:void(0)">
                                    <span className="tit-name">
                                        실손보험 청구 방법 메뉴얼을 어디서 볼 수
                                        있나요?실손보험 청구 방법 메뉴얼을
                                        어디서 볼 수 있나요?실손보험 청구 방법
                                        메뉴얼을 어디서 볼 수 있나요?
                                    </span>
                                    <span className="faq-txt">
                                        본인인증 절차를 통해 본인여부를 확인
                                        본인인증 절차를 통해 본인인증 절차를
                                        통해 본인여부를 확인 본인인증 절차를
                                        통해
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="javascript:void(0)">
                                    <span className="tit-name">
                                        자녀 청구시에 몇살까지 할 수 있나요
                                    </span>
                                    <span className="faq-txt">
                                        본인인증 절차를 통해 본인여부를 확인
                                        본인인증 절차를 통해 본인인증 절차를
                                        통해 본인여부를 확인 본인인증 절차를
                                        통해
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="javascript:void(0)">
                                    <span className="tit-name">
                                        내가 다녀온 병원을 검색하는 방법을 알고
                                        싶어요
                                    </span>
                                    <span className="faq-txt">
                                        본인인증 절차를 통해 본인여부를 확인
                                        본인인증 절차를 통해 본인인증 절차를
                                        통해 본인여부를 확인 본인인증 절차를
                                        통해
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* WA-09-02 - 더보기 버튼 위치, 구조 수정, role 추가  */}
                    <Link href="/customer/faqList" className="linked-arrow">
                        <span>FAQ 더보기</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
