import React, { useState } from 'react';
import { TBody } from '../../dataDummy/course';

const EditTeacherForm = ({ teacher, onSave, onCancel }) => {
  const [name, setName] = useState(teacher?.name);
  const [address, setAddress] = useState(teacher?.address);
  const [course, setCourse] = useState(teacher?.course_id);
  const [gender, setGender] = useState(teacher?.gender);
  const [phone, setPhone] = useState(teacher?.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTeacher = {
      ...teacher,
      name,
      address,
      course_id: course,
      gender,
      phone,
    };
    onSave(updatedTeacher);
  };

  return (
    <div
      className='modal fade show'
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
      tabIndex='-1'
      role='dialog'
      aria-labelledby='editTeacherModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header d-flex justify-content-between'>
            <h5 className='modal-title' id='editStudentModalLabel'>
              Edit Teacher
            </h5>
            <button
              type='button'
              className='close'
              onClick={onCancel}
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='address'>Address</label>
                <input
                  type='text'
                  className='form-control'
                  id='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='course'>Course</label>
                <select
                  className='form-control'
                  id='course'
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                >
                  <option value=''>Select Course</option>
                  {TBody.map((data, i) => (
                    <option key={i} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='gender'>Gender</label>
                <select
                  className='form-control'
                  id='gender'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value=''>Select Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='tel'
                  className='form-control'
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={onCancel}
                >
                  Cancel
                </button>
                <button type='submit' className='btn btn-primary'>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTeacherForm;
