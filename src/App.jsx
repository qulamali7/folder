import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import PerformerPage from "./pages/PerformerPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/performer" element={<PerformerPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
