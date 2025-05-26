'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AgreementEditor() {
  const router = useRouter();
  const [employerName, setEmployerName] = useState('Company Name');
  const [employeeName, setEmployeeName] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');

  // 기타 입력값 state도 필요에 따라 추가

  return (
    <main className="sh-mainpanel p-6">
      <div className="sh-breadcrumb mb-4">
        <nav className="breadcrumb flex gap-2 text-sm">
          <a className="breadcrumb-item text-blue-600" href="/api/home">Home</a>
          <span className="breadcrumb-item active text-gray-500">Contract register 3</span>
        </nav>
      </div>
      <summary className="sh-pagetitle mb-6">
        <div className="sh-pagetitle-left flex items-center gap-4">
          <div className="sh-pagetitle-icon text-2xl text-blue-600">
            <i className="icon ion-ios-chatboxes"></i>
          </div>
          <div className="sh-pagetitle-title">
            <span className="block text-gray-500">All Features Summary</span>
            <h2 className="text-xl font-bold">Contract register 3</h2>
          </div>
        </div>
      </summary>
      <section className=" bg-white p-6 rounded shadow">
        <h3 className="text-center text-2xl font-bold mb-4">Piecework Agreement</h3>
        <h3 className="text-xl mb-4">Agreement Between</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <input
              type="text"
              id="agreement-employer-name"
              className="border-b border-black w-full mb-2 px-2 py-1"
              value={employerName}
              onChange={e => setEmployerName(e.target.value)}
            />
            <h4 className="text-center text-blue-600">(Employer)</h4>
          </div>
          <div>
            <input
              type="text"
              id="agreement-employee-name"
              className="border-b border-black w-full mb-2 px-2 py-1"
              placeholder="Employee Name"
              value={employeeName}
              onChange={e => setEmployeeName(e.target.value)}
            />
            <h4 className="text-center text-blue-600">(Employee)</h4>
            <input
              type="text"
              id="agreement-effective__date"
              className="border-b border-black w-full mt-5 mb-2 px-2 py-1"
              placeholder="Effective Date"
              value={effectiveDate}
              onChange={e => setEffectiveDate(e.target.value)}
            />
            <h4 className="text-center text-blue-600">(Effective Date)</h4>
          </div>
        </div>
        <p className="mb-2">
          The Employer and the Employee agree to enter into this Piecework Agreement (Agreement) under clause 15 (Pieceworkers) of the Horticulture Award 2020 [MA000028] (Award). The Employer and Employee mutually agree as follows:
        </p>
        <p className="mb-2">
          1. Description of Work: The work to be performed under this Agreement includes various tasks such as strawberry, raspberry, blueberry, grape, tomato, cherry tomato, capsicum, vegetable, mushroom, apple picking, packaging, and warehouse operations.
        </p>
        <p className="mb-2">
          2. Minimum Piecework Rate: The Employer agrees to pay the Employee the piecework rate specified in Schedule A attached to this Agreement for performing the Work.
        </p>
        <p className="mb-2">
          3. If during the currency of this agreement, the minimum remuneration of the employee, averaged over a period of three consecutive days, is less than such employee would have earned had he or she been employed at the hourly rate prescribed by the award for the class of work plus 25%, then this agreement may be terminated forthwith by giving notice of intention to terminate the agreement by one party to the other.
        </p>
        <p className="mb-2">
          4. Payment Method: The piecework rate in this Agreement must be paid for all work performed in adherence to this Agreement. It will serve as the payment method, replacing the hourly or weekly wages mentioned in clause 14 of the Award. For casual employees, the calculation of piecework rates includes the prescribed casual loading.
        </p>
        <p className="mb-2">
          5. Rate Review: The piecework rate in this Agreement will be subject to review. This review will consider any changes in the Award rate, alterations in the work's nature, or adjustments to the working conditions to ensure that the minimum requirements established in clause 15 of the Award continue to be met.
        </p>
        <p className="mb-2">
          6. Productivity and Guaranteed Minimum Wage: The Employee's earnings depend on their productivity. However, even if productivity is low, the Employer guarantees the Employee a minimum hourly wage.
        </p>
        <p className="mb-2">
          7. Record Keeping: Both the Employer and the Employee will maintain a copy of this Agreement for reference.
        </p>
        <p className="mb-2">
          8. Employment Type: The Employee is engaged as a casual employee.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 mb-8">
          {/* Employee Section */}
          <div>
            <h4 className="font-bold mb-2">Employee</h4>
            <label htmlFor="agreement-employee-name">Name</label>
            <input
              type="text"
              id="agreement-employee-name"
              className="border-b border-black w-full mb-2 px-2 py-1"
            />
            <label htmlFor="agreement-employee-signature">Signature</label>
            <input
              type="text"
              id="agreement-employee-signature"
              className="border-b border-black w-full mb-2 px-2 py-1"
            />
            <label htmlFor="agreement-employee-signature-date">Date</label>
            <input
              type="text"
              id="agreement-employee-signature-date"
              className="border-b border-black w-full px-2 py-1"
            />
          </div>
          {/* Employer Section */}
          <div>
            <h4 className="font-bold mb-2">Employer</h4>
            <label htmlFor="agreement-employer-name">Name</label>
            <input
              type="text"
              id="agreement-employer-name"
              className="border-b border-black w-full mb-2 px-2 py-1"
            />
            <label htmlFor="agreement-employer-signature">Signature</label>
            <input
              type="text"
              id="agreement-employer-signature"
              className="border-b border-black w-full mb-2 px-2 py-1"
            />
            <label htmlFor="agreement-employer-signature-date">Date</label>
            <input
              type="text"
              id="agreement-employer-signature-date"
              className="border-b border-black w-full px-2 py-1"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="border border-black w-48 h-10"
            onClick={() => router.push('/schedule/editor')}
          >
            Next
          </button>
          <button
            className="border border-black w-48 h-10"
            onClick={() => router.push('/personal/editor')}
          >
            Prev
          </button>
        </div>
      </section>
    </main>
  );
}