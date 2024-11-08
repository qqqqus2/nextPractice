"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

// 타입정의
interface DeviceContextType {
    isMobile: boolean;
    // isTablet: boolean;
    isDesktop: boolean;
}

// context 생성
const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

// provider 컴포넌트
export function DeviceProvider({ children }: { children: ReactNode }) {
    const [device, setDevice] = useState<DeviceContextType>({
        isMobile: false,
        // isTablet: false,
        isDesktop: true,
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setDevice({
                isMobile: width < 1024,
                // isTablet: width >= 768 && width < 1024,
                isDesktop: width >= 1024,
            });
        };

        // 초기 체크
        handleResize();

        //resize 이벤트리스너
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <DeviceContext.Provider value={device}>
            {children}
        </DeviceContext.Provider>
    );
}

export function useDevice() {
    const context = useContext(DeviceContext);
    if (context === undefined) {
        throw new Error("useDevice must be used within a DeviceProvider");
    }
    return context;
}
