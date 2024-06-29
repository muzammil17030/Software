import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Subject {
  id: number;
  name: string;
  teacherName: string;
}

const Subjects: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [newSubject, setNewSubject] = useState<{ name: string; teacherName: string }>({ name: '', teacherName: '' });
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);

  const teachers: string[] = [
    '',
    'Ali',
    'Sarfaraz',
    'Mahad',
    'Muzammil ',
  ];

  const handleAddSubject = () => {
    if (newSubject.name && newSubject.teacherName) {
      const newSubjectId = subjects.length + 1;
      setSubjects([...subjects, { id: newSubjectId, name: newSubject.name, teacherName: newSubject.teacherName }]);
      setNewSubject({ name: '', teacherName: '' });
    }
  };

  const handleEditSubject = (subject: Subject) => {
    setEditingSubject(subject);
  };

  const handleUpdateSubject = () => {
    if (editingSubject) {
      const updatedSubjects = subjects.map((subject) =>
        subject.id === editingSubject.id? editingSubject : subject
      );
      setSubjects(updatedSubjects);
      setEditingSubject(null);
    }
  };

  const handleDeleteSubject = (id: number) => {
    setSubjects(subjects.filter((subject) => subject.id!== id));
  };

  return (
    <div className="container py-5 mt-3 mb-3" style={{ backgroundColor: '#f0f8ff' }}>
      <h1 className='text-primary mb-4'>Subject Management</h1>
      <form className="mb-4 p-4 bg-white rounded shadow">
        <div className="row">
          <div className="col-md-3 mb-3">
            <label className='form-label'>Name:</label>
            <input
              type="text"
              value={newSubject.name}
              onChange={(e) => setNewSubject({...newSubject, name: e.target.value })}
              className="form-control"
              placeholder="Enter subject name"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className='form-label'>Teacher Name:</label>
            <select
              value={newSubject.teacherName}
              onChange={(e) => setNewSubject({...newSubject, teacherName: e.target.value })}
              className="form-select"
            >
              {teachers.map((teacher) => (
                <option key={teacher} value={teacher}>{teacher}</option>
              ))}
            </select>
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button type="button" onClick={handleAddSubject} className="btn btn-primary w-100">
              Add Subject
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
              <th>Teacher Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id}>
                <td>{subject.id}</td>
                <td>
                  {editingSubject && editingSubject.id === subject.id? (
                    <input
                      type="text"
                      value={editingSubject.name}
                      onChange={(e) =>
                        setEditingSubject({...editingSubject, name: e.target.value })
                      }
                      className="form-control"
                    />
                  ) : (
                    subject.name
                  )}
                </td>
                <td>
                  {editingSubject && editingSubject.id === subject.id? (
                    <select
                      value={editingSubject.teacherName}
                      onChange={(e) =>
                        setEditingSubject({...editingSubject, teacherName: e.target.value })
                      }
                      className="form-select"
                    >
                      {teachers.map((teacher) => (
                        <option key={teacher} value={teacher}>{teacher}</option>
                      ))}
                    </select>
                  ) : (
                    subject.teacherName
                  )}
                </td>
                <td>
                  {editingSubject&& editingSubject.id === subject.id? (
                    <button type="button" onClick={handleUpdateSubject} className="btn btn-success btn-sm">
                      Update
                    </button>
                  ) : (
                    <>
                      <button type="button" onClick={() => handleEditSubject(subject)} className="btn btn-warning btn-sm me-2">
                        Edit
                      </button>
                      <button type="button" onClick={() => handleDeleteSubject(subject.id)} className="btn btn-danger btn-sm">
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

export default Subjects;