import React, { useState } from "react";
import { StudentData } from "./StudentData";
import "./style.css";
import { Modal } from "./Modal";
import { StudentDetails } from "./StudentDetail";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { OtherComponent } from "./OtherComponent";

export default function App() {
  const [student, setStudent] = useState(StudentData);
  const [modal, setModal] = useState(false);
  const [selectedStudentId, setSelectedStudentID] = useState(null);
  const [isupdate, setIsupdate] = useState(false);
  const [clickedDetail, setClickedDetail] = useState(false);

  const navigate= useNavigate();

  // data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState();
  const [subject, setSubject] = useState("");
  const [section, setSection] = useState("");
  const [date, setDate] = useState("");
  const [detail, setDetail] = useState("");

  const handleSave = (formData) => {
    const newStudent = { ...formData };
    // console.log(newStudent);
    setStudent([...student, newStudent]); // Update student state with new data
    setModal(false);
    setName("");
    setEmail("");
    setRoll();
    setSubject("");
    setSection("");
    setDate("");
  };

  const handleEdit = (index) => {
    setIsupdate(true);
    setSelectedStudentID(index);
    const findStudent = student.find((ele, i) => i === index);
    setName(findStudent.Name);
    setEmail(findStudent.Email);
    setRoll(findStudent.Roll);
    setSubject(findStudent.Subject);
    setSection(findStudent.Section);
    setDate(findStudent.DOB);
    setModal(true);
  };

  const handleUpdate = (formData) => {
    // console.log("updated formData======", formData);

    if (selectedStudentId !== null) {
      const updatedStudent = student.map((item, index) =>
        index === selectedStudentId ? { ...item, ...formData } : item
      );
      setStudent(updatedStudent);
      setIsupdate(false);
      setModal(false);
      setName("");
      setEmail("");
      setRoll();
      setSubject("");
      setSection("");
      setDate("");
    }
  };
  const handleDetail = (index) => {
    // setClickedDetail(true);
    const selectedItem=student.find((item, id) => id === index);
    setDetail(selectedItem);
    localStorage.setItem("detail",JSON.stringify(selectedItem));
    navigate("/details")
  };
  // console.log(detail);
  // console.log(clickedDetail);

  const handleDelete = (index) => {
    window.confirm("Are you sure to delete this item");
    const data = student.filter((item, id) => id !== index);
    // console.log(index);
    setStudent(data);
  };

  return (
    <div className="main-container">
      <Routes>
       
        <Route path="/" element={<OtherComponent
        
        student={student}
        setStudent={setStudent}
        modal={modal}
        setModal={setModal}
        selectedStudentId={selectedStudentId}
        setSelectedStudentID={ setSelectedStudentID}
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
        date={date}
        setDate={setDate}
        detail={detail}
        setDetail={setDetail}
        handleSave={handleSave}
        handleEdit={handleEdit}
        handleUpdate={handleUpdate}
        handleDetail={handleDetail}
        handleDelete={handleDelete}
        />} />
        <Route path="/details" element={<StudentDetails
          detail={detail}
          clickedDetail={clickedDetail}
          setClickedDetail={setClickedDetail}
          navigate={navigate}
        />}
        />
      </Routes>
      

     
    </div>
  );
}
