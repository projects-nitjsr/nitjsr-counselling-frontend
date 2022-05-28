import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Councellor from "./pages/councellor";
import SignIn from "./pages/councellor/signin";
import Reset from "./pages/councellor/reset";
import Home from "./pages/home";
import Confirmation from "./pages/councellor/confirmation/Confirmation";
import SetPasswords from "./pages/councellor/Passwords/Index";
import Remark from "./pages/councellor/remark";
import Notice from "./pages/home/notice";
import Download from "./pages/home/download";
import Information from "./pages/councellor/information/Information";
import CandidateInfo from "./pages/councellor/CandidateInfo";
import CenterIncharge from "./pages/centerIncharge";
import Admin from "./pages/admin";
import SetPasswordIncharge from "./pages/centerIncharge/setPassword";
import AddCouncellor from "./pages/centerIncharge/addCouncellor";
import CandidateDetail from "./pages/centerIncharge/candidateDetail";
import Student from "./pages/student";
import Dashboard from "./pages/student/dashboard";
import ApplicationForm from "./pages/student/applicationForm";
import HomeIndex from "./pages/home/home";
import FAQ from "./pages/home/faq";

import StudentSignup from "./pages/student/signup";
import StudentLogin from "./pages/student/login";
import StudentSetPassword from "./pages/student/setPassword";
import StudentRegistration from "./pages/student/registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home route */}
        <Route index element={<Home />} />
        <Route path="notice" element={<Notice />} />
        <Route path="downloads" element={<Download />} />

        {/* center incharge routes */}
        <Route path="center-incharge" element={<CenterIncharge />}>
          <Route path="set-password" element={<SetPasswordIncharge />} />
          <Route path="add-councellor" element={<AddCouncellor />} />
          <Route path="candidate-detail" element={<CandidateDetail />} />
        </Route>

        {/* councellor routes */}
        <Route path="councellor" element={<Councellor />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="reset" element={<Reset />} />
          <Route path="candidate-info" element={<CandidateInfo />} />
          <Route path="confirm" element={<Confirmation />} />
          <Route path="setPassword" element={<SetPasswords />} />
          <Route path="remark" element={<Remark />} />
          <Route path="information" element={<Information />} />
        </Route>

        {/* admin routes */}
        <Route path="admin" element={<Admin />}></Route>

        {/* student routes */}
        <Route path="student" element={<Student />}>
          <Route path="register" element={<StudentRegistration />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="application-form" element={<ApplicationForm />} />
          <Route path="login" element={<StudentLogin />}/>
          <Route path="signup" element={<StudentSignup />}/>
          <Route path="setpassword" element={<StudentSetPassword />}></Route>
        </Route>

        {/* home page routes */}
        <Route path="home" element={<HomeIndex />}>
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
