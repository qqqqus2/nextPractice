import Link from "next/link";
import Image from "next/image";
import qrImage from "/public/img/img/img_qr.png";

export default function Footer() {
    return (
        <footer id="footer" className="footer web-footer">
            <div className="inner">
                <div className="left">
                    <div className="flex">
                        {/* WA-09-02 - span 추가   */}
                        <div className="footer-logo">
                            <span className="blind">보험 개발원</span>
                        </div>
                        <div className="footer-callCenter">
                            <span>콜센터</span>
                            {/* 08-13 콜센터 번호 변경  */}
                            1811-3000
                        </div>
                    </div>

                    <ul className="footer-nav">
                        <li>
                            <Link href="#none" title="">
                                개인정보처리방침
                            </Link>
                        </li>
                        <li>
                            <Link href="#none" title="">
                                사이트이용약관
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://www.fss.or.kr/fss/main/contents.do?menuNo=200524"
                                target="_blank"
                                title="새창"
                            >
                                보험범죄신고센터
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://privacy.kisa.or.kr/main.do"
                                target="_blank"
                                title="새창"
                            >
                                개인정보침해신고센터
                            </a>
                        </li>
                    </ul>
                    <div className="footer-address">
                        <address className="address">
                            <span>(우)07328 서울시 영등포구 국제금융로6길</span>
                            <span>사업자등록번호 166-82-035-36</span>
                        </address>
                        {/* 07-09 : 카피라이트 문구 수정 */}
                        <small className="copyRight">
                            &copy;실손24, All Rights Reserved.
                        </small>
                    </div>
                </div>
                <div className="flex right">
                    <div className="app-wrap">
                        <p>앱 다운로드</p>
                        <div className="appDown-list">
                            <ul>
                                <li>
                                    <a
                                        href="#none"
                                        target="_blank"
                                        className="googlePlay-link"
                                        title="구글플레이로 앱 다운로드 바로가기 새창열림"
                                    ></a>
                                </li>
                                <li>
                                    <a
                                        href="#none"
                                        target="_blank"
                                        className="appStore-link"
                                        title="애플스토어로 앱 다운로드 바로가기 새창열림"
                                    ></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="qr-wrap">
                        <p>QR코드</p>
                        <div className="qr-img">
                            <a href="#none">
                                <Image
                                    src={qrImage}
                                    alt="url.com 바로가기 QR코드"
                                    priority
                                />
                            </a>
                        </div>
                    </div>
                    {/* 11-05 유튜브 링크추가  */}
                    <div className="youtube-wrap">
                        <p>YouTube</p>
                        <div className="youtube-btn">
                            <a
                                href="javascript:void(0)"
                                target="_blank"
                                title="새창열림"
                                className="btn"
                            >
                                실손24 유튜브채널 바로가기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
