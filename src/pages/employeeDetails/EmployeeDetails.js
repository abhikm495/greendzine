import React, { useState } from "react";
import employeeData from "../../components/DummyData";
import BottomIcons from "../../components/bottomIcons/BottomIcons";
import { IoMdSearch } from "react-icons/io";
import "./EmployeeDetails.css";

export const EmployeeDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmployeeData = employeeData.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="fixed">
        <div>
          <img
            className="top-right-image"
            src="../../images/phone.png"
            alt="support"
          />
        </div>
        <div className="header">
          <div className="header-count">{employeeData.length}</div>
          <img
            className="header-image"
            src="../../images/moptro.png"
            alt="motrop"
          />
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search with name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="placeholder-centered"
            style={{
              backgroundColor: "rgb(94, 94, 94, 0.2)",
              boxShadow: "none",
              border: "1px solid #595959",
            }}
          />
          <IoMdSearch size={27} className="search-icon" />
        </div>
      </div>

      <div className="employee-details">
        {filteredEmployeeData.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <p className="employee-id">{employee.id}</p>
            <p>
              <span className="label">EMP ID &nbsp; : </span> &nbsp;{" "}
              {employee.id}
            </p>
            <p>
              <span className="label">Name &nbsp; : </span> &nbsp;{" "}
              {employee.name}
            </p>
            <p>
              <span className="label">DOB &nbsp; : </span>{" "}
              <span style={{ color: "orange" }}> &nbsp; {employee.dob}</span>
            </p>
            <p>
              <span className="label">Role &nbsp; : </span>{" "}
              <span style={{ color: "#00FF2580" }}>
                {" "}
                &nbsp; {employee.role}
              </span>
            </p>
          </div>
        ))}
      </div>

      <BottomIcons />
    </div>
  );
};
