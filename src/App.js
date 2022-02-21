import './App.css'
import LogInForm from './Components/Login/LoginForm'
import RegisterForm from './Components/Login/RegisterForm'
import Nav from './Components/navbar/navbar'
import Footer from './Components/footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Booking from './Components/Booking/Booking'
import Hero from './Components/LandingPage/Hero'
import AboutUs from './Components/LandingPage/aboutUs'
import Experience from './Components/LandingPage/Experience'
import Services from './Components/LandingPage/Services'
import GetInTouch from './Components/LandingPage/GetInTouch'
import Profile from './Components/profile/Profile'
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path='/login' element= {<LogInForm />}></Route>  
        <Route path='/register' element= {<RegisterForm/>}></Route>  
        <Route path='/Book' element= {<Booking/>}></Route>  
        <Route path='/profile' element= {<Profile/>}></Route>  
        <Route path='/' element= {<><Hero/><AboutUs/> <Experience/><Services /><GetInTouch /></>}></Route>  
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
