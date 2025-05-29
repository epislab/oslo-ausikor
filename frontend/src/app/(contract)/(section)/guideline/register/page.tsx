'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const safetyGuidelines = {
    left: [
        {
            title: "Personal Protective Equipment (PPE)",
            items: [
                "Always wear appropriate safety clothing",
                "Use sun protection (hat, sunscreen, long sleeves)",
                "Wear closed-toe shoes with good grip",
                "Use gloves when handling plants or chemicals",
                "Wear safety glasses when required"
            ]
        },
        {
            title: "Manual Handling",
            items: [
                "Lift with your legs, not your back",
                "Ask for help with heavy items",
                "Use proper lifting techniques",
                "Take regular breaks to prevent fatigue",
                "Report any injuries immediately"
            ]
        },
        {
            title: "Chemical Safety",
            items: [
                "Read all chemical labels before use",
                "Never mix different chemicals",
                "Store chemicals in designated areas",
                "Wash hands thoroughly after handling",
                "Report spills immediately"
            ]
        }
    ],
    right: [
        {
            title: "Weather Conditions",
            items: [
                "Check weather conditions before starting work",
                "Seek shelter during severe weather",
                "Stay hydrated in hot conditions",
                "Dress appropriately for cold weather",
                "Report unsafe weather conditions"
            ]
        },
        {
            title: "Equipment Safety",
            items: [
                "Inspect tools before use",
                "Use equipment only as intended",
                "Report damaged equipment immediately",
                "Keep work areas clean and organized",
                "Follow lockout/tagout procedures"
            ]
        },
        {
            title: "Emergency Procedures",
            items: [
                "Know the location of first aid kits",
                "Report all incidents and near misses",
                "Know emergency contact numbers",
                "Follow evacuation procedures",
                "Attend all safety training sessions"
            ]
        }
    ]
};

export default function GuidelineRegister() {
    const router = useRouter();
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

    if (isMobile) {
        return (
            <div className="min-h-screen bg-gray-50 pt-16 px-4 py-6">
                <div className="max-w-lg mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
                            Work Health & Safety Guidelines
                        </h1>
                        <p className="text-sm text-gray-600 text-center">
                            Important safety information for all workers
                        </p>
                    </div>

                    {/* Safety Guidelines Cards */}
                    {[...safetyGuidelines.left, ...safetyGuidelines.right].map((guideline, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                {guideline.title}
                            </h2>

                            <div className="space-y-3">
                                {guideline.items.map((item, i) => (
                                    <div key={i} className="flex items-start">
                                        <span className="text-red-500 mr-3 mt-1 text-lg">•</span>
                                        <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Acknowledgment Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-lg font-semibold text-red-600 mb-4 border-b border-gray-200 pb-2">
                            Safety Acknowledgment
                        </h2>

                        <div className="bg-red-50 border border-red-200 rounded-md p-4">
                            <p className="text-sm text-red-800 font-medium text-center">
                                By proceeding, I acknowledge that I have read and understood all work health and safety guidelines and agree to follow them at all times.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => router.push('/schedule/register')}
                            className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => router.push('/survey/register')}
                            className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            I Acknowledge & Continue
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className="w-full max-w-5xl mx-auto py-8 pt-20">
            <h5 className="text-3xl text-center mx-auto mb-8" style={{ width: 400 }}>
                Work Health &amp; Safety Guidelines
            </h5>

            <div className="flex justify-between gap-8">
                {/* 좌측 컨테이너 */}
                <div className="div__leftGuideline flex-1 space-y-6">
                    {safetyGuidelines.left.map((guideline, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                {guideline.title}
                            </h3>
                            <ul className="space-y-2">
                                {guideline.items.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-red-500 mr-3 mt-1">•</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* 우측 컨테이너 */}
                <div className="div__rightGuideline flex-1 space-y-6">
                    {safetyGuidelines.right.map((guideline, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                {guideline.title}
                            </h3>
                            <ul className="space-y-2">
                                {guideline.items.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-red-500 mr-3 mt-1">•</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Acknowledgment Section */}
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-800 font-medium text-center text-lg">
                    By proceeding, I acknowledge that I have read and understood all work health and safety guidelines and agree to follow them at all times.
                </p>
            </div>

            <div className="mt-6 button__contractMovement flex gap-4 justify-end">
                <button
                    className="prev__button border border-gray-400 px-6 py-2 rounded cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => router.push('/schedule/register')}
                >
                    Prev
                </button>
                <button
                    className="next__button bg-blue-600 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors"
                    onClick={() => router.push('/survey/register')}
                >
                    I Acknowledge & Continue
                </button>
            </div>
        </section>
    );
}
