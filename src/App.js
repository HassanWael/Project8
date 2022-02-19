import './App.css'
import LogInForm from './Components/Login/LoginForm'
import RegisterForm from './Components/Login/RegisterForm'
import Nav from './Components/navbar/navbar'
import Footer from './Components/footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Booking from './Components/Booking/Booking'
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/login' element= {<LogInForm />}></Route>  
          <Route path='/signup' element= {<RegisterForm/>}></Route>  
          <Route path='/Book' element= {<Booking/>}></Route>  
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
