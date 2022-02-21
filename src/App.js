import './App.css'
import Nav from './Components/navbar/navbar'
import Footer from './Components/footer/footer'
import Project from './Components/Project/Project'

import Booking from './Components/Booking/Booking'
import Hero from './Components/Landing-Page/Hero'
import AboutUs from './Components/LandingPage/AboutUs'
import Experience from './Components/LandingPage/Experience'

import LogInForm from './Components/Login/RegisterForm'
import RegisterForm from './Components/Login/LoginForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path='/login' element= {<LogInForm />}></Route>  
        <Route path='/signup' element= {<RegisterForm/>}></Route>  
        <Route path='/Book' element= {<Booking/>}></Route>  
        <Route path='/' element= {<><Hero/><AboutUs/> <Experience/> </>}></Route> 
        <Route path='/project' element= {<Project/>}></Route> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
