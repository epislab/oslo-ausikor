"use client";

import Link from "next/link";
import React, { useEffect, useState } from 'react';

export default function CompanySearch() {
    
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
    };

    if (isMobile) {
        return (
            <div className="relative w-full min-h-screen bg-white text-black overflow-x-hidden flex flex-col pt-16" >
                <div className="bg-gray-200 p-4 rounded shadow flex justify-between items-center">
                    <h2 className="text-lg font-bold">Company Search</h2>
                </div>

                <main className="mt-6 flex flex-col items-center pt-20">
                    <section className="scrollable-section w-full max-w-lg p-4">
                        <h1>Draft Details 2</h1>
                    </section>
                </main>
            </div>
        );
    }

    return (
        <div className="relative w-full h-screen overflow-hidden text-white">
            <main className="mt-6 flex flex-col items-center pt-20">
                <section className="scrollable-section w-full max-w-lg p-4">
                    <h1>Draft Details 2</h1>
                </section>
            </main>
        </div>
    );
}