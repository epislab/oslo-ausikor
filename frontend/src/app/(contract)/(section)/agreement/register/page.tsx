'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AgreementRegister() {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const [companyName, setCompanyName] = useState('Company Name');
    const [employeeName, setEmployeeName] = useState('');
    const [effectiveDate, setEffectiveDate] = useState('');
    const [employeeSignature, setEmployeeSignature] = useState('');
    const [employeeDate, setEmployeeDate] = useState('');
    const [employerName, setEmployerName] = useState('');
    const [employerSignature, setEmployerSignature] = useState('');
    const [employerDate, setEmployerDate] = useState('');

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
                            Piecework Agreement
                        </h1>
                        <p className="text-sm text-gray-600 text-center">
                            Agreement Between Employer and Employee
                        </p>
                    </div>

                    {/* Agreement Parties Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Agreement Parties
                        </h2>

                        <div className="space-y-6">
                            {/* Company Section */}
                            <div>
                                <h3 className="text-md font-semibold text-gray-800 mb-3">Employer</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={companyName}
                                        onChange={e => setCompanyName(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter company name"
                                    />
                                </div>
                            </div>

                            {/* Employee Section */}
                            <div>
                                <h3 className="text-md font-semibold text-gray-800 mb-3">Employee</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Employee Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={employeeName}
                                            onChange={e => setEmployeeName(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter employee name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Effective Date *
                                        </label>
                                        <input
                                            type="date"
                                            value={effectiveDate}
                                            onChange={e => setEffectiveDate(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Employee Signature Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Employee Signature
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    value={employeeName}
                                    onChange={e => setEmployeeName(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Signature *
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                                    <input
                                        type="text"
                                        value={employeeSignature}
                                        onChange={e => setEmployeeSignature(e.target.value)}
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
                                    value={employeeDate}
                                    onChange={e => setEmployeeDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Employer Signature Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Employer Signature
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    value={employerName}
                                    onChange={e => setEmployerName(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter employer name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Signature *
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                                    <input
                                        type="text"
                                        value={employerSignature}
                                        onChange={e => setEmployerSignature(e.target.value)}
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
                                    value={employerDate}
                                    onChange={e => setEmployerDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => router.push('/policy/register')}
                            className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => router.push('/schedule/register')}
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
        <section className="bg-white p-8 rounded shadow pt-20 max-w-5xl mx-auto">
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
