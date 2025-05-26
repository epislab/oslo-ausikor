"use client";

import React, { useState } from "react";
import Link from 'next/link';

export default function FarmOverview() {
    const [search, setSearch] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState("");

    const handleSave = () => {
        // 저장 로직 구현 (예: API 호출)
        alert(`Saved!\nDescription: ${description}\nRate: ${rate}`);
    };

    return (
        <main className="sh-mainpanel px-4 py-8">
            {/* Breadcrumb */}
            <div className="sh-breadcrumb mb-4">
                <nav className="breadcrumb flex items-center gap-2">
                    <Link className="breadcrumb-item text-blue-600" href="/">Home</Link>
                    <span className="breadcrumb-item active text-gray-500">Farm list</span>
                </nav>
            </div>

            {/* Page Title & Search */}
            <summary className="sh-pagetitle mb-8">
                <div className="input-group flex items-center gap-2 mb-4">
                    <input
                        type="search"
                        className="form-control border border-gray-300 rounded px-3 py-2"
                        style={{ height: 40 }}
                        placeholder="Search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <span className="input-group-btn">
                        <button className="btn bg-blue-500 text-white px-4 py-2 rounded">
                            <i className="fa fa-search" />
                        </button>
                    </span>
                </div>
                <div className="sh-pagetitle-left flex items-center gap-4">
                    <div className="sh-pagetitle-icon">
                        <i className="icon ion-ios-navigate text-3xl" />
                    </div>
                    <div className="sh-pagetitle-title">
                        <span>All Features Summary</span>
                        <h2 className="text-2xl font-bold">Farm list</h2>
                    </div>
                </div>
            </summary>

            {/* Navigation & Form Section */}
            <section
                className="fixed-tab flex items-center gap-2 mb-8"
                style={{ width: "96%", margin: "10px auto" }}
            >
                <span className="text-lg font-semibold mr-5">Farm Register</span>
                <span className="mr-2">Description</span>
                <input
                    type="text"
                    className="border border-black px-2"
                    style={{ width: 250, height: 32, marginRight: 10 }}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <span className="mr-2">Rate Per Unit</span>
                <input
                    type="text"
                    className="border border-black px-2"
                    style={{ width: 250, height: 32, marginBottom: 10, marginRight: 10 }}
                    value={rate}
                    onChange={e => setRate(e.target.value)}
                />
                <input
                    type="button"
                    value="Save"
                    className="bg-blue-500 text-white rounded cursor-pointer"
                    style={{ border: "1px solid black", width: 100, height: 32 }}
                    onClick={handleSave}
                />
                <div style={{ width: "60%", margin: "0 auto" }}></div>
            </section>

            {/* Main Content Section */}
            <article className="">
                {/* JSON 데이터 확인용 <div>{JSON.stringify(farms)}</div> */}
                <div id="spreadsheet"></div>
            </article>
            {/* Footer는 별도 컴포넌트로 분리 가능 */}
        </main>
    );
}
