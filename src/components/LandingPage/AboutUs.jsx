import "./landing.css";
function AboutUs() {
  return (
    <div className="containerAbout">
      <div className="container__text white">
        <h2>
          {" "}
          <span className="green">01.</span> About me
        </h2>

        <p>
          Hello! we are Black crow we are a team that enjoys creating things
          that live on the internet . we are interested in web developement
          started back in 2020. Fast-forward to today, and I’ve had the
          privilege of working at an advertising agency, a start-up, a huge
          corporation, and a student-led design studio. My main focus these days
          is building accessible, inclusive products and digital experiences at
          Upstatement for a variety of clients. I also recently launched a
          course that covers everything you need to build a web app with the
          Spotify API using Node and React.
        </p>
        <p>
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React. Here are a
          few technologies I’ve been working with recently: JavaScript (ES6+)
          TypeScript React Eleventy Node.js WordPress
        </p>
      </div>
      <div className="container__img">
        <img src="https://picsum.photos/400/300" />
      </div>
    </div>
  );
}

export default AboutUs;
