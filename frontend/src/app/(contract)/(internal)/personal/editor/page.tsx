'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function PersonalEditor() {
    const router = useRouter();
    const [form, setForm] = useState({
        title: "",
        firstName: "",
        lastName: "",
        englishName: "",
        gender: "",
        birthDate: "",
        mobileNumber: "",
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
        <main className="sh-mainpanel px-4 py-8">
            {/* Breadcrumb */}
            <div className="sh-breadcrumb mb-4">
                <nav className="breadcrumb flex items-center gap-2">
                    <a className="breadcrumb-item text-blue-600" href="/api/home">Home</a>
                    <span className="breadcrumb-item active text-gray-500">Contract register 1</span>
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
                        <h2 className="text-2xl font-bold">Contract register 1</h2>
                    </div>
                </div>
            </summary>

            {/* Main Content */}
            <section className=" max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-6">Personal Details</h3>
                <div className="text-base leading-relaxed">
                    <p className="mb-5">
                        Information is gathered to ensure employment requirements are fulfilled including tax, superannuation, work health & safety, and work rights compliance.
                    </p>

                    <form>
                        {/* Title */}
                        <div className="flex items-center mb-5">
                            <label className="w-36 mr-4">Title:</label>
                            <fieldset className="inline-block">
                                {["mr", "mrs", "miss", "ms"].map((t) => (
                                    <label key={t} className="mr-6">
                                        <input
                                            type="radio"
                                            name="title"
                                            value={t}
                                            checked={form.title === t}
                                            onChange={handleChange}
                                        />{" "}
                                        {t.charAt(0).toUpperCase() + t.slice(1)}
                                    </label>
                                ))}
                            </fieldset>
                        </div>
                        {/* Name */}
                        <div className="flex items-center mb-5">
                            <label className="w-36">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 mr-8"
                            />
                            <label className="w-36">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* English Name */}
                        <div className="flex items-center mb-5">
                            <label className="w-36">English Name</label>
                            <input
                                type="text"
                                name="englishName"
                                value={form.englishName}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* Gender */}
                        <div className="flex items-center mb-5">
                            <label className="w-36">Gender:</label>
                            <fieldset className="inline-block">
                                <label className="mr-6">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={form.gender === "male"}
                                        onChange={handleChange}
                                    />{" "}
                                    Male
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={form.gender === "female"}
                                        onChange={handleChange}
                                    />{" "}
                                    Female
                                </label>
                            </fieldset>
                        </div>
                        {/* Date of Birth */}
                        <div className="flex items-center mb-5">
                            <label className="w-36">Date of Birth</label>
                            <input
                                type="text"
                                name="birthDate"
                                value={form.birthDate}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* Mobile Number */}
                        <div className="flex items-center mb-5">
                            <label className="w-36">Mobile Number</label>
                            <input
                                type="text"
                                name="mobileNumber"
                                value={form.mobileNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* Email Address */}
                        <div className="flex items-center mb-5">
                            <label className="w-36">Email Address</label>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* Address */}
                        <div className="flex items-center mb-5">
                            <label className="w-36">Street</label>
                            <input
                                type="text"
                                name="street"
                                value={form.street}
                                onChange={handleChange}
                                placeholder="Enter Your Street"
                                className="w-72 px-2 py-1 mr-5"
                            />
                            <label className="w-36">Suburb</label>
                            <input
                                type="text"
                                name="suburb"
                                value={form.suburb}
                                onChange={handleChange}
                                placeholder="Enter Your Suburb"
                                className="w-72 px-2 py-1"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label className="w-36">Postcode</label>
                            <input
                                type="text"
                                name="postcode"
                                value={form.postcode}
                                onChange={handleChange}
                                placeholder="Enter Your Postcode"
                                className="w-72 px-2 py-1"
                            />
                        </div>
                        {/* Tax File Number */}
                        <div className="flex items-center mb-5">
                            <label className="w-36">Tax File Number</label>
                            <input
                                type="text"
                                name="taxFileNumber"
                                value={form.taxFileNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* Visa Grant Number */}
                        <div className="flex items-center mb-5">
                            <label className="w-36">Visa Grant Number</label>
                            <input
                                type="text"
                                name="visaGrantNumber"
                                value={form.visaGrantNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* Visa Expiry Date */}
                        <div className="flex items-center mb-5">
                            <label className="w-36">Visa Expiry Date</label>
                            <input
                                type="text"
                                name="visaExpiryDate"
                                value={form.visaExpiryDate}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* Emergency Information */}
                        <h4 className="text-red-600 text-xl mt-8 mb-2">Emergency Information</h4>
                        <div className="flex items-center mb-5">
                            <label className="w-36">Name</label>
                            <input
                                type="text"
                                name="emergencyName"
                                value={form.emergencyName}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label className="w-36">Mobile Number</label>
                            <input
                                type="text"
                                name="emergencyPhone"
                                value={form.emergencyPhone}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* Superannuation */}
                        <h4 className="text-red-600 text-xl mt-8 mb-2">Superannuation</h4>
                        <div className="flex items-center mb-5">
                            <label className="w-36">Name of Fund</label>
                            <input
                                type="text"
                                name="fundName"
                                value={form.fundName}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label className="w-36">Member Number</label>
                            <input
                                type="text"
                                name="memberNumber"
                                value={form.memberNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* Bank Details */}
                        <h4 className="text-red-600 text-xl mt-8 mb-2">Bank Details</h4>
                        <div className="flex items-center mb-5">
                            <label className="w-36">Bank Name</label>
                            <input
                                type="text"
                                name="bankName"
                                value={form.bankName}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label className="w-36">Account Name</label>
                            <input
                                type="text"
                                name="accountOwner"
                                value={form.accountOwner}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label className="w-36">BSB</label>
                            <input
                                type="text"
                                name="bsbNumber"
                                value={form.bsbNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label className="w-36">Account Number</label>
                            <input
                                type="text"
                                name="accountNumber"
                                value={form.accountNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* Signature */}
                        <div className="flex items-center mb-5">
                            <label className="w-36">Employee Signature</label>
                            <input
                                type="text"
                                name="employeeSignature"
                                value={form.employeeSignature}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                            <label className="w-36 ml-5">Date</label>
                            <input
                                type="text"
                                name="effectiveDate"
                                value={form.effectiveDate}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1"
                            />
                        </div>
                        {/* Next Button */}
                        <div className="flex justify-end mt-4">
                            <button
                                type="button"
                                className="border border-black w-52 h-10 bg-blue-600 text-white rounded"
                                onClick={() => router.push('/policy/editor')}
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {/* Footer 등은 별도 컴포넌트로 분리 가능 */}
        </main>
    );
}
