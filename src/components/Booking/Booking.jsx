import React from 'react'
import './Booking.css'
function Booking() {
  return (
    <>
      <main className="Booking">
        <section className="Book__info">
          <h1>
            {' '}
            <span> Book </span>{' '}
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
          <form className="Booking__form">
            <label>Company Name / Name</label>
            <input type="text" />
            <label>Phone Number</label>
            <input type="number" />
            <label>Meeting Date</label>
            <input type="date" />
            <label>pick a service</label>
            <select name="" id="">
              <option defaultChecked>select the service you need</option>
              <option value="">service1</option>
              <option value="">service2</option>
              <option value="">service3</option>
            </select>
            <label>expicted to delever the service</label>
            <input type="date" />
            <div className="btn__contaner">
              <button className="book__btn">Book now</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default Booking
