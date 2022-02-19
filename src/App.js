<<<<<<< HEAD
import './App.css';
import RegisterForm from './components/Login/RegisterForm';
import LogInForm from './components/Login/LoginForm';
import Nav from './components/NavBar/navbar'
function App() {
  return (
  <>
  <Nav></Nav>
 
  <RegisterForm/>
  </>
=======
import './App.css'
import LogInForm from './components/Login/RegisterForm'
import RegisterForm from './components/Login/LoginForm'
import Nav from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Booking from './components/Booking/Booking'
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
>>>>>>> 728379c17ca58f1f0d644c883db427bdb36c6741
  )
}
export default App
