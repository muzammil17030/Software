import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Student {
  id: number;
  name: string;
  fatherName: string;
  grade: string;
  shift: 'Morning' | 'Noon';
}

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Omit<Student, 'id'>>({ 
    name: '', 
    fatherName: '', 
    grade: 'Nursery', 
    shift: 'Morning' 
  });
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const classes = [
    'Nursery', 'Prep', 'One', 'Two', 'Three', 'Four', 'Five',
    'Six', 'Seven', 'Eight', 'Nine', 'Matric'
  ];

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.fatherName && newStudent.grade) {
      setStudents([...students, { id: students.length + 1, ...newStudent }]);
      setNewStudent({ name: '', fatherName: '', grade: 'Nursery', shift: 'Morning' });
    }
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
  };

  const handleUpdateStudent = () => {
    if (editingStudent) {
      const updatedStudents = students.map((student) =>
        student.id === editingStudent.id ? editingStudent : student
      );
      setStudents(updatedStudents);
      setEditingStudent(null);
    }
  };

  const handleDeleteStudent = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container py-5 mt-3 mb-3" style={{ backgroundColor: '#f0f8ff' }}>
      <h1 className='text-primary mb-4'>Student Management</h1>
      <form className="mb-4 p-4 bg-white rounded shadow">
        <div className="row">
          <div className="col-md-3 mb-3">
            <label className='form-label'>Name:</label>
            <input
              type="text"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              className="form-control"
              placeholder="Enter name"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className='form-label'>Father's Name:</label>
            <input
              type="text"
              value={newStudent.fatherName}
              onChange={(e) => setNewStudent({ ...newStudent, fatherName: e.target.value })}
              className="form-control"
              placeholder="Enter father's name"
            />
          </div>
          <div className="col-md-2 mb-3">
            <label className='form-label'>Class:</label>
            <select
              value={newStudent.grade}
              onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
              className="form-select"
            >
              {classes.map((cls) => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
          <div className="col-md-2 mb-3">
            <label className='form-label'>Shift:</label>
            <select
              value={newStudent.shift}
              onChange={(e) => setNewStudent({ ...newStudent, shift: e.target.value as 'Morning' | 'Noon' })}
              className="form-select"
            >
              <option value="Morning">Morning</option>
              <option value="Noon">Noon</option>
            </select>
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button type="button" onClick={handleAddStudent} className="btn btn-primary w-100">
              Add Student
            </button>
          </div>
        </div>
      </form>
      <div className="table-responsive">
        <table className="table table-hover bg-white rounded shadow">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Father's Name</th>
              <th>Class</th>
              <th>Shift</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>
                  {editingStudent && editingStudent.id === student.id ? (
                    <input
                      type="text"
                      value={editingStudent.name}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, name: e.target.value })
                      }
                      className="form-control"
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td>
                  {editingStudent && editingStudent.id === student.id ? (
                    <input
                      type="text"
                      value={editingStudent.fatherName}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, fatherName: e.target.value })
                      }
                      className="form-control"
                    />
                  ) : (
                    student.fatherName
                  )}
                </td>
                <td>
                  {editingStudent && editingStudent.id === student.id ? (
                    <select
                      value={editingStudent.grade}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, grade: e.target.value })
                      }
                      className="form-select"
                    >
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                  ) : (
                    student.grade
                  )}
                </td>
                <td>
                  {editingStudent && editingStudent.id === student.id ? (
                    <select
                      value={editingStudent.shift}
                      onChange={(e) =>
                        setEditingStudent({ ...editingStudent, shift: e.target.value as 'Morning' | 'Noon' })
                      }
                      className="form-select"
                    >
                      <option value="Morning">Morning</option>
                      <option value="Noon">Noon</option>
                    </select>
                  ) : (
                    student.shift
                  )}
                </td>
                <td>
                  {editingStudent && editingStudent.id === student.id ? (
                    <button type="button" onClick={handleUpdateStudent} className="btn btn-success btn-sm">
                      Update    
                    </button>
                  ) : (
                    <>
                      <button type="button" onClick={() => handleEditStudent(student)} className="btn btn-warning btn-sm me-2">
                        Edit 
                      </button>
                      <button type="button" onClick={() => handleDeleteStudent(student.id)} className="btn btn-danger btn-sm">
                        Delete
                      </button>
                    </>
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

export default Students;