import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import Welcome from "./components/Welcome";
import AxiosTest from "./pages/AxiosTest";
import HeaderWhite from "./components/HeaderWhite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<ListComponent />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Welcome username="양태환" age="22살" />}></Route>
      </Routes>
      <Routes>
        <Route path="/axiosTest" element={<AxiosTest />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
