import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
const AppRoutes = () => {
  return (
    <div className="bg-black ">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
