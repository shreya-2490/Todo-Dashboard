import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Contact from "./components/pages/contact";
import Login from "./components/pages/auth/Login";
import Forgot from "./components/pages/auth/Forgot";
import ResetPassword from "./components/pages/auth/ResetPassword";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
          </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset" element={<ResetPassword/>}/>
            
        </Routes>
      </BrowserRouter>
    </>
  )
}
 export default App
