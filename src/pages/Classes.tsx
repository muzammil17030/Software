import React, { useState } from 'react';

interface Class {
  id: number;
  time: string;
  duration: string;
  subject: string;
  date: string;
  day: string;
}

const Classes: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [newClass, setNewClass] = useState({
    time: '',
    duration: '',
    subject: '',
    date: '',
    day: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = classes.length + 1;
    const newClassToAdd = { id: newId, ...newClass };
    setClasses([...classes, newClassToAdd]);
    setNewClass({
      time: '',
      duration: '',
      subject: '',
      date: '',
      day: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewClass({ ...newClass, [name]: value });
  };

  const handleEdit = (id: number) => {
    const classToEdit = classes.find((cls) => cls.id === id);
    if (classToEdit) {
      setNewClass(classToEdit);
    }
  };

  const handleDelete = (id: number) => {
    setClasses(classes.filter((cls) => cls.id !== id));
  };

  return (
    <div className="classes-container">
      <h1>Classes</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Time:
          <input type="text" name="time" value={newClass.time} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Duration:
          <input type="text" name="duration" value={newClass.duration} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Subject:
          <input type="text" name="subject" value={newClass.subject} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" value={newClass.date} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Day:
          <input type="text" name="day" value={newClass.day} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit" className="add-btn">
          Add Class
        </button>
      </form>
      <table className="classes-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Duration</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Day</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td>{cls.time}</td>
              <td>{cls.duration}</td>
              <td>{cls.subject}</td>
              <td>{cls.date}</td>
              <td>{cls.day}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(cls.id)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(cls.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Classes;