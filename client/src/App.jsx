import MainPage from "./pages/main/MainPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          {/*<Route path="blogs" element={<Blogs />} />*/}
          {/*<Route path="contact" element={<Contact />} />*/}
          {/*<Route path="*" element={<NoPage />} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
