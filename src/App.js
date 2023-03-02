import { Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";

import Home from "./components/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Food from "./components/categories/food/food.component";
import Travel from "./components/categories/travel/travel.component";
import Entertainment from "./components/categories/entertainment/entertainment.component";
import Sport from "./components/categories/sport/sport.component";
import LogIn from "./components/login/login.component";
import SignUp from "./components/signup/signup.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="travel" element={<Travel />} />
        <Route path="sport" element={<Sport />} />
        <Route path="food" element={<Food />} />
      </Route>
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
