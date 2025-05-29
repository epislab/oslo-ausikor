'use client';

import React from "react";
import { useRouter } from 'next/navigation';

export default function GuidelineEditor() {
    const router = useRouter();

    return (
        <main className="sh-mainpanel px-4 py-8">
            {/* Breadcrumb */}
            <div className="sh-breadcrumb mb-4">
                <nav className="breadcrumb flex items-center gap-2">
                    <a className="breadcrumb-item text-blue-600" href="/api/home">Home</a>
                    <span className="breadcrumb-item active text-gray-500">Contract register 5</span>
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
                        <h2 className="text-2xl font-bold">Contract register 5</h2>
                    </div>
                </div>
            </summary>

            {/* Main Content */}
            <section className=" w-full max-w-5xl mx-auto py-8">
                <h3 className="text-3xl text-center mx-auto" style={{ width: 400 }}>
                    Work Health &amp; Safety Guidelines
                </h3>
                <br />
                <br />
                <div className="w-full flex flex-col md:flex-row gap-8">
                    {/* 좌측 */}
                    <div className="flex-1">
                        <h4 className="font-bold my-2">1. General</h4>
                        <p className="p-line-wrap mb-4">
                            <b>Follow Work Health and Safety Rules:</b> Adhere to all established Work Health and Safety (WHS) regulations and guidelines.<br />
                            <b>Report Unsafe Conditions:</b> If you observe anything that poses a safety hazard, promptly inform the owner or supervisor.<br />
                            <b>Maintain Cleanliness:</b> Keep the packing shed and its surrounding area clean and organized. Follow the principle of "Clean as you go."<br />
                            <b>No Smoking or Eating:</b> Smoking and eating are strictly prohibited in the packing area and any location where products are stored. However, non-alcoholic drinks are permitted. Please refrain from bringing glass bottles or easily breakable drink containers.<br />
                            <b>Personal Belongings:</b> Do not bring personal items such as bags and clothing into the packing area.<br />
                            <b>Alcohol and Illegal Substances:</b> The use of illegal drugs or alcohol is strictly forbidden while on the premises. Any individual under the influence may not work, and their employment could be terminated.
                        </p>
                        <h4 className="font-bold my-2">2. Clothing</h4>
                        <p className="p-line-wrap mb-4">
                            <b>Hi-Vis Apparel:</b> Hi-Vis clothing is mandatory and must be worn at all times.<br />
                            <b>Protective Gear:</b> Use all necessary protective clothing and equipment as required for your job.<br />
                            <b>Footwear:</b> Appropriate footwear is to be worn at all times in the production packing area.
                        </p>
                        <h4 className="font-bold my-2">3. Sun Safety</h4>
                        <p className="p-line-wrap mb-4">
                            Sunblock cream or lotion, hats, sun-protective clothing, and suitable footwear must be worn by all workers when working outdoors.
                        </p>
                        <h4 className="font-bold my-2">4. Hair and Jewelry</h4>
                        <p className="p-line-wrap mb-4">
                            Hair and beards must be tied back or secured, especially if you have a long fringe.<br />
                            Depending on the work environment, wearing jewelry such as rings, earrings, or necklaces may be prohibited.
                        </p>
                        <h4 className="font-bold my-2">5. Equipment</h4>
                        <p className="p-line-wrap mb-4">
                            <b>Safety of Tools:</b> Any knives or blades used in packing or binding product must be handled and stored safely. If any are lost, report it to the owner or supervisor immediately.<br />
                            <b>Prohibited Tools:</b> The use of Stanley-type knives is not allowed.<br />
                            <b>Equipment Usage:</b> Use all tools, machinery, and equipment as instructed.
                        </p>
                        <h4 className="font-bold my-2">6. Injury</h4>
                        <p className="p-line-wrap mb-4">
                            <b>Report Injuries:</b> If you are involved in an accident or suffer an injury, inform the owner or supervisor immediately.<br />
                            <b>First Aid:</b> Seek assistance from the trained first aid personnel for any injuries. Do not attempt to access band-aids or medication independently. No pills will be dispensed on-site.<br />
                            <b>Bandages and Gloves:</b> If you are wearing bandages or band-aids on your hands, disposable gloves must also be worn.<br />
                            <b>Incident Reporting:</b> Complete an Incident Form for any injury that requires treatment by a medical practitioner.
                        </p>
                    </div>
                    {/* 우측 */}
                    <div className="flex-1">
                        <h4 className="font-bold my-2">7. Sickness</h4>
                        <p className="p-line-wrap mb-4">
                            If you have a contagious illness or a condition that may compromise product safety (e.g., AIDS, HEPATITIS, SKIN INFECTIONS, OR GASTRIC INFECTIONS), you should:<br />
                            - Inform the owner or supervisor.<br />
                            - Seek medical treatment and provide a medical certificate before returning to work.
                        </p>
                        <h4 className="font-bold my-2">8. Chemical Safety</h4>
                        <p className="p-line-wrap mb-4">
                            Prior to handling chemicals, you will be provided with a Safe Work Practice or Standard Operating Procedure worksheet, and when necessary, undergo an induction.
                        </p>
                        <h4 className="font-bold my-2">9. Slips, Trips and Falls</h4>
                        <p className="p-line-wrap mb-4">
                            Exercise caution and awareness, particularly in wet conditions. Report any hazards or unsafe practices to your supervisor.
                        </p>
                        <h4 className="font-bold my-2">10. Responsibilities</h4>
                        <p className="p-line-wrap mb-4">
                            All workers must adhere to safety signs, instructions, and procedures at all times.<br />
                            Cooperation with the employer, as required by the Workplace Health and Safety Act, is the responsibility of all individuals.<br />
                            All individuals are responsible for their own safety and the safety of others.<br />
                            Please dispose of rubbish in the provided bins.<br />
                            Toilets are accessible on all farms; please ask your supervisor or Field Manager if you are unsure of their location.<br />
                            Always come prepared for variable weather conditions, such as bringing a raincoat or gumboots.
                        </p>
                        <h4 className="font-bold my-2">11. First Aid and Emergencies</h4>
                        <p className="p-line-wrap mb-4">
                            In case of a life-threatening accident, immediately dial "000."
                        </p>
                        <h4 className="font-bold my-2">12. Miscellaneous</h4>
                        <p className="p-line-wrap mb-4">
                            You must have sufficient English language proficiency to understand supervisor instructions.<br />
                            Promptly report all incidents, damage, or accidents to your supervisor.<br />
                            Employees should be in good health to perform tasks that involve lifting, bending, and working long hours in hot conditions.<br />
                            Smoking, drug use, or alcohol consumption is strictly prohibited on the premises and during working hours.<br />
                            <span className="font-bold">Note:</span> These guidelines are critical to ensuring a safe work environment for all employees. Failure to adhere to these guidelines may result in disciplinary action, up to and including termination of employment.
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 justify-end mt-8">
                    <button
                        className="border border-black w-52 h-10 bg-white text-black rounded cursor-pointer"
                        onClick={() => router.push('/agreement/editor')}
                    >
                        Prev
                    </button>
                    <button
                        className="border border-black w-52 h-10 bg-blue-600 text-white rounded cursor-pointer"
                        onClick={() => router.push('/schedule/editor')}
                    >
                        Next
                    </button>

                </div>
            </section>
            {/* Footer 등은 별도 컴포넌트로 분리 가능 */}
        </main>
    );
}
