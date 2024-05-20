import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/signup" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/not-found" element={<NotFound />} />
      {/* This last route acts as a catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
