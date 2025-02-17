import MainPage from "./pages/main/MainPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404/404.jsx";
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          {/*<Route path="blogs" element={<Blogs />} />*/}
          {/*<Route path="contact" element={<Contact />} />*/}
          <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
