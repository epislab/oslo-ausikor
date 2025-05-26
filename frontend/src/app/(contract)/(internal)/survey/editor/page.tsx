'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function SurveyEditor() {
    const router = useRouter();
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <main className="sh-mainpanel px-4 py-8">
            {/* Breadcrumb */}
            <div className="sh-breadcrumb mb-4">
                <nav className="breadcrumb flex items-center gap-2">
                    <a className="breadcrumb-item text-blue-600" href="/api/home">Home</a>
                    <span className="breadcrumb-item active text-gray-500">Contract register 6</span>
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
                        <h2 className="text-2xl font-bold">Contract register 6</h2>
                    </div>
                </div>
            </summary>

            {/* Main Content */}
            <section
                className=""
                style={{
                    width: "96%",
                    margin: "0 auto",
                    padding: 20,
                    height: 900,
                    overflowY: "auto",
                    border: "1px solid #ccc",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridGap: 20,
                }}
            >
                <h3 style={{ gridColumn: "span 2", textAlign: "center", fontSize: 24 }}>Health Survey Checklist</h3>

                {/* Section 1 */}
                <h5 style={{ gridColumn: "span 2", textAlign: "center", color: "blue", marginBottom: 10 }}>Section 1: General Health Information</h5>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Do you have any pre-existing medical conditions (e.g., diabetes, heart disease, allergies)?</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-disease" value="yes" checked={form['have-disease'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-disease" value="no" checked={form['have-disease'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Are you currently taking any medications?</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-medications" value="yes" checked={form['have-medications'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-medications" value="no" checked={form['have-medications'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Have you had any surgeries or medical procedures in the last 12 months?</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-surgeries" value="yes" checked={form['have-surgeries'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-surgeries" value="no" checked={form['have-surgeries'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Have you experienced any work-related injuries or illnesses in the past year?</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-injuries" value="yes" checked={form['have-injuries'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-injuries" value="no" checked={form['have-injuries'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Do you have any physical or mobility limitations that may affect your job duties?</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-limitations" value="yes" checked={form['have-limitations'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-limitations" value="no" checked={form['have-limitations'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>

                {/* Section 2 */}
                <h5 style={{ gridColumn: "span 2", textAlign: "center", color: "blue", marginBottom: 10 }}>Section 2: Mental Health and Well-Being</h5>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Do you experience work-related stress or anxiety?</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-stress" value="yes" checked={form['have-stress'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-stress" value="no" checked={form['have-stress'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Have you sought professional help or counseling for mental health concerns?</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-counseling" value="yes" checked={form['have-counseling'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-counseling" value="no" checked={form['have-counseling'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Are you aware of the Employee Assistance Program (EAP) for seeking support with mental health issues?</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="know-eap" value="yes" checked={form['know-eap'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="know-eap" value="no" checked={form['know-eap'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>

                {/* Section 3 */}
                <h5 style={{ gridColumn: "span 2", textAlign: "center", color: "blue", marginBottom: 10 }}>Section 3: Health and Safety Awareness</h5>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Are you familiar with the company&apos;s safety policies and procedures?</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="know-policies" value="yes" checked={form['know-policies'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="know-policies" value="no" checked={form['know-policies'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Have you received training in First Aid and Emergency Response?</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-training" value="yes" checked={form['have-training'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-training" value="no" checked={form['have-training'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Do you feel comfortable reporting safety concerns or incidents to your supervisor?</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="feel-comfortable" value="yes" checked={form['feel-comfortable'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="feel-comfortable" value="no" checked={form['feel-comfortable'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>

                {/* Section 4 */}
                <h5 style={{ gridColumn: "span 2", textAlign: "center", color: "blue", marginBottom: 10 }}>Section 4: Allergies and Medical Conditions</h5>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Bee Stings</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="bee-stings" value="yes" checked={form['bee-stings'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="bee-stings" value="no" checked={form['bee-stings'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Epilepsy</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-epilepsy" value="yes" checked={form['have-epilepsy'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-epilepsy" value="no" checked={form['have-epilepsy'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Diabetes</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-diabetes" value="yes" checked={form['have-diabetes'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-diabetes" value="no" checked={form['have-diabetes'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Pregnant</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-pregnant" value="yes" checked={form['have-pregnant'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-pregnant" value="no" checked={form['have-pregnant'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>High Blood Pressure</label>
                    <fieldset style={fieldsetStyle}>
                        <label><input type="radio" name="have-blood-pressure" value="yes" checked={form['have-blood-pressure'] === 'yes'} onChange={handleChange} style={radioStyle} /> Yes</label>
                        <label><input type="radio" name="have-blood-pressure" value="no" checked={form['have-blood-pressure'] === 'no'} onChange={handleChange} style={radioStyle} /> No</label>
                    </fieldset>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Other</label>
                    <input type="text" id="other-allergies" name="other-allergies" value={form['other-allergies']} onChange={handleChange} style={{ borderBottom: "1px solid black", padding: "5px", width: "300px" }} />
                </div>

                {/* Additional Information */}
                <div className="full-row" style={fullRowStyle}>
                    <p>
                        Please use this section to provide any additional information or comments related to your health, safety, or well-being concerns.
                    </p>
                    <textarea
                        name="additional-information"
                        id="additional-information"
                        rows={3}
                        value={form['additional-information']}
                        onChange={handleChange}
                        style={{ width: "100%", padding: 10, marginBottom: 20, resize: "none" }}
                    ></textarea>
                </div>

                {/* Important Messages */}
                <div className="full-row highlight" style={{ gridColumn: "span 2", backgroundColor: "rgb(235, 217, 15)", color: "black", padding: 10, fontWeight: "bold" }}>
                    <p>
                        These rules are to protect the health and safety of all our employees and our customers.
                    </p>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <p>
                        <strong>IF YOU ARE NOT SURE, ASK THE SUPERVISOR OR MANAGEMENT.</strong>
                    </p>
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label>
                        I have read, understand, and agreement to abide by the &quot;Employee Health &amp; Hygiene Rules&quot; above
                    </label>
                </div>

                {/* Signature Section */}
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Full Name</label>
                    <input type="text" name="fullname" value={form['fullname']} onChange={handleChange} style={{ borderBottom: "1px solid black", padding: "5px", width: "300px" }} />
                </div>
                <div className="full-row" style={fullRowStyle}>
                    <label style={labelStyle}>Signature</label>
                    <input type="text" name="signature" value={form['signature']} onChange={handleChange} style={{ borderBottom: "1px solid black", padding: "5px", width: "300px" }} />
                    <label style={labelStyle}>Date</label>
                    <input type="text" name="effective-date" value={form['effective-date']} onChange={handleChange} style={{ borderBottom: "1px solid black", padding: "5px", width: "300px" }} />
                </div>
            </section>
            <span>
                <input
                    type="button"
                    value="Prev"
                    className="cursor-pointer"
                    style={{
                        border: "1px solid black",
                        width: 200,
                        height: 40,
                        float: "right",
                        marginRight: 15,
                    }}
                    onClick={() => router.push('/guideline/editor')}
                />
                <input
                    type="button"
                    value="Save"
                    className="cursor-pointer"
                    style={{
                        border: "1px solid black",
                        width: 200,
                        height: 40,
                        float: "right",
                        marginRight: 155,
                    }}
                    onClick={() => router.push('/draft/overview')}
                />

            </span>
            {/* Footer 등은 별도 컴포넌트로 분리 가능 */}
        </main>
    );
}

// 인라인 스타일 객체
const fullRowStyle: React.CSSProperties = {
    gridColumn: "span 2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    border: "1px solid black",
    marginBottom: 10,
};

const labelStyle: React.CSSProperties = {
    fontWeight: "bold",
    marginRight: 20,
};

const fieldsetStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    border: "none",
    padding: 0,
    margin: 0,
};

const radioStyle: React.CSSProperties = {
    marginRight: 10,
};
