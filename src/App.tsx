import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'
import Login from "./components/Login"
import Main from './components/Main'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
