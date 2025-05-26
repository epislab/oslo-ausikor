'use client';

import React from "react";
import { useRouter } from 'next/navigation';

export default function GuidelineRegister() {
    const router = useRouter();

    return (
        <section className=" w-full max-w-5xl mx-auto py-8">
            <h5 className="text-3xl text-center mx-auto" style={{ width: 400 }}>
                Work Health &amp; Safety Guidelines
            </h5>
            <br />
            <br />
            <div className="flex justify-between gap-5">
                {/* 좌측 컨테이너 */}
                <div className="div__leftGuideline flex-1"></div>
                {/* 우측 컨테이너 */}
                <div className="div__rightGuideline flex-1"></div>
            </div>
            <div className="mt-4 button__contractMovement flex gap-4 justify-end">

                <button
                    className="prev__button border border-gray-400 px-6 py-2 rounded cursor-pointer"
                    onClick={() => router.push('/schedule/register')}
                >
                    Prev
                </button>
                <button
                    className="next__button bg-blue-600 text-white px-6 py-2 rounded cursor-pointer"
                    onClick={() => router.push('/survey/register')}
                >
                    Next
                </button>
            </div>
        </section>
    );
}
