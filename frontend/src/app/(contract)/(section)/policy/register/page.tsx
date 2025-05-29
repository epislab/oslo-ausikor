'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
// 샘플 정책 데이터 (실제 데이터로 대체 가능)
const leftPolicies = [
    "근무 시간은 오전 9시부터 오후 6시까지입니다.",
    "업무 중에는 회사의 보안 정책을 준수해야 합니다.",
    "외부 방문객은 반드시 출입증을 발급받아야 합니다.",
];
const rightPolicies = [
    "개인 정보는 외부에 유출하지 않습니다.",
    "업무용 장비는 승인된 용도로만 사용해야 합니다.",
    "비상시에는 지정된 대피로를 이용합니다.",
];

export default function PolicyRegister() {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const [form, setForm] = useState({
        employeeName: "",
        signature: "",
        effectiveDate: "",
    });

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    if (isMobile) {
        return (
            <div className="min-h-screen bg-gray-50 pt-16 px-4 py-6">
                <div className="max-w-lg mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
                            Company Policies
                        </h1>
                        <p className="text-sm text-gray-600 text-center">
                            Please read and acknowledge the following policies
                        </p>
                    </div>

                    {/* Policies Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Company Policies
                        </h2>

                        <div className="space-y-3">
                            {[...leftPolicies, ...rightPolicies].map((policy, idx) => (
                                <div key={idx} className="flex items-start">
                                    <span className="text-blue-500 mr-3 mt-1 text-lg">•</span>
                                    <p className="text-sm text-gray-700 leading-relaxed">{policy}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Agreement Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Agreement
                        </h2>

                        <p className="text-sm text-blue-600 text-center mb-6 font-medium">
                            By signing here, I declare that I will abide by company policies.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Employee Name *
                                </label>
                                <input
                                    type="text"
                                    name="employeeName"
                                    value={form.employeeName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Signature *
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                                    <input
                                        type="text"
                                        name="signature"
                                        value={form.signature}
                                        onChange={handleChange}
                                        className="w-full text-center text-lg font-signature border-none outline-none bg-transparent"
                                        placeholder="Sign here"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Date *
                                </label>
                                <input
                                    type="date"
                                    name="effectiveDate"
                                    value={form.effectiveDate}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => router.push('/personal/register')}
                            className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => router.push('/agreement/register')}
                            className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Next Step
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className="policy__container max-w-5xl mx-auto py-8 pt-20">
            <header className="container__header mb-6">
                <h4
                    className="text-4xl font-bold text-center mx-auto"
                    style={{ width: 300 }}
                >
                    <span className="company__name">Company Name</span> Policies
                </h4>
            </header>

            {/* Main Content using Grid Layout */}
            <article
                className="article__policies grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-8"
            >
                {/* Left Column */}
                <div className="div__left w-full">
                    {leftPolicies.map((policy, idx) => (
                        <p key={idx} className="span__dot mb-2 flex items-start">
                            <span className="mr-2" style={{ fontSize: "1.2em" }}>•</span>
                            {policy}
                        </p>
                    ))}
                </div>
                {/* Right Column */}
                <div className="div__right w-full">
                    {rightPolicies.map((policy, idx) => (
                        <p key={idx} className="span__dot mb-2 flex items-start">
                            <span className="mr-2" style={{ fontSize: "1.2em" }}>•</span>
                            {policy}
                        </p>
                    ))}
                </div>
            </article>

            {/* Signature Section */}
            <h6 className="text-blue-600 text-center mb-2">
                By signing here, I declare that I will abide by company policies.
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        name="employeeName"
                        value={form.employeeName}
                        onChange={handleChange}
                        className="input__employeeName border-b border-black w-full px-2 py-1"
                    />
                </div>
                <div>
                    <label className="block mb-1">Signature</label>
                    <input
                        type="text"
                        name="signature"
                        value={form.signature}
                        onChange={handleChange}
                        className="input__signature border-b border-black w-full px-2 py-1"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block mb-1">Date</label>
                    <input
                        type="text"
                        name="effectiveDate"
                        value={form.effectiveDate}
                        onChange={handleChange}
                        className="input__effectiveDate border-b border-black w-full px-2 py-1"
                    />
                </div>
            </div>
            <div className="mt-2 button__contractMovement flex gap-4 justify-end">
                <button
                    className="prev__button border border-gray-400 px-6 py-2 rounded cursor-pointer"
                    onClick={() => router.push('/personal/register')}
                >
                    Prev
                </button>
                <button
                    className="next__button bg-blue-600 text-white px-6 py-2 rounded cursor-pointer"
                    onClick={() => router.push('/agreement/register')}
                >
                    Next
                </button>
            </div>
        </section>
    );
}
