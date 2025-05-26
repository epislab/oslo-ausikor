"use client";

import React, { useState } from "react";

export default function FarmView() {
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState("");

    const handleSave = () => {
        // 저장 로직 구현 (예: API 호출)
        alert(`Saved!\nDescription: ${description}\nRate: ${rate}`);
    };

    return (
        <main className="sh-mainpanel px-4 py-8">

            <section
                className="fixed-tab flex items-center gap-2 mb-8"
                style={{ width: "96%", margin: "10px auto" }}
            >
                <span className="text-lg font-semibold mr-5">Farm Details</span>
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
