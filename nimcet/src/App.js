import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin";
import SignIn from "./pages/admin/signin";
import Reset from "./pages/admin/reset";
import Client from "./pages/client";
import CandidateSignIn from "./pages/client/signin";
import CandidateReset from "./pages/client/reset";
import Home from "./pages/home";
import Confirmation from "./pages/admin/confirmation/Confirmation";
import SetPasswords from "./pages/admin/Passwords/Index";
import Remark from "./pages/admin/remark";
import Notice from "./pages/home/notice";
import Download from "./pages/home/download";
import Information from "./pages/admin/information/Information";

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
        <Route path="admin" element={<AdminPage />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="reset" element={<Reset />} />
          <Route path="confirm" element={<Confirmation />} />
          <Route path="setPassword" element={<SetPasswords />} />
          <Route path="remark" element={<Remark />} />
          <Route path="information" element={<Information />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
