import { Calculator } from "./components/Main"
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
