'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const pieceworkRates = [
    {
        title: "Piecework Rate 1 - Packing Strawberries",
        items: [
            "Payment Variables: Production volume, Punnet size, Machinery breakdown, Temperature in shed",
            "Payment Range: $0.10 - $0.25 per punnet",
        ],
    },
    {
        title: "Piecework Rate 2 - Picking Strawberries",
        items: [
            "Payment Variables: Weather, Ripening, Type of picking (e.g., Selective picking)",
            <>
                Payment Options:
                <ul className="list-disc pl-6">
                    <li>$0.04 - $1.50 per kg</li>
                    <li>$0.60 - $3.00 per tray</li>
                </ul>
            </>,
        ],
    },
    {
        title: "Piecework Rate 3 - Planting & Pulling out Strawberry Plants",
        items: [
            "Payment Variables: Weather, Plant spacing, Type of plant, Plant density",
            "Payment Range: $0.02 - $0.05 per plant",
        ],
    },
    {
        title: "Piecework Rate 4 - Cutting Strawberry Plants",
        items: [
            "Payment Variables: Weather, Plant density",
            "Payment Range: $0.01 - $0.10 per plant",
        ],
    },
    {
        title: "Piecework Rate 5 - Picking Tomatoes",
        items: [
            "Minimum Payment: $1.50 per Bucket",
            "Payment Variables: Weather, Plant spacing, Type of plant, Plant density",
        ],
    },
    {
        title: "Piecework Rate 6 - Picking Capsicums",
        items: [
            "Minimum Payment: $0.75 per Bucket",
            "Payment Variables: Weather, Plant spacing, Type of plant, Plant density",
        ],
    },
    {
        title: "Piecework Rate 7 - Picking Cherry Tomatoes",
        items: [
            "Minimum Payment: $1 per KG",
            "Payment Variables: Weather, Plant spacing, Type of plant, Plant density",
        ],
    },
    {
        title: "Piecework Rate 8 - Warehouse Operation",
        items: [
            "Regular Hourly Wage: Minimum $28.26 per Hour",
            "Training Hourly Wage: $27.88 per Hour",
        ],
    },
    {
        title: "Piecework Rate 9 - Farm hand",
        items: [
            "Regular Hourly Wage: Minimum $28.26 per Hour",
            "Training Hourly Wage: $27.88 per Hour",
        ],
    },
];

export default function ScheduleRegister() {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const [effectiveDate, setEffectiveDate] = useState("");
    const [propertyName, setPropertyName] = useState("");
    const [propertyAddress, setPropertyAddress] = useState("");

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
                            Schedule A
                        </h1>
                        <p className="text-sm text-gray-600 text-center">
                            Piecework Rates and Property Information
                        </p>
                    </div>

                    {/* Property Information Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Property Information
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Starting Date *
                                </label>
                                <input
                                    type="date"
                                    value={effectiveDate}
                                    onChange={e => setEffectiveDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Property Name *
                                </label>
                                <input
                                    type="text"
                                    value={propertyName}
                                    onChange={e => setPropertyName(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter property name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Property Address *
                                </label>
                                <input
                                    type="text"
                                    value={propertyAddress}
                                    onChange={e => setPropertyAddress(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter property address"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Piecework Rates Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Piecework Rates
                        </h2>

                        <div className="space-y-6">
                            {pieceworkRates.map((rate, idx) => (
                                <div key={idx} className="border-l-4 border-blue-500 pl-4">
                                    <h3 className="text-md font-semibold text-gray-800 mb-2">
                                        {rate.title}
                                    </h3>
                                    <div className="space-y-2">
                                        {rate.items.map((item, i) => (
                                            <div key={i} className="text-sm text-gray-700">
                                                {typeof item === 'string' ? (
                                                    <div className="flex items-start">
                                                        <span className="text-blue-500 mr-2 mt-1">•</span>
                                                        <span>{item}</span>
                                                    </div>
                                                ) : (
                                                    <div className="ml-4">{item}</div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => router.push('/agreement/register')}
                            className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => router.push('/guideline/register')}
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
        <section className="w-full max-w-5xl mx-auto py-8 pt-20">
            <h3 className="text-2xl font-bold mb-4">Schedule A</h3>
            <h3 className="text-xl font-semibold mb-2">Piecework rates</h3>
            <div className="mb-4">
                <label className="block mb-1">Starting date</label>
                <input
                    type="text"
                    className="effective__date border-b border-black px-2 py-1 w-64"
                    value={effectiveDate}
                    onChange={e => setEffectiveDate(e.target.value)}
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">Property Name rates</h3>
            <h3 className="text-xl font-semibold mb-2">Property Address</h3>
            <h4 className="text-lg font-bold mt-6 mb-4">PIECEWORK RATES</h4>
            <div className="div__schedule w-full">
                {pieceworkRates.map((rate, idx) => (
                    <div key={idx} className="mb-6">
                        <h5 className="piecework__rate font-semibold mb-2">{rate.title}</h5>
                        <ul className="piecework__content list-disc pl-6">
                            {rate.items.map((item, i) => (
                                <li className="p-line-wrap mb-1" key={i}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mt-8 button__contractMovement flex gap-4 justify-end">
                <button
                    className="prev__button border border-gray-400 px-6 py-2 rounded cursor-pointer"
                    onClick={() => router.push('/agreement/register')}
                >
                    Prev
                </button>
                <button
                    className="next__button bg-blue-600 text-white px-6 py-2 rounded cursor-pointer"
                    onClick={() => router.push('/guideline/register')}
                >
                    Next
                </button>

            </div>
        </section>
    );
}
