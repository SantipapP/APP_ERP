import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import Login from "./pages/Login"
import Home from './pages/Home'
import Employee from './pages/HR/Employee'
import './App.css'
import Department from './pages/HR/Department'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Employee" element={<Employee/>}/>
          <Route path="/Department" element={<Department />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
