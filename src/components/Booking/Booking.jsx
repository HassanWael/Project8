import React, { useEffect, useState } from "react";
import "./Booking.css";
import { auth, db } from "../Database/firebase";
import { useNavigate } from "react-router-dom";
function Booking() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [date, setDate] = useState("861999");
  const [service, setService] = useState("");
  const [today, setToday] = useState("");
  const [deleveryDate, setDeleveryDate] = useState("861999");
  const [error, setError] = useState("");
  const validateDate = () => {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();

    var maxDate = year + "-" + month + "-" + day;
    setToday(maxDate);
  };

  const add = () => {
    let bool = true;
    let arr = [];
    let random = Math.floor(Math.random() * 10 + 2);
    let randomChar = Math.floor(Math.random() * 1000 + 2);

    if (auth.currentUser) {
      db.collection("Orders")
        .where("email", "==", auth.currentUser.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().date === date) {
              bool = false;
            }
          });
        })
        .then(() => {
          if (bool) {
            db.collection("Orders")
              .doc(random + " order " + randomChar)
              .set({
                name: name,
                phone: phone,
                date: date,
                service: service,
                deleveryDate: deleveryDate,
                email: auth.currentUser.email,
              });
            navigate("/profile");
          } else setError("Date already have been used");
        });
    } else navigate("/register");
  };
  useEffect(() => {
    validateDate();
  }, []);
  return (
    <>
      <main className="Booking">
        <section className="Book__info">
          <h1>
            {" "}
            <span> Book </span>{" "}
            <span className="info__titel">a date for meeting</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            accusamus libero blanditiis eveniet omnis ab modi, tenetur mollitia
            ullam natus doloremque nostrum. Assumenda eius nisi soluta officiis
            excepturi earum quisquam. Omnis assumenda natus doloribus illo sed
            temporibus incidunt necessitatibus soluta enim maiores! Eos
            praesentium accusamus voluptas esse cumque magnam culpa
            reprehenderit, quibusdam explicabo atque non accusantium! Quas
            deserunt pariatur incidunt!
          </p>
          <p className="secondary-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            maiores vitae sapiente. Molestiae, molestias? Perspiciatis explicabo
            minima sunt tempora sequi non hic consequuntur.
          </p>
          <ul>
            <li>27/7 support</li>
            <li>after sales service</li>
          </ul>
        </section>
        <section className="Booking__section">
          <div className="Booking__form">
            <label>Company Name / Customer Name</label>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Phone Number</label>
            <input
              type="number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <label>Meeting Date</label>
            <input
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              min={today}
            />
            <small className="errors">{error}</small>
            <label>pick a service</label>
            <select
              name=""
              id=""
              onChange={(e) => {
                setService(e.target.value);
              }}
            >
              <option disabled>select the service you need</option>
              <option value="Consulting">Consulting</option>
              <option value="Web development">Web Development</option>
              <option value="Mobile developement">Mobile Development</option>
            </select>
            <label>expicted to delever the service</label>
            <input
              type="date"
              onChange={(e) => {
                setDeleveryDate(e.target.value);
              }}
              min={today}
            />
            <div className="btn__contaner">
              <button onClick={add} className="book__btn">
                Book now
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Booking;
