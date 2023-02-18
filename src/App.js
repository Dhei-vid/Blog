import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./components/sign-in/signin.component";
import SignUp from "./components/signup/signup.component";
import Blog from "./components/blog-main/blog.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Blog />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
