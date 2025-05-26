'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function WorkerEditor() {
    // 각 필드의 상태 관리
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phone: '',
        birth: '',
        gender: '',
    });

    // 입력값 변경 핸들러
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 폼 제출 핸들러
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 저장 로직 추가
        alert('Saved!');
    };

    const [isMobile, setIsMobile] = useState(false);

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
            <div className="relative w-full min-h-screen bg-white text-black overflow-x-hidden flex flex-col">
                <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-2">
                    {/* 프로필 사진 */}
                    <div className="relative flex flex-col items-center mb-2">
                        <Image
                            src="/img/auth/external/worker/Minji_Park.jpg"
                            width={120}
                            height={120}
                            alt="Profile"
                            className="rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <button className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-2 border-2 border-white shadow text-white">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z" /></svg>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold mb-8 text-center">Edit Profile</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="text-gray-500 mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <label className="text-gray-500 mb-1">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <label className="text-gray-500 mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="+234 904 6470"
                                />
                                <label className="text-gray-500 mb-1">Birth</label>
                                <select
                                    name="birth"
                                    value={form.birth}
                                    onChange={handleChange}
                                    className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                >
                                    <option value="">Birth</option>
                                    <option value="1990">1990</option>
                                    <option value="1991">1991</option>
                                    <option value="1992">1992</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-500 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <label className="text-gray-500 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <label className="text-gray-500 mb-1">Gender</label>
                                <select
                                    name="gender"
                                    value={form.gender}
                                    onChange={handleChange}
                                    className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                >
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Save Changes</button>
                        </div>
                    </form>
                </main>
            </div>
        );
    }

    return (
        <div className="relative w-full min-h-screen bg-white text-black overflow-x-hidden flex flex-col" >
            <main className="flex flex-col items-center justify-center flex-1">
                <div className="relative flex flex-col items-center mb-2">
                    <Image
                        src="/img/auth/external/worker/Minji_Park.jpg"
                        width={120}
                        height={120}
                        alt="Profile"
                        className="rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <button className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-2 border-2 border-white shadow text-white">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z" /></svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-8 text-center">Edit Profile</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="text-gray-500 mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <label className="text-gray-500 mb-1">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <label className="text-gray-500 mb-1">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="+234 904 6470"
                            />
                            <label className="text-gray-500 mb-1">Birth</label>
                            <select
                                name="birth"
                                value={form.birth}
                                onChange={handleChange}
                                className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                <option value="">Birth</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-500 mb-1">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <label className="text-gray-500 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <label className="text-gray-500 mb-1">Gender</label>
                            <select
                                name="gender"
                                value={form.gender}
                                onChange={handleChange}
                                className="border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Save Changes</button>
                    </div>
                </form>
            </main>
        </div>
    );
}
