import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Student {
  id: number;
  name: string;
  fatherName: string;
  grade: string;
  shift: 'Morning' | 'Noon';
}

interface Fee {
  id: number;
  studentId: number;
  amount: number;
  month: string;
  status: 'Paid' | 'Unpaid';
}

const StudentFees: React.FC = () => {
  const [students] = useState<Student[]>([]);
  const [fees, setFees] = useState<Fee[]>([]);
  const [newFee, setNewFee] = useState<Omit<Fee, 'id'>>({
    studentId: 0,
    amount: 0,
    month: '',
    status: 'Unpaid'
  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleAddFee = () => {
    if (newFee.studentId && newFee.amount && newFee.month) {
      setFees([...fees, { id: fees.length + 1, ...newFee }]);
      setNewFee({ studentId: 0, amount: 0, month: '', status: 'Unpaid' });
    }
  };

  const handleUpdateFeeStatus = (feeId: number, status: 'Paid' | 'Unpaid') => {
    const updatedFees = fees.map((fee) =>
      fee.id === feeId ? { ...fee, status } : fee
    );
    setFees(updatedFees);
  };

  return (
    <div className="container py-5 mt-3 mb-3" style={{ backgroundColor: '#f0f8ff' }}>
      <h1 className='text-primary mb-4'>Student Fee Management</h1>
      <form className="mb-4 p-4 bg-white rounded shadow">
        <div className="row">
          <div className="col-md-3 mb-3">
            <label className='form-label'>Student:</label>
            <select
              value={newFee.studentId}
              onChange={(e) => setNewFee({ ...newFee, studentId: Number(e.target.value) })}
              className="form-select"
            >
              <option value={0}>Select Student</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>{student.name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <label className='form-label'>Amount:</label>
            <input
              type="number"
              value={newFee.amount}
              onChange={(e) => setNewFee({ ...newFee, amount: Number(e.target.value) })}
              className="form-control"
              placeholder="Enter fee amount"
            />
          </div>
          <div className="col-md-2 mb-3">
            <label className='form-label'>Month:</label>
            <select
              value={newFee.month}
              onChange={(e) => setNewFee({ ...newFee, month: e.target.value })}
              className="form-select"
            >
              <option value="">Select Month</option>
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className="col-md-2 mb-3">
            <label className='form-label'>Status:</label>
            <select
              value={newFee.status}
              onChange={(e) => setNewFee({ ...newFee, status: e.target.value as 'Paid' | 'Unpaid' })}
              className="form-select"
            >
              <option value="Unpaid">Unpaid</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button type="button" onClick={handleAddFee} className="btn btn-primary w-100">
              Add Fee
            </button>
          </div>
        </div>
      </form>
      <div className="table-responsive">
        <table className="table table-hover bg-white rounded shadow">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Amount</th>
              <th>Month</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.id}>
                <td>{fee.id}</td>
                <td>{students.find(s => s.id === fee.studentId)?.name}</td>
                <td>${fee.amount}</td>
                <td>{fee.month}</td>
                <td>{fee.status}</td>
                <td>
                  {fee.status === 'Unpaid' ? (
                    <button 
                      type="button" 
                      onClick={() => handleUpdateFeeStatus(fee.id, 'Paid')} 
                      className="btn btn-success btn-sm"
                    >
                      Mark as Paid
                    </button>
                  ) : (
                    <button 
                      type="button" 
                      onClick={() => handleUpdateFeeStatus(fee.id, 'Unpaid')} 
                      className="btn btn-warning btn-sm"
                    >
                      Mark as Unpaid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentFees;