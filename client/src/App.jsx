import MainPage from "./pages/main/MainPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404/404.jsx";
import StartPage from "./pages/start/StartPage.jsx";
function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/" element={<StartPage />} />
          <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
