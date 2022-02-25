import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import Welcome from "./components/Welcome";
import AxiosTest from "./pages/AxiosTest";
import NewsApiPage from "./pages/NewsApiPage";
import BitcoinAPI from "./components/0223Prac/BitcoinAPI";
import Practice from "./components/0223Prac/Practice";
import AuthPage from "./pages/AuthPage";
import AuthResult from "./pages/AuthResult";
import MainPage from "./pages/MainPage";
import BalancePage from "./pages/BalancePage";
import QrCodePage from "./pages/QrCodePage";
import QrCodeReaderPage from "./pages/QrCodeReaderPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<ListComponent />}></Route>
      </Routes>
      <Routes>
        <Route path="/axiosTest" element={<AxiosTest />}></Route>
      </Routes>
      <Routes>
        <Route path="/news" element={<NewsApiPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<AuthPage ></AuthPage>}></Route>
      </Routes>
      <Routes>
        <Route path="/authResult" element={<AuthResult ></AuthResult>}></Route>
      </Routes>
      <Routes>
        <Route path="/main" element={<MainPage ></MainPage>}></Route>
      </Routes>
      <Routes>
        <Route path="/balance" element={<BalancePage ></BalancePage>}></Route>
      </Routes>
      <Routes>
        <Route path="/qr" element={<QrCodePage />}></Route>
      </Routes>
      <Routes>
        <Route path="/qrreader" element={<QrCodeReaderPage />}></Route>
      </Routes>

      {/* 실습코드 */}
      <Routes>
        <Route path="/practice" element={<Practice feeling="happy!"></Practice>}></Route>
      </Routes>
      <Routes>
        <Route path="/bitcoinapi" element={<BitcoinAPI></BitcoinAPI>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
