import HomePage from "./pages/homePage/HomePage";
import DashBoard from "./pages/dashBoard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeDetails } from "./pages/employeeDetails/EmployeeDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/employeedata" element={<EmployeeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
