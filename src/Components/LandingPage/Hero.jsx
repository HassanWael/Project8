import './hero.css'

let Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <span style={{color: '#64ffda'}}>Hi, We Are</span>
        <h2 className='hero-title'>iDeveloper Team.</h2>
        <h2 className='hero-title'>We build things for the web.</h2>
        <p className='hero-desc'>
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.<br />
          Currently, I’m focused on building accessible, human-centered products at Upstatement.
        </p>
        <button className='btn-primary btn-lg'>Hire US</button>
      </div>
    </div>
  )
}

export default Hero;