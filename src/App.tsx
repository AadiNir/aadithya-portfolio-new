import {HashRouter, Routes, Route}  from "react-router-dom"
import Homepage from "./routes/HomePage"
import About from "./routes/About"
import Projects from "./routes/Projects"


function App() {
  

  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="projects" element={<Projects />} />
    </Routes>
    </HashRouter>
  )
}

export default App
