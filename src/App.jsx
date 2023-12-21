import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
