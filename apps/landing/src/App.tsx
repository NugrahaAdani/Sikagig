import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default  function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  )
}


