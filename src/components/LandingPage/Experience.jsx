import './landing.css'
function Experience() {
    return (
      <section className="experience">
        <div className="container">
          <h2 className="section-title"><span className="number">02.</span> Experince</h2>
          <div className="flex-container">
            <div className="text-container">
              <p>
                Hello! we are iDeveloper we are a team that enjoys creating things
                that live on the internet . we are interested in web developement
                started back in 2020. Fast-forward to today, and I’ve had the
                privilege of working at an advertising agency, a start-up, a huge
                corporation, and a student-led design studio. My main focus these days
                is building accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients. I also recently launched a
                course that covers everything you need to build a web app with the
                Spotify API using Node and React.
              </p>
            </div>
            <div className="img-container">
              <img src="https://www.neuralt.com/wp-content/uploads/2020/09/Programmer-1024x683.jpg" />
            </div>
          </div>
        </div>
      </section>
      );
}

export default Experience;