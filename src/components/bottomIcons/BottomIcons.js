import "./BottomIcons.css";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const BottomIcons = () => {
  const navigate = useNavigate();

  const iconStyle = {
    width: "28px",
    height: "28px",
    opacity: "0.5",
  };
  return (
    <div className="bottom-icons">
      <div className="icon home">
        <FaHome
          style={{ opacity: "0.5", width: "32px", height: "32px" }}
          color="#36A54680"
          onClick={() => navigate("/dashboard")}
        />
      </div>
      <div className="icon user">
        <FaUser
          style={iconStyle}
          color="#36A54680"
          onClick={() => navigate("/employeedata")}
        />
      </div>
    </div>
  );
};
export default BottomIcons;
