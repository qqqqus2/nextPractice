import type { Metadata } from "next";

import ClientLayout from "@/components/layout/ClientLayout";
import GnbMobile from "@/components/layout/GnbMobile";
import "@/styles/scss/front.scss"; // scss 임포트를 이렇게 하는듯 , assets폴더에서 > styles 로 변경(img 폴더와 폰트 폴더는 public으로 보냈기 때문에)

export const metadata: Metadata = {
    title: "보험개발원 - 실손 24",
    description: "실손24 설명",
    icons: {
        icon: "/favicon/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>
                {/* 
                    layout.tsx에서는 
                    서버 컴포넌트에서 동작하는거라 use client를 사용하면 
                    metadata가 동작하지 않기떄문에 layout을 분기처리,
                    
                    url 진입시에 디바이스 체크를 위해 client layout 분기
                */}
                <ClientLayout>{children}</ClientLayout>
                <GnbMobile></GnbMobile>
            </body>
        </html>
    );
}
