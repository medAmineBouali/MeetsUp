import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "@/pages/Home";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
