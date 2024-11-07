import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/assets/scss/front.scss"; // scss 임포트를 이렇게 하는듯

export const metadata: Metadata = {
    title: "보험개발원 - 실손 24",
    description: "실손24 설명",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>
                <Header />
                <div id="wrap" className="">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
