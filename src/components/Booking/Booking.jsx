import React, { useEffect, useState } from 'react'
import './Booking.css'
import { auth , db} from '../Database/firebase'
function Booking() {

const [name,setName] = useState('');
const [phone,setPhone] = useState(0);
const [date,setDate] = useState('861999');
const [service,setService] = useState('');
const [deleveryDate,setDeleveryDate]=useState('861999');

const add=()=>{
  let arr = [];
  let random = Math.floor(Math.random()*10+2);
  let randomChar = Math.floor(Math.random()*1000+2);
  if(auth.currentUser.email){

    db.collection('Orders')
    .doc(random+' order '+randomChar)
    .set({
      name:name,
      phone:phone,
      date:date,
      service:service,
      deleveryDate:deleveryDate,
      email:auth.currentUser.email,
      })
  }
}
useEffect(()=>{},[])
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
          <div className="Booking__form">
            <label>Company Name / Customer Name</label>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} />
            <label>Phone Number</label>
            <input type="number" onChange={(e)=>{setPhone(e.target.value)}} />
            <label>Meeting Date</label>
            <input type="date" onChange={(e)=>{setDate(e.target.value)}} />
            <label>pick a service</label>
            <select name="" id="" onChange={(e)=>{setService(e.target.value)}}>
              <option disabled >select the service you need</option>
              <option value="">Consulting</option>
              <option value="">Web Development</option>
              <option value="">Mobile Development</option>
            </select>
            <label>expicted to delever the service</label>
            <input type="date" onChange={(e)=>{setDeleveryDate(e.target.value)}} />
            <div className="btn__contaner">
              <button onClick={add} className="book__btn">Book now</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Booking
