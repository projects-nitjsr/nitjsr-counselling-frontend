import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Councellor from "./pages/councellor";
import SignIn from "./pages/councellor/signin";
import Reset from "./pages/councellor/reset";
import Client from "./pages/client";
import CandidateSignIn from "./pages/client/signin";
import CandidateReset from "./pages/client/reset";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="notice" element={<Notice />} />
        <Route path="downloads" element={<Download />} />
        <Route path="candidate" element={<Client />}>
          <Route path="signin" element={<CandidateSignIn />} />
          <Route path="reset" element={<CandidateReset />} />
        </Route>
        <Route path="center-incharge" element={<CenterIncharge />}>
          <Route path="set-password" element={<SetPasswordIncharge />} />
          <Route path="add-councellor" element={<AddCouncellor />} />
          <Route path="candidate-detail" element={<CandidateDetail />} />
        </Route>
        <Route path="councellor" element={<Councellor />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="reset" element={<Reset />} />
          <Route path="candidate-info" element={<CandidateInfo />} />

          <Route path="confirm" element={<Confirmation />} />
          <Route path="setPassword" element={<SetPasswords />} />
          <Route path="remark" element={<Remark />} />
          <Route path="information" element={<Information />} />
        </Route>
        <Route path="admin" element={<Admin />}></Route>
        <Route path="student" element={<Student />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="application-form" element={<ApplicationForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
