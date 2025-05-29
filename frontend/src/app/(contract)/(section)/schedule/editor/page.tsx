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

export default function ScheduleEditor() {
    const router = useRouter();
    const [startingDate, setStartingDate] = useState("");

    return (
        <main className="sh-mainpanel px-4 py-8">
            {/* Breadcrumb */}
            <div className="sh-breadcrumb mb-4">
                <nav className="breadcrumb flex items-center gap-2">
                    <a className="breadcrumb-item text-blue-600" href="/api/home">Home</a>
                    <span className="breadcrumb-item active text-gray-500">Contract register 4</span>
                </nav>
            </div>

            {/* Page Title */}
            <summary className="sh-pagetitle mb-8">
                <div style={{ visibility: "hidden" }}>
                    <input type="search" className="form-control" placeholder="Contract" />
                    <button className="btn">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className="sh-pagetitle-left flex items-center gap-4">
                    <div className="sh-pagetitle-icon">
                        <i className="icon ion-ios-chatboxes text-3xl" />
                    </div>
                    <div className="sh-pagetitle-title">
                        <span>All Features Summary</span>
                        <h2 className="text-2xl font-bold">Contract register 4</h2>
                    </div>
                </div>
            </summary>

            {/* Main Content */}
            <section className=" w-full max-w-5xl mx-auto py-8">
                <h3 className="font-bold text-lg my-2">Schedule A</h3>
                <h3 className="font-bold text-lg my-2">Piecework rates</h3>
                <div className="mb-4 flex items-center">
                    <label htmlFor="schedule-starting-date" className="font-bold mr-2">Starting date</label>
                    <input
                        type="text"
                        id="schedule-starting-date"
                        className="border-b border-black ml-5 px-2 py-1"
                        value={startingDate}
                        onChange={e => setStartingDate(e.target.value)}
                    />
                </div>
                <h3 className="font-bold text-lg my-2">Property Name rates</h3>
                <h3 className="font-bold text-lg my-2">Property Address</h3>
                <h4 className="font-bold text-base my-2">PIECEWORK RATES</h4>

                {pieceworkRates.map((rate, idx) => (
                    <div key={idx} className="mb-4">
                        <h5 className="font-bold text-base my-2">{rate.title}</h5>
                        <ul className="pl-0">
                            {rate.items.map((item, i) => (
                                <li className="p-line-wrap mb-2" key={i}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="flex gap-4 justify-end mt-8">
                    <button
                        className="border border-black w-52 h-10 bg-white text-black rounded cursor-pointer"
                        onClick={() => router.push('/agreement/editor')}
                    >
                        Prev
                    </button>
                    <button
                        className="border border-black w-52 h-10 bg-blue-600 text-white rounded cursor-pointer"
                        onClick={() => router.push('/guideline/editor')}
                    >
                        Next
                    </button>
                </div>
            </section>
            {/* Footer 등은 별도 컴포넌트로 분리 가능 */}
        </main>
    );
}
