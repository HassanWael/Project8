import './hero.css'
import {useNavigate} from 'react-router-dom'
let Hero = () => {
  const navigate=useNavigate();
  const hireUs=()=>{
    navigate('/Book')
  }
  const ourProjects=()=>{
    navigate('/Project')

  }
  return (
    <div className="hero">
      <div className="container">
        <span style={{color: '#64ffda'}}>Hi, We Are</span>
        <h2 className='hero-title'>iDeveloper Team.</h2>
        <h2 className='hero-title'>We build things for the web.</h2>
        <p className='hero-desc'>
          We Are software engineers specializing in building (and occasionally designing)<br/> exceptional digital experiences.
          Currently, We're focused on building accessible,
          <br />human-centered products at Upstatement.
        </p>
        <button className='Resume-btn hire' onClick={hireUs}>Hire US</button>
        <button className='Resume-btn'onClick={ourProjects}>Our Projects </button>
      </div>
    </div>
  )
}

export default Hero;