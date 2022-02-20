import './App.css'
import RegisterForm from './components/Login/RegisterForm'
import  LogInForm from './components/Login/LoginForm'
import Nav from './components/NavBar/navbar'
import Footer from './components/footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Booking from './components/Booking/Booking'
import Hero from './components/Landing-Page/Hero'
import AboutUs from './components/LandingPage/AboutUs'
import Experience from './components/LandingPage/Experience'
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path='/login' element= {<LogInForm />}></Route>  
        <Route path='/register' element= {<RegisterForm/>}></Route>  
        <Route path='/Book' element= {<Booking/>}></Route>  
        <Route path='/' element= {<><Hero/><AboutUs/> <Experience/> </>}></Route>  
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
