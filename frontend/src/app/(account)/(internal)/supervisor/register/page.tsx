"use client";

import React, { useState } from "react";

interface FormState {
    username: string;
    fullName: string;
    gender: "MALE" | "FEMALE" | "OTHER" | "";
    email: string;
    password: string;
    confirmPassword: string;
}

export default function SupervisorRegister() {
    const [form, setForm] = useState<FormState>({
        username: "",
        fullName: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [dontMatch, setDontMatch] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (checked ? value : prev.gender) : value,
        }));
    };

    const handleGender = (value: "MALE" | "FEMALE" | "OTHER") => {
        setForm((prev) => ({ ...prev, gender: value }));
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.username) newErrors.username = "Invalid username";
        if (!form.fullName) newErrors.fullName = "Invalid full name";
        if (!form.gender) newErrors.gender = "Gender can not be empty";
        if (!form.email) newErrors.email = "Invalid email";
        if (!form.password) newErrors.password = "Invalid password";
        if (!form.confirmPassword) newErrors.confirmPassword = "Invalid confirm password";
        if (form.password !== form.confirmPassword) setDontMatch(true);
        else setDontMatch(false);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0 && !dontMatch;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // 실제 회원가입 처리 로직 (API 등)
            console.log("회원가입 데이터:", form);
        }
    };

    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center relative">
            <div className="w-full max-w-md bg-white rounded shadow p-8 mt-8 mb-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
                {dontMatch && (
                    <div className="mb-2 text-red-600 text-sm">Passwords &apos;don&apos;t match</div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username */}
                    <div>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-gray-400 px-2 py-2 focus:outline-none"
                            placeholder="Username"
                        />
                        <label className="block text-xs mt-1 text-gray-600">
                            Username
                            {errors.username && <small className="errors text-red-500 ml-2">{errors.username}</small>}
                        </label>
                    </div>
                    {/* Full Name */}
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-gray-400 px-2 py-2 focus:outline-none"
                            placeholder="Full Name"
                        />
                        <label className="block text-xs mt-1 text-gray-600">
                            Full Name
                            {errors.fullName && <small className="errors text-red-500 ml-2">{errors.fullName}</small>}
                        </label>
                    </div>
                    {/* Gender */}
                    <div>
                        <label className="block text-xs mb-1 text-gray-600">Gender</label>
                        {errors.gender && <small className="errors text-red-500 ml-2">{errors.gender}</small>}
                        <div className="flex gap-4 mt-1">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="MALE"
                                    checked={form.gender === "MALE"}
                                    onChange={() => handleGender("MALE")}
                                    className="mr-1"
                                />
                                Male
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="FEMALE"
                                    checked={form.gender === "FEMALE"}
                                    onChange={() => handleGender("FEMALE")}
                                    className="mr-1"
                                />
                                Female
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="OTHER"
                                    checked={form.gender === "OTHER"}
                                    onChange={() => handleGender("OTHER")}
                                    className="mr-1"
                                />
                                Other
                            </label>
                        </div>
                    </div>
                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-gray-400 px-2 py-2 focus:outline-none"
                            placeholder="Email"
                        />
                        <label className="block text-xs mt-1 text-gray-600">
                            Email
                            {errors.email && <small className="errors text-red-500 ml-2">{errors.email}</small>}
                        </label>
                    </div>
                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-gray-400 px-2 py-2 focus:outline-none"
                            placeholder="Password"
                        />
                        <label className="block text-xs mt-1 text-gray-600">
                            Password
                            {errors.password && <small className="errors text-red-500 ml-2">{errors.password}</small>}
                        </label>
                    </div>
                    {/* Confirm Password */}
                    <div>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-gray-400 px-2 py-2 focus:outline-none"
                            placeholder="Confirm Password"
                        />
                        <label className="block text-xs mt-1 text-gray-600">
                            Confirm Password
                            {errors.confirmPassword && <small className="errors text-red-500 ml-2">{errors.confirmPassword}</small>}
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mt-4 cursor-pointer">
                            Sign up
                        </button>
                    </div>
                </form>
                <footer className="footer text-center text-xs text-gray-400 mt-8">&copy; Hobbie 2021. All rights reserved.</footer>
            </div>
        </main>
    );
}
