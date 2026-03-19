import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}