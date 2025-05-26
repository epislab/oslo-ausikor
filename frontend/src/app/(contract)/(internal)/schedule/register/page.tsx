'use client';

import React, { useState } from "react";
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
    const [effectiveDate, setEffectiveDate] = useState("");

    return (
        <section className=" w-full max-w-5xl mx-auto py-8">
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
