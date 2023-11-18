import BottomIcons from "../../components/bottomIcons/BottomIcons";
import "./DashBoard.css";
import ProgressBar from "../../components/ProgressBar";
import employeeData from "../../components/DummyData";

const DashBoard = () => {
  const weekData = [
    { day: "Productivity on Monday", percentage: 4 },
    { day: "Productivity on Tuesday", percentage: 92 },
    { day: "Productivity on Wednesday", percentage: 100 },
    { day: "Productivity on Thursday", percentage: 50 },
    { day: "Productivity on Friday", percentage: 25 },
    { day: "Productivity on Saturday", percentage: 75 },
  ];

  return (
    <div className="container">
      <div>
        <img
          className="top-right-img"
          src="../../images/phone.png"
          alt="support"
        />
      </div>
      <div className="header">
        <div className="header-length">{employeeData.length}</div>
        <img
          className="header-image"
          src="../../images/moptro.png"
          alt="motrop"
        />
      </div>
      <div className="employee-dashboard">
        <p>Employee Productivity Dashboard</p>
      </div>

      <ProgressBar data={weekData} style={{ minWidth: "200px" }} />

      <BottomIcons />
    </div>
  );
};
export default DashBoard;

<div></div>;
