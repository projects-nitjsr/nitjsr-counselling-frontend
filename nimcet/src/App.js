import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin";
import SignIn from "./pages/admin/signin";
import Reset from "./pages/admin/reset";
import Client from "./pages/client";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Client />} />
        <Route path="admin" element={<AdminPage />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="reset" element={<Reset />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
