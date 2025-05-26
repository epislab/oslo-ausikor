'use client';

import React from "react";

export default function AgreementView() {
    return (
        <article className="sh-headpanel">
            <p id="agreement-description">
                The Employer and the Employee agree to enter into this Piecework Agreement (Agreement) under clause 15
                (Pieceworkers) of the Horticulture Award 2020 [MA000028] (Award). The Employer and Employee mutually agree
                as follows:
            </p>
            <p id="agreement-description-of-work" className="p-line-wrap">
                1. Description of Work: The work to be performed under this Agreement includes various tasks such as
                strawberry, raspberry, blueberry, grape, tomato, cherry tomato, capsicum, vegetable, mushroom, apple
                picking, packaging, and warehouse operations.
            </p>
            <p id="agreement-minimum-piecework-rate" className="p-line-wrap">
                2. Minimum Piecework Rate: The Employer agrees to pay the Employee the piecework rate specified in
                Schedule A attached to this Agreement for performing the Work.
            </p>
            <p id="agreement-currency-clause" className="p-line-wrap">
                3. If during the currency of this agreement, the minimum remuneration of the employee, averaged over a
                period of three consecutive days, is less than such employee would have earned had he or she been employed
                at the hourly rate prescribed by the award for the class of work plus 25%, then this agreement may be
                terminated forthwith by giving notice of intention to terminate the agreement by one party to the other.
            </p>
            <p id="agreement-payment-method" className="p-line-wrap">
                4. Payment Method: The piecework rate in this Agreement must be paid for all work performed in adherence
                to this Agreement. It will serve as the payment method, replacing the hourly or weekly wages mentioned in
                clause 14 of the Award. For casual employees, the calculation of piecework rates includes the prescribed
                casual loading.
            </p>
            <p id="agreement-rate-review" className="p-line-wrap">
                5. Rate Review: The piecework rate in this Agreement will be subject to review. This review will consider
                any changes in the Award rate, alterations in the work's nature, or adjustments to the working conditions
                to ensure that the minimum requirements established in clause 15 of the Award continue to be met.
            </p>
            <p id="agreement-productivity-and-guaranteed-wage" className="p-line-wrap">
                6. Productivity and Guaranteed Minimum Wage: The Employee's earnings depend on their productivity.
                However, even if productivity is low, the Employer guarantees the Employee a minimum hourly wage.
            </p>
            <p id="agreement-record-keeping" className="p-line-wrap">
                7. Record Keeping: Both the Employer and the Employee will maintain a copy of this Agreement for
                reference.
            </p>
            <p id="agreement-termination" className="p-line-wrap">
                8. Employment Type: The Employee is engaged as a casual employee.
            </p>
        </article>
    );
}
