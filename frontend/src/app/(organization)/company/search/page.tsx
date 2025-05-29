"use client";

import Link from "next/link";
import React, { useEffect, useState } from 'react';

export default function CompanySearch() {
    const [query, setQuery] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 모바일 환경 감지 (userAgent + width)
        const checkMobile = () => {
            const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
            const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            setIsMobile(isMobileDevice || window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setCompanyName(query); // 검색어를 반영하여 회사명 업데이트
    };

    if (isMobile) {
        return (
            <div className="relative w-full min-h-screen bg-white text-black overflow-x-hidden flex flex-col pt-16" >
                <div className="bg-gray-200 p-4 rounded shadow flex justify-between items-center">
                    <h2 className="text-lg font-bold">Company Search</h2>
                </div>

                <main className=" mt-6 flex flex-col items-center">
                    <section className="scrollable-section w-full max-w-lg p-4">
                        {/* 검색 폼 */}
                        <form className="form__companyName flex items-center gap-2" onSubmit={handleSearch}>
                            <input
                                type="search"
                                placeholder="Search..."
                                name="query"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="search__button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                            >
                                Search
                            </button>
                        </form>

                        {/* 검색 결과 */}
                        <div className="mt-12 text-center" style={{ marginTop: '50px' }}>
                            <h2 className="h2__companyName text-xl font-semibold text-gray-700">
                                {companyName ? `Results for: ${companyName}` : "No results yet"}
                            </h2>
                        </div>
                        <div className="mt-6 text-center">
                            <Link href="/personal/register">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" >
                                    Target Company
                                </button>
                            </Link>
                        </div>
                    </section>
                </main>
            </div>
        );
    }

    return (
        <div className="relative w-full h-screen overflow-hidden text-white">
            <main className="mt-6 flex flex-col items-center pt-20">
                <section className="scrollable-section w-full max-w-lg p-4">
                    {/* 검색 폼 */}
                    <form className="form__companyName flex items-center gap-2" onSubmit={handleSearch}>
                        <input
                            type="search"
                            placeholder="Search..."
                            name="query"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="search__button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                            Search
                        </button>
                    </form>

                    {/* 검색 결과 는 일단 주석처리 */}
                    {/* <div className="mt-12 text-center">
                        <h2 className="h2__companyName text-xl font-semibold text-gray-700">
                            {companyName ? `Results for: ${companyName}` : "No results yet"}
                        </h2>
                    </div> */}
                    <div className="mt-6 text-center">
                        <Link href="/personal/register">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                Target Company
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}