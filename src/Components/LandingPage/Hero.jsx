import './hero.css'

let Hero = () => {
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
        <button className='btn-primary btn-lg'>Hire US</button>
        <button className='secondary-btn btn-lg'>Learn More</button>
      </div>
    </div>
  )
}

export default Hero;