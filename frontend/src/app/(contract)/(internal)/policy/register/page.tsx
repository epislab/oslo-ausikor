'use client';

import React, { useState } from "react";
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
    const [form, setForm] = useState({
        employeeName: "",
        signature: "",
        effectiveDate: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section className="policy__container  max-w-5xl mx-auto py-8">
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
