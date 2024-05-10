import React, { useEffect, useState } from "react";
import "./StudentDetail.css";
import { FaArrowLeft } from "react-icons/fa";

export const StudentDetails = ({
  // detail,
  // setClickedDetail,
  // clickedDetail,
  navigate,
}) => {
  const [selectedItem, setSelectedItem] = useState("");
  useEffect(() => {
    const detail = localStorage.getItem("detail");
    if (detail) {
      const detailValue = JSON.parse(detail);
      setSelectedItem(detailValue);
    }
  }, []);

  const handleCancelDetail = () => {
    navigate("./");
    console.log("clicked");
  };

  return (
    <div className="main-container">
      <div className="button-div">
        <button className="btn" onClick={handleCancelDetail}>
        <FaArrowLeft /> Back
        </button>
      </div>

      <div className="detail-box">
        <div className="section-1">
          <div>
            <b>Name :</b> {selectedItem.Name}
          </div>
          <div>
            <b>Email :</b> {selectedItem.Email}
          </div>
          <div>
            <b>Roll :</b> {selectedItem.Roll}
          </div>
        </div>
        <div className="section-2">
          <div>
            <b>Subject :</b> {selectedItem.Subject}
          </div>
          <div>
            <b>Section :</b> {selectedItem.Section}
          </div>
          <div>
            <b>DOB :</b> {selectedItem.DOB}
          </div>
        </div>
      </div>
    </div>
  );
};
