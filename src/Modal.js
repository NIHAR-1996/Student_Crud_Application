import React from "react";
import "./style.css"

export const Modal = ({
  handleSubmit,
  handleUpdate,
  handleCancel,
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
  setDate
}) => {
  

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
        Name: name,
        Email: email,
        Roll: roll,
        Subject: subject,
        Section: section,
        DOB: date,
    };
    if (!isupdate) {
      handleSubmit(formData);
    } else {
        handleUpdate(formData)
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Roll-no"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        <br />
        <input
          type="date"
          placeholder="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <div>
          <button variant="success" type="submit" className="form-button">
            {!isupdate ? "Save" : "Update"}
          </button>

          <button onClick={handleCancel} className="form-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};
