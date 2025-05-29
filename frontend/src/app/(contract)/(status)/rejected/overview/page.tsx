'use client';

import { contractData } from "@/domain/contract/_contract/model/contractData";
import { AccordionRow } from "@/utility/accordion/model/AccordionRow";
import React, { useState, useEffect } from "react";

export default function RejectedOverview() {
    const [accordionData, setAccordionData] = useState<AccordionRow[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [form, setForm] = useState<Record<string, unknown>>({});

    useEffect(() => {
        setAccordionData(contractData);
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

    return (
        <div className="relative w-full min-h-screen bg-white text-black overflow-x-hidden flex flex-col">
            <main className="flex flex-col flex-1">
                <section className="draft__container w-4/5 mx-auto mt-[150px]">
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
                                        <button className="close__button bg-orange-400 px-5 py-2 rounded text-white">Close</button>
                                        <button className="next__button bg-blue-600 px-5 py-2 rounded text-white">Next</button>
                                        <button className="button__update bg-green-600 px-5 py-2 rounded text-white">Update</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                </section>

            </main>
        </div>
    );
}
