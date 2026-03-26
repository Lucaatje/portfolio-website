import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/experience" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}