import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Teacher {
  id: number;
  name: string;
  fatherName: string;
  subject: string;
  experience: number;
  qualification: string;
}

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [newTeacher, setNewTeacher] = useState<Omit<Teacher, 'id'>>({
    name: '',
    fatherName: '',
    subject: '',
    experience: 0,
    qualification: '',
  });
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

  const subjects: string[] = [
    'Mathematics',
    'Science',
    'English',
    'Urdu',
    'Islamiat',
    'Computer Science',
    'Physics',
    'Chemistry',
    'Biology',
  ];

  const qualifications: string[] = [
    'BSc',
    'MSc',
    'PhD',
    'MA',
    'MPhil',
    'BE',
    'ME',
    'BBA',
    'MBA',
  ];

  const experiences: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ];

  const handleAddTeacher = () => {
    if (newTeacher.name && newTeacher.fatherName && newTeacher.subject && newTeacher.experience && newTeacher.qualification) {
      setTeachers([...teachers, { id: teachers.length + 1, ...newTeacher }]);
      setNewTeacher({ name: '', fatherName: '', subject: '', experience: 0, qualification: '' });
    }
  };

  const handleEditTeacher = (teacher: Teacher) => {
    setEditingTeacher(teacher);
  };

  const handleUpdateTeacher = () => {
    if (editingTeacher) {
      const updatedTeachers = teachers.map((teacher) =>
        teacher.id === editingTeacher.id ? editingTeacher : teacher
      );
      setTeachers(updatedTeachers);
      setEditingTeacher(null);
    }
  };

  const handleDeleteTeacher = (id: number) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <div className="container py-5 mt-3 mb-3" style={{ backgroundColor: '#f0f8ff' }}>
      <h1 className='text-primary mb-4'>Teacher Management</h1>
      <form className="mb-4 p-4 bg-white rounded shadow">
        <div className="row">
          <div className="col-md-3 mb-3">
            <label className='form-label'>Name:</label>
            <input
              type="text"
              value={newTeacher.name}
              onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
              className="form-control"
              placeholder="Enter name"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className='form-label'>Father's Name:</label>
            <input
              type="text"
              value={newTeacher.fatherName}
              onChange={(e) => setNewTeacher({ ...newTeacher, fatherName: e.target.value })}
              className="form-control"
              placeholder="Enter father's name"
            />
          </div>
          <div className="col-md-2 mb-3">
            <label className='form-label'>Subject:</label>
            <select
              value={newTeacher.subject}
              onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
              className="form-select"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div className="col-md-2 mb-3">
            <label className='form-label'>Experience in years:</label>
            <select
              value={newTeacher.experience}
              onChange={(e) => setNewTeacher({ ...newTeacher, experience: parseInt(e.target.value) })}
              className="form-select"
            >
              {experiences.map((experience) => (
                <option key={experience} value={experience}>{experience}</option>
              ))}
            </select>
          </div>
          <div className="col-md-2 mb-3">
            <label className='form-label'>Qualification:</label>
            <select
              value={newTeacher.qualification}
              onChange={(e) => setNewTeacher({ ...newTeacher, qualification: e.target.value })}
              className="form-select"
            >
              {qualifications.map((qualification) => (
                <option key={qualification} value={qualification}>{qualification}</option>
             ))}
            </select>
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button type="button" onClick={handleAddTeacher} className="btn btn-primary w-100">
              Add Teacher
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
              <th>Subject</th>
              <th>Experience</th>
              <th>Qualification</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>
                  {editingTeacher && editingTeacher.id === teacher.id? (
                    <input
                      type="text"
                      value={editingTeacher.name}
                      onChange={(e) =>
                        setEditingTeacher({...editingTeacher, name: e.target.value })
                      }
                      className="form-control"
                    />
                  ) : (
                    teacher.name
                  )}
                </td>
                <td>
                  {editingTeacher && editingTeacher.id === teacher.id? (
                    <input
                      type="text"
                      value={editingTeacher.fatherName}
                      onChange={(e) =>
                        setEditingTeacher({...editingTeacher, fatherName: e.target.value })
                      }
                      className="form-control"
                    />
                  ) : (
                    teacher.fatherName
                  )}
                </td>
                <td>
                  {editingTeacher && editingTeacher.id === teacher.id? (
                    <select
                      value={editingTeacher.subject}
                      onChange={(e) =>
                        setEditingTeacher({...editingTeacher, subject: e.target.value })
                      }
                      className="form-select"
                    >
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  ) : (
                    teacher.subject
                  )}
                </td>
                <td>
                  {editingTeacher && editingTeacher.id === teacher.id? (
                    <select
                      value={editingTeacher.experience}
                      onChange={(e) =>
                        setEditingTeacher({...editingTeacher, experience: parseInt(e.target.value) })
                      }
                      className="form-select"
                    >
                      {experiences.map((experience) => (
                        <option key={experience} value={experience}>{experience}</option>
                      ))}
                    </select>
                  ) : (
                    teacher.experience
                  )}
                </td>
                <td>
                  {editingTeacher && editingTeacher.id === teacher.id? (
                    <select
                      value={editingTeacher.qualification}
                      onChange={(e) =>
                        setEditingTeacher({...editingTeacher, qualification: e.target.value })
                      }
                      className="form-select"
                    >
                      {qualifications.map((qualification) => (
                        <option key={qualification} value={qualification}>{qualification}</option>
                      ))}
                    </select>
                  ) : (
                    teacher.qualification
                  )}
                </td>
                <td>
                  {editingTeacher&& editingTeacher.id === teacher.id? (
                    <button type="button" onClick={handleUpdateTeacher} className="btn btn-success btn-sm">
                      Update
                    </button>
                  ) : (
                    <>
                      <button type="button" onClick={() => handleEditTeacher(teacher)} className="btn btn-warning btn-sm me-2">
                        Edit
                      </button>
                      <button type="button" onClick={() => handleDeleteTeacher(teacher.id)} className="btn btn-danger btn-sm">
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

export default Teachers;