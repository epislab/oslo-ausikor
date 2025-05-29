'use client';

import { contractData } from "@/domain/contract/_contract/model/contractData";
import { AccordionRow } from "@/utility/accordion/model/AccordionRow";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Details from "@/domain/organization/company/component/CompanySearch";

export default function DraftOverview() {
    const [accordionData, setAccordionData] = useState<AccordionRow[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [form, setForm] = useState<Record<string, unknown>>({});
    const [isMobile, setIsMobile] = useState(false);
    const [currentComponent, setCurrentComponent] = useState<'form' | 'details'>('form');

    useEffect(() => {
        setAccordionData(contractData);

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
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const toggleAccordion = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    const handleNext = () => {
        // Details 컴포넌트로 변경
        setCurrentComponent('details');
    };

    const handleClose = () => {
        // 폼으로 돌아가기
        setCurrentComponent('form');
    };

    const handleUpdate = () => {
        // 업데이트 로직 실행
        console.log('Form data:', form);
        alert('업데이트가 완료되었습니다.');
    };

    if (isMobile) {
        return (
            <div className="relative w-full min-h-screen bg-white text-black overflow-x-hidden flex flex-col pt-24">
                <main className="flex flex-col flex-1 px-4 py-6">
                    <section className="draft__container w-full">
                        {accordionData.map((item, idx) => (
                            <div key={idx} className="mb-4">
                                <button
                                    className="w-full text-left py-3 px-4 font-semibold focus:outline-none flex justify-between items-center border border-gray-300 rounded-lg text-gray-800 bg-white shadow-sm"
                                    onClick={() => toggleAccordion(idx)}
                                >
                                    <span className="text-sm">{item.title}</span>
                                    <span className="text-lg">{openIndex === idx ? "▲" : "▼"}</span>
                                </button>
                                {openIndex === idx && (
                                    <div className="px-4 pb-4 bg-gray-50 text-gray-600 border-x border-b border-gray-300 rounded-b-lg">
                                        {currentComponent === 'form' ? (
                                            <>
                                                <form className="pt-4">
                                                    {item.fields.map((field, fidx) => (
                                                        <div className="mb-4" key={fidx}>
                                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                {field.label}
                                                            </label>
                                                            {field.type === "text" && (
                                                                <input
                                                                    type="text"
                                                                    name={field.name}
                                                                    value={String(form[field.name] ?? "")}
                                                                    onChange={handleChange}
                                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                />
                                                            )}
                                                            {field.type === "radio" && field.options && (
                                                                <div className="space-y-2">
                                                                    {field.options.map((opt) => (
                                                                        <label className="flex items-center" key={opt}>
                                                                            <input
                                                                                type="radio"
                                                                                name={field.name}
                                                                                value={opt}
                                                                                checked={form[field.name] === opt}
                                                                                onChange={handleChange}
                                                                                className="mr-2"
                                                                            />
                                                                            <span className="text-sm">
                                                                                {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                                                            </span>
                                                                        </label>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </form>
                                                <div className="navigation-buttons flex flex-col gap-3 mt-6 pt-4 border-t border-gray-200">
                                                    <button className="w-full bg-orange-400 px-4 py-3 rounded-md text-white font-medium hover:bg-orange-500 transition-colors" onClick={handleClose}>
                                                        Close
                                                    </button>
                                                    <button className="w-full bg-blue-600 px-4 py-3 rounded-md text-white font-medium hover:bg-blue-700 transition-colors" onClick={handleNext}>
                                                        Next
                                                    </button>
                                                    <button className="w-full bg-green-600 px-4 py-3 rounded-md text-white font-medium hover:bg-green-700 transition-colors" onClick={handleUpdate}>
                                                        Update
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="pt-4">
                                                    <Details />
                                                </div>
                                                <div className="navigation-buttons flex flex-col gap-3 mt-6 pt-4 border-t border-gray-200">
                                                    <button className="w-full bg-gray-500 px-4 py-3 rounded-md text-white font-medium hover:bg-gray-600 transition-colors" onClick={handleClose}>
                                                        Back to Form
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </section>
                </main>
            </div>
        );
    }

    return (
        <div className="relative w-full min-h-screen bg-white text-black overflow-x-hidden flex flex-col pt-28">
            <main className="flex flex-col flex-1">
                <section className="draft__container w-4/5 mx-auto">
                    {accordionData.map((item, idx) => (
                        <div key={idx} className="mb-3">
                            <button
                                className="w-full text-left py-4 px-6 font-semibold focus:outline-none flex justify-between items-center border-2 border-gray-400 rounded-none text-gray-800 bg-white"
                                onClick={() => toggleAccordion(idx)}
                            >
                                {item.title}
                                <span>{openIndex === idx ? "▲" : "▼"}</span>
                            </button>
                            {openIndex === idx && (
                                <div className="px-6 pb-4 bg-gray-100 text-gray-500 border-x-2 border-b-2 border-gray-400 rounded-b-none">
                                    {currentComponent === 'form' ? (
                                        <>
                                            <form>
                                                {item.fields.map((field, fidx) => (
                                                    <div className="flex items-center mb-4" key={fidx}>
                                                        <label className="w-40">{field.label}</label>
                                                        {field.type === "text" && (
                                                            <input
                                                                type="text"
                                                                name={field.name}
                                                                value={String(form[field.name] ?? "")}
                                                                onChange={handleChange}
                                                                className="border-b border-black w-80 px-2 py-1"
                                                            />
                                                        )}
                                                        {field.type === "radio" && field.options && (
                                                            <fieldset className="inline-block">
                                                                {field.options.map((opt) => (
                                                                    <label className="mr-4" key={opt}>
                                                                        <input
                                                                            type="radio"
                                                                            name={field.name}
                                                                            value={opt}
                                                                            checked={form[field.name] === opt}
                                                                            onChange={handleChange}
                                                                        />{" "}
                                                                        {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                                                    </label>
                                                                ))}
                                                            </fieldset>
                                                        )}
                                                        {/* 필요시 다른 타입도 추가 */}
                                                    </div>
                                                ))}
                                            </form>
                                            <div className="navigation-buttons flex justify-center items-center gap-4 mt-8 bg-gray-100 p-4 border-t">
                                                <button className="close__button bg-orange-400 px-5 py-2 rounded text-white" onClick={handleClose}>Close</button>
                                                <button className="next__button bg-blue-600 px-5 py-2 rounded text-white" onClick={handleNext}>Next</button>
                                                <button className="button__update bg-green-600 px-5 py-2 rounded text-white" onClick={handleUpdate}>Update</button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="pt-4">
                                                <Details />
                                            </div>
                                            <div className="navigation-buttons flex justify-center items-center gap-4 mt-8 bg-gray-100 p-4 border-t">
                                                <button className="back__button bg-gray-500 px-5 py-2 rounded text-white" onClick={handleClose}>Back to Form</button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}

                </section>

            </main>
        </div>
    );
}
