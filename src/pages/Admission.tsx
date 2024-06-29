import React, { useState } from 'react';

interface Student {
  id: number;
  name: string;
  grade: string;
  email: string;
  fatherName: string;
  fatherCnic: string;
  bForm: string;
}

const Admission: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Student>({
    id: 0,
    name: '',
    grade: '',
    email: '',
    fatherName: '',
    fatherCnic: '',
    bForm: '',
  });

  const handleAddStudent = () => {
    if (
      newStudent.name &&
      newStudent.grade &&
      newStudent.email &&
      newStudent.fatherName &&
      newStudent.fatherCnic &&
      newStudent.bForm
    ) {
      const newStudentId = students.length + 1;
      setStudents([
        ...students,
        {
          id: newStudentId,
          name: newStudent.name,
          grade: newStudent.grade,
          email: newStudent.email,
          fatherName: newStudent.fatherName,
          fatherCnic: newStudent.fatherCnic,
          bForm: newStudent.bForm,
        },
      ]);
      setNewStudent({
        id: 0,
        name: '',
        grade: '',
        email: '',
        fatherName: '',
        fatherCnic: '',
        bForm: '',
      });
    }
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ color: '#337ab7' }}>
        School Registration System
      </h1>
      <h2 className="text-center" style={{ color: '#337ab7' }}>
        Registration Form
      </h2>
      <form className="form-horizontal" style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{ fontWeight: 'bold' }}>
            Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              className="form-control"
              placeholder="Enter Student Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{ fontWeight: 'bold' }}>
            Grade:
          </label>
          <div className="col-sm-10">
            <select
              value={newStudent.grade}
              onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
              className="form-control"
            >
              <option value="">Select Grade</option>
              {Array.from(Array(10), (_, i) => i + 1).map((grade) => (
                <option value={`Class ${grade}`}>{`Class ${grade}`}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{ fontWeight: 'bold' }}>
            Email:
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              className="form-control"
              placeholder="Enter Student Email"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{ fontWeight: 'bold' }}>
            Father's Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={newStudent.fatherName}
              onChange={(e) => setNewStudent({ ...newStudent, fatherName: e.target.value })}
              className="form-control"
              placeholder="Enter Father's Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{ fontWeight: 'bold' }}>
            Father's CNIC:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={newStudent.fatherCnic}
              onChange={(e) => setNewStudent({ ...newStudent, fatherCnic: e.target.value })}
              className="form-control"
              placeholder="Enter Father's CNIC"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" style={{ fontWeight: 'bold' }}>
            B-Form:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={newStudent.bForm}
              onChange={(e) => setNewStudent({...newStudent, bForm: e.target.value })}
              className="form-control"
              placeholder="Enter B-Form Number"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="button" onClick={handleAddStudent} className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
      </form>
      <h2 className="text-center" style={{ color: '#337ab7' }}>
        Registered Students
      </h2>
      <ul className="list-group" style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
        {students.map((student) => (
          <li key={student.id} className="list-group-item">
            <span style={{ fontWeight: 'bold' }}>{student.name}</span> ({student.grade}) - {student.email}
            <br />
            Father's Name: {student.fatherName}
            <br />
            Father's CNIC: {student.fatherCnic}
            <br />
            B-Form: {student.bForm}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admission;