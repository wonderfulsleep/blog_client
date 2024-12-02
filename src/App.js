import "./App.css";
import Post from "./Post";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Home Page */}
        <Route index element={<IndexPage />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />}/>

        {/* Register Page */}
        <Route path="/register" element={<RegisterPage />}/>

      </Route>

    </Routes>
  );
}

export default App;
