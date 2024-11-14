"use client";

import Link from "next/link";

export default function topBtn() {
    return (
        <Link
            href="javascript:void(0)"
            role="button"
            className="scrollTopBtn"
            title="컨텐츠 상단으로 이동"
            aria-label="컨텐츠 상단으로 이동"
        >
            Top
        </Link>
    );
}
