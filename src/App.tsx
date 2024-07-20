import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import Login from "./pages/Login"
import Main from './pages/Main'
import Employee from './pages/HR/Employee'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Employee" element={<Employee/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
