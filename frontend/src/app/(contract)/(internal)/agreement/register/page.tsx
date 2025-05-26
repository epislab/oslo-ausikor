'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AgreementRegister() {
    const router = useRouter();
    const [companyName, setCompanyName] = useState('Company Name');
    const [employeeName, setEmployeeName] = useState('');
    const [effectiveDate, setEffectiveDate] = useState('');

    return (
        <section className=" bg-white p-8 rounded shadow">
            <h3 className="text-center text-2xl font-bold mb-4">Piecework Agreement</h3>
            <h3 className="text-xl mb-6">Agreement Between</h3>

            <article className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mb-6">
                <div>
                    <h1 className="text-lg font-bold mb-2">Company Name</h1>
                    <input
                        type="text"
                        className="input__companyName border-b border-black w-full mb-2 px-2 py-1"
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                    />
                    <h6 className="text-center text-blue-600">(Employer)</h6>
                </div>
                <div>
                    <input
                        type="text"
                        className="input__fullname border-b border-black w-full mb-2 px-2 py-1"
                        placeholder="Employee Name"
                        value={employeeName}
                        onChange={e => setEmployeeName(e.target.value)}
                    />
                    <h6 className="text-center text-blue-600">(Employee)</h6>
                    <input
                        type="text"
                        className="input__effectiveDate border-b border-black w-full mt-5 mb-2 px-2 py-1"
                        placeholder="Effective Date"
                        value={effectiveDate}
                        onChange={e => setEffectiveDate(e.target.value)}
                    />
                    <h6 className="text-center text-blue-600">(Effective Date)</h6>
                </div>
            </article>

            <div className="div__agreement w-full mb-8">
                {/* 동적으로 p 태그를 추가하는 영역, 필요시 map 등으로 구현 */}
            </div>

            <article className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                {/* Employee Section */}
                <div>
                    <h6 className="font-bold mb-2">Employee</h6>
                    <label>Name</label>
                    <input
                        type="text"
                        className="input__fullname border-b border-black w-full mb-2 px-2 py-1"
                    />
                    <label>Signature</label>
                    <input
                        type="text"
                        className="border-b border-black w-full mb-2 px-2 py-1"
                    />
                    <label>Date</label>
                    <input
                        type="text"
                        className="input__effectiveDate border-b border-black w-full px-2 py-1"
                    />
                </div>
                {/* Employer Section */}
                <div>
                    <h6 className="font-bold mb-2">Employer</h6>
                    <label>Name</label>
                    <input
                        type="text"
                        className="input__companyName border-b border-black w-full mb-2 px-2 py-1"
                    />
                    <label>Signature</label>
                    <input
                        type="text"
                        className="border-b border-black w-full mb-2 px-2 py-1"
                    />
                    <label>Date</label>
                    <input
                        type="text"
                        className="input__effectiveDate border-b border-black w-full px-2 py-1"
                    />
                </div>
            </article>

            <div className="button__contractMovement flex gap-4 justify-end mt-4">
                <button
                    className="prev__button bg-gray-400 text-white px-6 py-2 rounded"
                    onClick={() => router.push('/policy/register')}
                >
                    Prev
                </button>
                <button
                    className="next__button bg-blue-600 text-white px-6 py-2 rounded"
                    onClick={() => router.push('/schedule/register')}
                >
                    Next
                </button>

            </div>
        </section>
    );
}
