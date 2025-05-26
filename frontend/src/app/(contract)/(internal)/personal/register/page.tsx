"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function PersonalRegister() {
    const router = useRouter();
    const [form, setForm] = useState({
        fullname: "",
        nickname: "",
        gender: "",
        birthDate: "",
        nationality: "",
        passportNumber: "",
        phone: "",
        email: "",
        street: "",
        suburb: "",
        postcode: "",
        taxFileNumber: "",
        visaGrantNumber: "",
        visaExpiryDate: "",
        emergencyName: "",
        emergencyPhone: "",
        fundName: "",
        memberNumber: "",
        bankName: "",
        accountOwner: "",
        bsbNumber: "",
        accountNumber: "",
        employeeSignature: "",
        effectiveDate: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Personal Details
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Information is gathered to ensure employment requirements are
                        fulfilled including tax, superannuation, work health & safety, and
                        work rights compliance.
                    </p>
                </div>

                <form className="space-y-6">
                    {/* Basic Information Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Basic Information
                        </h2>

                        <div className="space-y-4">
                            {/* Name */}
                            <div>
                                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={form.fullname}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Nick Name */}
                            <div>
                                <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nickname
                                </label>
                                <input
                                    type="text"
                                    name="nickname"
                                    value={form.nickname}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your nickname"
                                />
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Gender *
                                </label>
                                <div className="flex space-x-6">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={form.gender === "male"}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">Male</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={form.gender === "female"}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">Female</span>
                                    </label>
                                </div>
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                                    Date of Birth *
                                </label>
                                <input
                                    type="date"
                                    name="birthDate"
                                    value={form.birthDate}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Nationality */}
                            <div>
                                <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nationality *
                                </label>
                                <input
                                    type="text"
                                    name="nationality"
                                    value={form.nationality}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your nationality"
                                />
                            </div>

                            {/* Passport Number */}
                            <div>
                                <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                    Passport Number
                                </label>
                                <input
                                    type="text"
                                    name="passportNumber"
                                    value={form.passportNumber}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your passport number"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Information Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Contact Information
                        </h2>

                        <div className="space-y-4">
                            {/* Mobile Number */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mobile Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your mobile number"
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                                    Street Address *
                                </label>
                                <input
                                    type="text"
                                    name="street"
                                    value={form.street}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your street address"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-1">
                                        Suburb *
                                    </label>
                                    <input
                                        type="text"
                                        name="suburb"
                                        value={form.suburb}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter suburb"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                                        Postcode *
                                    </label>
                                    <input
                                        type="text"
                                        name="postcode"
                                        value={form.postcode}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter postcode"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tax & Visa Information Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Tax & Visa Information
                        </h2>

                        <div className="space-y-4">
                            {/* Tax File Number */}
                            <div>
                                <label htmlFor="taxFileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                    Tax File Number
                                </label>
                                <input
                                    type="text"
                                    name="taxFileNumber"
                                    value={form.taxFileNumber}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your TFN"
                                />
                            </div>

                            {/* Visa Grant Number */}
                            <div>
                                <label htmlFor="visaGrantNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                    Visa Grant Number
                                </label>
                                <input
                                    type="text"
                                    name="visaGrantNumber"
                                    value={form.visaGrantNumber}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter visa grant number"
                                />
                            </div>

                            {/* Visa Expiry Date */}
                            <div>
                                <label htmlFor="visaExpiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                                    Visa Expiry Date
                                </label>
                                <input
                                    type="date"
                                    name="visaExpiryDate"
                                    value={form.visaExpiryDate}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Emergency Contact Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                        <h2 className="text-lg font-semibold text-red-600 mb-4 border-b border-gray-200 pb-2">
                            Emergency Contact
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="emergencyName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Contact Name *
                                </label>
                                <input
                                    type="text"
                                    name="emergencyName"
                                    value={form.emergencyName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter emergency contact name"
                                />
                            </div>

                            <div>
                                <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Contact Number *
                                </label>
                                <input
                                    type="tel"
                                    name="emergencyPhone"
                                    value={form.emergencyPhone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter emergency contact number"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Superannuation Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                        <h2 className="text-lg font-semibold text-red-600 mb-4 border-b border-gray-200 pb-2">
                            Superannuation
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="fundName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Fund Name
                                </label>
                                <input
                                    type="text"
                                    name="fundName"
                                    value={form.fundName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter superannuation fund name"
                                />
                            </div>

                            <div>
                                <label htmlFor="memberNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                    Member Number
                                </label>
                                <input
                                    type="text"
                                    name="memberNumber"
                                    value={form.memberNumber}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter member number"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bank Details Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                        <h2 className="text-lg font-semibold text-red-600 mb-4 border-b border-gray-200 pb-2">
                            Bank Details
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Bank Name *
                                </label>
                                <input
                                    type="text"
                                    name="bankName"
                                    value={form.bankName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter bank name"
                                />
                            </div>

                            <div>
                                <label htmlFor="accountOwner" className="block text-sm font-medium text-gray-700 mb-1">
                                    Account Name *
                                </label>
                                <input
                                    type="text"
                                    name="accountOwner"
                                    value={form.accountOwner}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter account holder name"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="bsbNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                        BSB Number *
                                    </label>
                                    <input
                                        type="text"
                                        name="bsbNumber"
                                        value={form.bsbNumber}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="000-000"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                        Account Number *
                                    </label>
                                    <input
                                        type="text"
                                        name="accountNumber"
                                        value={form.accountNumber}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter account number"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Signature Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            Signature & Date
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="employeeSignature" className="block text-sm font-medium text-gray-700 mb-1">
                                    Employee Signature *
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                                    <input
                                        type="text"
                                        name="employeeSignature"
                                        value={form.employeeSignature}
                                        onChange={handleChange}
                                        className="w-full text-center text-lg font-signature border-none outline-none bg-transparent"
                                        placeholder="Sign here"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="effectiveDate" className="block text-sm font-medium text-gray-700 mb-1">
                                    Date *
                                </label>
                                <input
                                    type="date"
                                    name="effectiveDate"
                                    value={form.effectiveDate}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={() => router.push('/policy/register')}
                            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Next Step
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
