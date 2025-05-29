'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function SurveyRegister() {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const [form, setForm] = useState({
        'have-disease': '',
        'have-medications': '',
        'have-surgeries': '',
        'have-injuries': '',
        'have-limitations': '',
        'have-stress': '',
        'have-counseling': '',
        'know-eap': '',
        'know-policies': '',
        'have-training': '',
        'feel-comfortable': '',
        'bee-stings': '',
        'have-epilepsy': '',
        'have-diabetes': '',
        'have-pregnant': '',
        'have-blood-pressure': '',
        'other-allergies': '',
        'additional-information': '',
        'fullname': '',
        'signature': '',
        'effective-date': '',
    });

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/draft/overview');
    };

    if (isMobile) {
        return (
            <div className="min-h-screen bg-gray-50 pt-16 px-4 py-6">
                <div className="max-w-lg mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
                            Health Survey Checklist
                        </h1>
                        <p className="text-sm text-gray-600 text-center">
                            Please complete this health assessment form
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Section 1 */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                Section 1: General Health Information
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Do you have any pre-existing medical conditions (e.g., diabetes, heart disease, allergies)?
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-disease" value="yes" checked={form['have-disease'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-disease" value="no" checked={form['have-disease'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Are you currently taking any medications?
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-medications" value="yes" checked={form['have-medications'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-medications" value="no" checked={form['have-medications'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Have you had any surgeries or medical procedures in the last 12 months?
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-surgeries" value="yes" checked={form['have-surgeries'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-surgeries" value="no" checked={form['have-surgeries'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Have you experienced any work-related injuries or illnesses in the past year?
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-injuries" value="yes" checked={form['have-injuries'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-injuries" value="no" checked={form['have-injuries'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Do you have any physical or mobility limitations that may affect your job duties?
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-limitations" value="yes" checked={form['have-limitations'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-limitations" value="no" checked={form['have-limitations'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                Section 2: Mental Health and Well-Being
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Do you experience work-related stress or anxiety?
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-stress" value="yes" checked={form['have-stress'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-stress" value="no" checked={form['have-stress'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Have you sought professional help or counseling for mental health concerns?
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-counseling" value="yes" checked={form['have-counseling'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-counseling" value="no" checked={form['have-counseling'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Are you aware of the Employee Assistance Program (EAP) for seeking support with mental health issues?
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="know-eap" value="yes" checked={form['know-eap'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="know-eap" value="no" checked={form['know-eap'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                Section 3: Health and Safety Awareness
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Are you familiar with the company's safety policies and procedures?
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="know-policies" value="yes" checked={form['know-policies'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="know-policies" value="no" checked={form['know-policies'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Have you received training in First Aid and Emergency Response?
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-training" value="yes" checked={form['have-training'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-training" value="no" checked={form['have-training'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Do you feel comfortable reporting safety concerns or incidents to your supervisor?
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="feel-comfortable" value="yes" checked={form['feel-comfortable'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="feel-comfortable" value="no" checked={form['feel-comfortable'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                Section 4: Allergies and Medical Conditions
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Bee Stings</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="bee-stings" value="yes" checked={form['bee-stings'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="bee-stings" value="no" checked={form['bee-stings'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Epilepsy</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-epilepsy" value="yes" checked={form['have-epilepsy'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-epilepsy" value="no" checked={form['have-epilepsy'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Diabetes</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-diabetes" value="yes" checked={form['have-diabetes'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-diabetes" value="no" checked={form['have-diabetes'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Pregnant</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-pregnant" value="yes" checked={form['have-pregnant'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-pregnant" value="no" checked={form['have-pregnant'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">High Blood Pressure</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input type="radio" name="have-blood-pressure" value="yes" checked={form['have-blood-pressure'] === 'yes'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="have-blood-pressure" value="no" checked={form['have-blood-pressure'] === 'no'} onChange={handleChange} className="mr-2" />
                                            <span className="text-sm">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Other Allergies</label>
                                    <input
                                        type="text"
                                        name="other-allergies"
                                        value={form['other-allergies']}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Please specify any other allergies"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                Additional Information
                            </h2>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Please provide any additional information or comments related to your health, safety, or well-being concerns.
                                </label>
                                <textarea
                                    name="additional-information"
                                    value={form['additional-information']}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter any additional information..."
                                />
                            </div>
                        </div>

                        {/* Important Notice */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <div className="space-y-3">
                                <p className="text-sm text-yellow-800 font-medium">
                                    These rules are to protect the health and safety of all our employees and our customers.
                                </p>
                                <p className="text-sm text-yellow-800 font-bold">
                                    IF YOU ARE NOT SURE, ASK THE SUPERVISOR OR MANAGEMENT.
                                </p>
                                <p className="text-sm text-yellow-800">
                                    I have read, understand, and agreement to abide by the "Employee Health & Hygiene Rules" above
                                </p>
                            </div>
                        </div>

                        {/* Signature Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                Signature
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        value={form['fullname']}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Signature *</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                                        <input
                                            type="text"
                                            name="signature"
                                            value={form['signature']}
                                            onChange={handleChange}
                                            className="w-full text-center text-lg font-signature border-none outline-none bg-transparent"
                                            placeholder="Sign here"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                                    <input
                                        type="date"
                                        name="effective-date"
                                        value={form['effective-date']}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                            <button
                                type="button"
                                onClick={() => router.push('/guideline/register')}
                                className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                            >
                                Previous
                            </button>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                            >
                                Save & Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <section className="w-full max-w-3xl mx-auto py-8 pt-20">
            <h3 className="text-2xl font-bold mb-6">Health Survey Checklist</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    router.push('/draft/overview');
                }}
                className="space-y-6 w-full"
                id="checklistForm"
            >
                {/* Section 1 */}
                <h5 className="text-lg font-semibold">Section 1: General Health Information</h5>
                <div>
                    <label className="block mb-1">Do you have any pre-existing medical conditions (e.g., diabetes, heart disease, allergies)?</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-disease" value="yes" checked={form['have-disease'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-disease" value="no" checked={form['have-disease'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Are you currently taking any medications?</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-medications" value="yes" checked={form['have-medications'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-medications" value="no" checked={form['have-medications'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Have you had any surgeries or medical procedures in the last 12 months?</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-surgeries" value="yes" checked={form['have-surgeries'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-surgeries" value="no" checked={form['have-surgeries'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Have you experienced any work-related injuries or illnesses in the past year?</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-injuries" value="yes" checked={form['have-injuries'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-injuries" value="no" checked={form['have-injuries'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Do you have any physical or mobility limitations that may affect your job duties?</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-limitations" value="yes" checked={form['have-limitations'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-limitations" value="no" checked={form['have-limitations'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>

                {/* Section 2 */}
                <h5 className="text-lg font-semibold">Section 2: Mental Health and Well-Being</h5>
                <div>
                    <label className="block mb-1">Do you experience work-related stress or anxiety?</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-stress" value="yes" checked={form['have-stress'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-stress" value="no" checked={form['have-stress'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Have you sought professional help or counseling for mental health concerns?</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-counseling" value="yes" checked={form['have-counseling'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-counseling" value="no" checked={form['have-counseling'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Are you aware of the Employee Assistance Program (EAP) for seeking support with mental health issues?</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="know-eap" value="yes" checked={form['know-eap'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="know-eap" value="no" checked={form['know-eap'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>

                {/* Section 3 */}
                <h5 className="text-lg font-semibold">Section 3: Health and Safety Awareness</h5>
                <div>
                    <label className="block mb-1">Are you familiar with the company's safety policies and procedures?</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="know-policies" value="yes" checked={form['know-policies'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="know-policies" value="no" checked={form['know-policies'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Have you received training in First Aid and Emergency Response?</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-training" value="yes" checked={form['have-training'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-training" value="no" checked={form['have-training'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Do you feel comfortable reporting safety concerns or incidents to your supervisor?</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="feel-comfortable" value="yes" checked={form['feel-comfortable'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="feel-comfortable" value="no" checked={form['feel-comfortable'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>

                {/* Section 4 */}
                <h5 className="text-lg font-semibold">Section 4: Allergies and Medical Conditions</h5>
                <div>
                    <label className="block mb-1">Bee Stings</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="bee-stings" value="yes" checked={form['bee-stings'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="bee-stings" value="no" checked={form['bee-stings'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Epilepsy</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-epilepsy" value="yes" checked={form['have-epilepsy'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-epilepsy" value="no" checked={form['have-epilepsy'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Diabetes</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-diabetes" value="yes" checked={form['have-diabetes'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-diabetes" value="no" checked={form['have-diabetes'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Pregnant</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-pregnant" value="yes" checked={form['have-pregnant'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-pregnant" value="no" checked={form['have-pregnant'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">High Blood Pressure</label>
                    <fieldset className="flex gap-4">
                        <label><input type="radio" name="have-blood-pressure" value="yes" checked={form['have-blood-pressure'] === 'yes'} onChange={handleChange} /> Yes</label>
                        <label><input type="radio" name="have-blood-pressure" value="no" checked={form['have-blood-pressure'] === 'no'} onChange={handleChange} /> No</label>
                    </fieldset>
                </div>
                <div>
                    <label className="block mb-1">Other</label>
                    <input type="text" name="other-allergies" className="other__allergies border-b border-black px-2 py-1 w-64" value={form['other-allergies']} onChange={handleChange} />
                </div>

                {/* Additional Information */}
                <div>
                    <p>
                        Please use this section to provide any additional information or comments related to your health, safety, or well-being concerns.
                    </p>
                    <textarea
                        name="additional-information"
                        className="additional__information border border-gray-300 rounded w-full mt-2 p-2"
                        rows={3}
                        value={form['additional-information']}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Important Messages */}
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
                    <p>
                        These rules are to protect the health and safety of all our employees and our customers.
                    </p>
                </div>
                <div>
                    <p>
                        <strong>IF YOU ARE NOT SURE, ASK THE SUPERVISOR OR MANAGEMENT.</strong>
                    </p>
                </div>
                <div>
                    <label>
                        I have read, understand, and agreement to abide by the "Employee Health & Hygiene Rules" above
                    </label>
                </div>

                {/* Signature Section */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block mb-1">Full Name</label>
                        <input type="text" name="fullname" className="input__fullname border-b border-black px-2 py-1 w-full" value={form['fullname']} onChange={handleChange} />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1">Signature</label>
                        <input type="text" name="signature" className="border-b border-black px-2 py-1 w-full" value={form['signature']} onChange={handleChange} />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1">Date</label>
                        <input type="text" name="effective-date" className="effective__date border-b border-black px-2 py-1 w-full" value={form['effective-date']} onChange={handleChange} />
                    </div>
                </div>

                <div className="mt-4 button__contractMovement flex gap-4 justify-end">
                    <button type="button" className="prev__button border border-gray-400 px-6 py-2 rounded cursor-pointer"
                        onClick={() => router.push('/guideline/register')}>
                        Prev
                    </button>
                    <button type="submit" className="save__button bg-blue-600 text-white px-6 py-2 rounded cursor-pointer">
                        Save
                    </button>
                </div>
            </form>
        </section>
    );
}
