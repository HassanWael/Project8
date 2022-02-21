import './landing.css'
import { faker } from '@faker-js/faker'
import {useNavigate} from 'react-router-dom'
function Services() {
const navigate=useNavigate()
const book=()=>{
  navigate('/Book ')
}
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">
          <span className="number">03.</span> Services
        </h2>
        <div className="flex-container">
          <div className="service">
            <div className="service-img">
              <img
                src="https://www.eremnews.com/wp-content/uploads/2022/01/Untitled-1-52.jpg"
                alt=""
              />
            </div>
            <div className="service-details">
              
              <h2 className="service-title">Consulting</h2>
              <p>{faker.lorem.paragraph()}</p>
              
              <div id="book">
                <button className="Resume-btn" style={{ padding: '1rem 3rem' }}onClick={book} >
                  <a
                    href="/Book"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Book Now{' '}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-img">
              <img
                src="https://3.bp.blogspot.com/-OmGwCrRNAto/Wszyh1Dd_HI/AAAAAAAAIJ0/_crUQTm5meEfmB0Kr0nCoHsERIuh9fCxACLcBGAs/s1600/%25D9%2586%25D8%25B5%25D8%25A7%25D8%25A6%25D8%25AD%2B%25D8%25B0%25D9%2587%25D8%25A8%25D9%258A%25D8%25A9%2B%25D9%2584%25D8%25A7%25D8%25AD%25D8%25AA%25D8%25B1%25D8%25A7%25D9%2581%2B%25D8%25AA%25D8%25B7%25D9%2588%25D9%258A%25D8%25B1%2B%25D8%25A7%25D9%2584%25D9%2588%25D9%258A%25D8%25A8%2BWeb%2BDevelopment.jpg"
                alt=""
              />
            </div>
            <div className="service-details">
              <h2 className="service-title">Web Development</h2>
              <p>{faker.lorem.paragraph()}</p>
              <div id="book">
                <button className="Resume-btn" style={{ padding: '1rem 3rem' }}onClick={book}>
                  <a
                    href="/Book"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Book Now{' '}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service-img">
              <img
                src="https://www.ibelieveinsci.com/wp-content/uploads/Cross-Platform-App-Development.jpg"
                alt=""
              />
            </div>
            <div className="service-details">
              <h2 className="service-title">Mobile Development</h2>
              <p>{faker.lorem.paragraph()}</p>
              <div id="book">
                <button className="Resume-btn" style={{ padding: '1rem 3rem' }} onClick={book}>
                  <a
                    href="/Book"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Book Now{' '}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
