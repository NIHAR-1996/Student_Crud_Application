import React, { useState } from "react";
import { Modal } from "./Modal";
import { StudentData } from "./StudentData";
import "./style.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const OtherComponent = ({
  student,
  setStudent,
  modal,
  setModal,
  selectedStudentId,
  setSelectedStudentID,
  isupdate,
  setIsupdate,
  name,
  setName,
  email,
  setEmail,
  roll,
  setRoll,
  subject,
  setSubject,
  section,
  setSection,
  date,
  setDate,
  detail,
  setDetail,
  handleSave,
  handleEdit,
  handleUpdate,
  handleDetail,
  handleDelete,
}) => {
  return (
    <>
      {modal && (
        <Modal
          handleSubmit={handleSave}
          handleUpdate={handleUpdate}
          isupdate={isupdate}
          setIsupdate={setIsupdate}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          roll={roll}
          setRoll={setRoll}
          subject={subject}
          setSubject={setSubject}
          section={section}
          setSection={setSection}
          setDate={setDate}
          date={date}
        />
      )}

      <div className="table-container">
        <div className="create-container">
          <button className="create " onClick={() => setModal(true)}>
            Create
          </button>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Roll-no</th>
                <th>Subject</th>
                <th>Section</th>
                <th>DOB</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {student.map((item, id) => (
                <tr key={id}>
                  <td onClick={() => handleDetail(id)}>{item.Name}</td>
                  <td  onClick={() => handleDetail(id)}>{item.Email}</td>
                  <td  onClick={() => handleDetail(id)}>{item.Roll}</td>
                  <td  onClick={() => handleDetail(id)}>{item.Subject}</td>
                  <td onClick={() => handleDetail(id)}>{item.Section}</td>
                  <td  onClick={() => handleDetail(id)}>{item.DOB}</td>
                  <td>
                    <button
                      className="btn-Edit "
                      onClick={() => handleEdit(id)}
                    >
                      <div className="edit">
                        <FaEdit />
                      </div>
                    </button>
                    <button
                      className="btn-Edit "
                      onClick={() => handleDelete(id)}
                    >
                      <div className="edit">
                        <MdDeleteForever />
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
