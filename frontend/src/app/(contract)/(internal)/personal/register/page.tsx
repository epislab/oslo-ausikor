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
        <section className="w-full max-w-5xl mx-auto" style={{ marginTop: 150 }}>
            <h3 className="text-4xl text-center mx-auto" style={{ width: 300 }}>
                Personal Details
            </h3>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                <article className="text-base leading-tight col-span-2">
                    <p className="mb-5">
                        Information is gathered to ensure employment requirements are
                        fulfilled including tax, superannuation, work health & safety, and
                        work rights compliance.
                    </p>
                    <form id="personalDetailsForm" className="w-full col-span-2">
                        {/* Name */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="fullname" className="w-36">
                                Name
                            </label>
                            <input
                                type="text"
                                name="fullname"
                                value={form.fullname}
                                onChange={handleChange}
                                className="border-b border-black w-52 px-2 py-1 mr-12 input__fullname"
                            />
                        </div>
                        {/* Nick Name */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="nickname" className="w-36">
                                Nick Name
                            </label>
                            <input
                                type="text"
                                name="nickname"
                                value={form.nickname}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__nickname"
                            />
                        </div>
                        {/* Gender */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="gender" className="w-36">
                                Gender:
                            </label>
                            <fieldset id="gender-fieldset" className="inline-block">
                                <label className="mr-6">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={form.gender === "male"}
                                        onChange={handleChange}
                                        className="input__gender"
                                    />
                                    Male
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={form.gender === "female"}
                                        onChange={handleChange}
                                        className="input__gender"
                                    />
                                    Female
                                </label>
                            </fieldset>
                        </div>
                        {/* Date of Birth */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="birthDate" className="w-36">
                                Date of Birth
                            </label>
                            <input
                                type="text"
                                name="birthDate"
                                value={form.birthDate}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__birthDate"
                            />
                        </div>
                        {/* Nationality */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="nationality" className="w-36">
                                Nationality:
                            </label>
                            <input
                                type="text"
                                name="nationality"
                                value={form.nationality}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__nationality"
                            />
                        </div>
                        {/* Passport Number */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="passportNumber" className="w-36">
                                Passport Number:
                            </label>
                            <input
                                type="text"
                                name="passportNumber"
                                value={form.passportNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__passportNumber"
                            />
                        </div>
                        {/* Mobile Number */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="phone" className="w-36">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__phone"
                            />
                        </div>
                        {/* Email Address */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="email" className="w-36">
                                Email Address
                            </label>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__email"
                            />
                        </div>
                        {/* Address */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="street" className="w-36">
                                Street
                            </label>
                            <input
                                type="text"
                                name="street"
                                value={form.street}
                                onChange={handleChange}
                                placeholder="Enter Your Street"
                                className="w-72 px-2 py-1 input__street mr-5"
                            />
                            <label htmlFor="suburb" className="w-36">
                                Suburb
                            </label>
                            <input
                                type="text"
                                name="suburb"
                                value={form.suburb}
                                onChange={handleChange}
                                placeholder="Enter Your Suburb"
                                className="w-72 px-2 py-1 input__suburb"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label htmlFor="postcode" className="w-36">
                                Postcode
                            </label>
                            <input
                                type="text"
                                name="postcode"
                                value={form.postcode}
                                onChange={handleChange}
                                placeholder="Enter Your Postcode"
                                className="w-72 px-2 py-1 input__postcode"
                            />
                        </div>
                        {/* Tax File Number */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="taxFileNumber" className="w-36">
                                Tax File Number
                            </label>
                            <input
                                type="text"
                                name="taxFileNumber"
                                value={form.taxFileNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__taxFileNumber"
                            />
                        </div>
                        {/* Visa Grant Number */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="visaGrantNumber" className="w-36">
                                Visa Grant Number
                            </label>
                            <input
                                type="text"
                                name="visaGrantNumber"
                                value={form.visaGrantNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__visaGrantNumber"
                            />
                        </div>
                        {/* Visa Expiry Date */}
                        <div className="flex items-center mb-5">
                            <label htmlFor="visaExpiryDate" className="w-36">
                                Visa Expiry Date
                            </label>
                            <input
                                type="text"
                                name="visaExpiryDate"
                                value={form.visaExpiryDate}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__visaExpiryDate"
                            />
                        </div>
                        {/* Emergency Information */}
                        <h4 className="text-red-600 text-xl mt-8 mb-2">Emergency Information</h4>
                        <div className="flex items-center mb-5">
                            <label htmlFor="emergencyName" className="w-36">
                                Name
                            </label>
                            <input
                                type="text"
                                name="emergencyName"
                                value={form.emergencyName}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__emergencyName"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label htmlFor="emergencyPhone" className="w-36">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                name="emergencyPhone"
                                value={form.emergencyPhone}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__emergencyPhone"
                            />
                        </div>
                        {/* Superannuation */}
                        <h4 className="text-red-600 text-xl mt-8 mb-2">Superannuation</h4>
                        <div className="flex items-center mb-5">
                            <label htmlFor="fundName" className="w-36">
                                Name of Fund
                            </label>
                            <input
                                type="text"
                                name="fundName"
                                value={form.fundName}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__fundName"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label htmlFor="memberNumber" className="w-36">
                                Member Number
                            </label>
                            <input
                                type="text"
                                name="memberNumber"
                                value={form.memberNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__memberNumber"
                            />
                        </div>
                        {/* Bank Details */}
                        <h4 className="text-red-600 text-xl mt-8 mb-2">Bank Details</h4>
                        <div className="flex items-center mb-5">
                            <label htmlFor="bankName" className="w-36">
                                Bank Name
                            </label>
                            <input
                                type="text"
                                name="bankName"
                                value={form.bankName}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__bankName"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label htmlFor="accountOwner" className="w-36">
                                Account Name
                            </label>
                            <input
                                type="text"
                                name="accountOwner"
                                value={form.accountOwner}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__accountOwner"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label htmlFor="bsbNumber" className="w-36">
                                BSB
                            </label>
                            <input
                                type="text"
                                name="bsbNumber"
                                value={form.bsbNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__bsbNumber"
                            />
                        </div>
                        <div className="flex items-center mb-5">
                            <label htmlFor="accountNumber" className="w-36">
                                Account Number
                            </label>
                            <input
                                type="text"
                                name="accountNumber"
                                value={form.accountNumber}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__accountNumber"
                            />
                        </div>
                        {/* Signature */}
                        <div className="flex items-center mb-5 mt-12">
                            <label htmlFor="employeeSignature" className="w-36">
                                Employee Signature
                            </label>
                            <input
                                type="text"
                                name="employeeSignature"
                                value={form.employeeSignature}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 h-20 input__employeeSignature"
                            />
                            <label htmlFor="effectiveDate" className="w-36 ml-5">
                                Date
                            </label>
                            <input
                                type="text"
                                name="effectiveDate"
                                value={form.effectiveDate}
                                onChange={handleChange}
                                className="border-b border-black w-72 px-2 py-1 input__effectiveDate"
                            />
                        </div>
                        <div className="mt-2 button__contractMovement">

                            <button
                                type="button"
                                style={{ float: "right", marginRight: 155 }}
                                className="next__button bg-blue-600 text-white px-6 py-2 rounded cursor-pointer"
                                onClick={() => router.push('/policy/register')}
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </article>
            </div>
        </section>
    );
}
