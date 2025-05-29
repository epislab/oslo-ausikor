'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
export default function PolicyEditor() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        signature: "",
        date: "",
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
                    <span className="breadcrumb-item active text-gray-500">Contract register 2</span>
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
                        <h2 className="text-2xl font-bold">Contract register 2</h2>
                    </div>
                </div>
            </summary>

            {/* Main Content */}
            <section className=" max-w-5xl mx-auto">
                <h3 className="text-4xl font-bold text-center mx-auto" style={{ width: 300 }}>
                    <span className="span__companyName text-blue-600">Company</span> Policies
                </h3>
                <br />

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-8">
                    {/* Left Column */}
                    <div className="w-full">
                        <h4 className="font-semibold mt-4">1. Discipline</h4>
                        <p id="discipline-policy" className="mb-4">
                            The &quot;<span className="span__companyName text-blue-600">Company</span>&quot; uses fair and reasonable procedures to resolve business
                            performance or conduct issues. The objective of this policy and
                            procedures is to ensure that fair and reasonable process occurs in
                            the management of misconduct or work performance. Any employee who
                            commits willful or serious misconduct will be subject to immediate
                            dismissal includes but is not limited to: theft; assault; willful
                            damage; fraud; discrimination; sexual harassment; and breaches of
                            workplace health and safety requirement and instructions.
                        </p>
                        <h4 className="font-semibold mt-4">2. Workplace Health & Safety</h4>
                        <p id="workplace-health-and-safety-policy" className="mb-4">
                            The &quot;<span className="span__companyName text-blue-600">Company</span>&quot; committed to providing a safe and healthy working environment
                            for all employees, visitors, and contractors, comply with all
                            relevant local, state, and federal laws and regulations related to
                            workplace health and safety. All employees are expected to adhere
                            to these laws and regulations at all times. Employees are
                            encouraged to report all hazards and unsafe conditions immediately
                            to their supervisors or designated safety officers. We will
                            promptly investigate and mitigate hazards to reduce the risk of
                            accidents and injuries. Failure to adhere to these policies may
                            result in disciplinary action, up to and including termination of
                            employment, as deemed appropriate by <span className="span__companyName text-blue-600">Company</span>&quot;. Remember that
                            these policies should be tailored to your specific company&#39;s needs
                            and should always be in line with the relevant legal and
                            regulatory requirements in your jurisdiction.
                        </p>
                        <h4 className="font-semibold mt-4">3. Sexual Harassment</h4>
                        <p id="sexual-harassment-policy" className="mb-4">
                            Under the Federal Sex Discrimination Act, sexual harassment is
                            illegal. The &quot;<span className="span__companyName text-blue-600">Company</span>&quot; must make efforts to ensure that all employees work in an
                            environment free from sexual harassment and gender discrimination.
                            All employees must be responsible for their own actions and must
                            not cause offense to others due to their actions.
                        </p>
                        <h4 className="font-semibold mt-4">4. Workplace Harassment</h4>
                        <p id="workplace-harassment-policy" className="mb-4">
                            The Fair Work Amendment Act 2013 defines workplace bullying as
                            repeated unreasonable behavior by an individual towards a worker
                            which creates a risk to health and safety. Bullying behavior can
                            range from obvious verbal or physical assault to subtle
                            psychological abuse. It can include physical or verbal abuse;
                            yelling, screaming or offensive language; excluding or isolating
                            employees; psychological harassment; intimidation; assigning
                            meaningless tasks unrelated to the job; giving employees
                            impossible jobs; deliberately changed work rosters to
                            inconvenience particular employees; undermining work performance
                            by deliberately withholding information vital for effective work
                            performance.
                        </p>
                        <h4 className="font-semibold mt-4">5. Dress Code and Safety</h4>
                        <p id="dress-code-and-safety-policy" className="mb-4">
                            Our dress code is casual, but it&#39;s essential to prioritize safety.
                            You must wear clothing that provides protection from the weather
                            and the potential hazards of machinery. When working in the field,
                            you are required to wear hats, closed-toe footwear, and either
                            long sleeves or sunscreen. In the packing shed, wear hairnets or
                            hats along with closed footwear. Please refrain from wearing
                            singlets, bikinis, or going shirtless anywhere on the farm.
                            Failure to adhere to these clothing guidelines is a breach of your
                            health and safety responsibilities, and it may result in immediate
                            dismissal. Your safety is our top priority.
                        </p>
                    </div>
                    {/* Right Column */}
                    <div className="w-full">
                        <h4 className="font-semibold mt-4">6. Language</h4>
                        <p id="language-policy" className="mb-4">
                            By signing here, I declare that I will abide by company policies.
                            The primary language for communication within the workplace is
                            English. English must be used for all official business and
                            operational communications. In situations where it is necessary
                            for clear and effective communication, employees are permitted to
                            use their native language. However, this should be the exception
                            rather than the rule, and it is encouraged only when it enhances
                            comprehension and eliminates misunderstandings. If an employee&#39;s
                            communication difficulties become an issue and affect workflow or
                            create risks, they may be subject to disciplinary action, up to
                            and including termination.
                        </p>
                        <h4 className="font-semibold mt-4">7. Hand Hygiene Protocol</h4>
                        <p className="mb-2">In order to maintain a high standard of hygiene and safety, all
                            employees involved in fruit handling are required to adhere to the
                            following hand hygiene guidelines:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li id="hand-hygiene-commence-work">
                                <b>Before Commencing Work:</b> Hands must be washed before the start of
                                each work period.
                            </li>
                            <li id="hand-hygiene-after-toilet">
                                <b>After Using the Toilet:</b> Handwashing is mandatory immediately
                                after using the toilet.
                            </li>
                            <li id="hand-hygiene-after-contact-face">
                                <b>After Contact with Face:</b> Hands should be washed after touching
                                the nose or mouth.
                            </li>
                            <li id="hand-hygiene-after-handling-material">
                                <b>After Handling Contaminated Material:</b> Following contact with
                                contaminated materials such as boxes and tools, hands must be
                                thoroughly washed.
                            </li>
                        </ul>
                        <h4 className="font-semibold mt-4">8. Food Safety Guidelines</h4>
                        <ul className="list-disc pl-6 mb-4">
                            <li id="food-safety-commence-work">
                                To ensure the highest standards of food hygiene, all individuals
                                are expected to observe the following guidelines:
                            </li>
                            <li id="food-safety-toilet">
                                <b>Food Handling Areas:</b> While in food handling areas, individuals
                                must refrain from behaviors that could lead to food
                                contamination.
                            </li>
                            <li id="food-safety-skin-conditions">
                                <b>Skin Conditions:</b> Individuals with broken skin, such as cuts or
                                wounds, are required to promptly inform the First Aid Officer
                                for immediate treatment.
                            </li>
                            <li id="food-safety-communicable-diseases">
                                <b>Communicable Diseases:</b> Individuals with communicable diseases or
                                conditions, such as colds, flu, cough, diarrhea, or vomiting,
                                must inform their employer and refrain from attending work until
                                they have fully recovered from the condition.
                            </li>
                        </ul>
                        <h4 className="font-semibold mt-4">9. Contractor Retention Policy</h4>
                        <p id="contractor-retention-policy" className="mb-4">
                            Contractors laboring at designated farms under our supervision
                            shall honor their contractual commitments for the stipulated
                            period.
                        </p>
                    </div>
                </div>

                {/* Signature Section */}
                <h3 className="text-blue-600 text-center mt-8 mb-2">
                    By signing here, I declare that I will abide by company policies.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <div>
                        <label htmlFor="policy-signature-name" className="block mb-1">Name</label>
                        <input
                            type="text"
                            id="policy-signature-name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="border-b border-black w-full px-2 py-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="policy-signature" className="block mb-1">Signature</label>
                        <input
                            type="text"
                            id="policy-signature"
                            name="signature"
                            value={form.signature}
                            onChange={handleChange}
                            className="border-b border-black w-full px-2 py-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="policy-signature-date" className="block mb-1">Date</label>
                        <input
                            type="text"
                            id="policy-signature-date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className="border-b border-black w-full px-2 py-1"
                        />
                    </div>
                </div>

                {/* Next/Prev Buttons */}
                <div className="flex gap-4 justify-end mt-4">

                    <button
                        type="button"
                        className="border border-black w-52 h-10 bg-white text-black rounded"
                        onClick={() => router.push('/personal/editor')}
                    >
                        Prev
                    </button>
                    <button
                        type="button"
                        className="border border-black w-52 h-10 bg-blue-600 text-white rounded"
                        onClick={() => router.push('/agreement/editor')}
                    >
                        Next
                    </button>
                </div>
            </section>
            {/* Footer 등은 별도 컴포넌트로 분리 가능 */}
        </main>
    );
}
