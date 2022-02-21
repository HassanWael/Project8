import React, { useEffect, useState } from "react";
import { auth, db } from "../Database/firebase";
import "./Profile.css";
import { faker } from'@faker-js/faker';
function Profile() {
  const [data, setData] = useState([]);
  const [person, setPerson] = useState([]);
  const checkUser = () => {
    if (auth.currentUser) {
      return true;
    } else return false;
  };
  useEffect(() => {
    let arr = [];
    if (checkUser()) {
      db.collection("Orders")
        .where("email", "==", auth.currentUser.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr.push(doc.data());
          });
          console.log(arr);
          setData(arr);
        });
      db.collection("Users")
        .where("email", "==", auth.currentUser.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setPerson(doc.data());
          });
        });
    }
  }, []);
  return (
    <main className="profile">
      <section className="profile__info">
	  <img src={faker.image.avatar()} alt="" />
        <h3>{auth.currentUser ? auth.currentUser.email : "no"}</h3>
        <h6>{data[0] ? data[0].phone : ""}</h6>
        <h6>{person.username}</h6>
      </section>
      <section className="profile_reservation">
        <table className="container__table">
          <thead>
            <tr>
              <th>
                <h1>Service</h1>
              </th>
              <th>
                <h1>Name</h1>
              </th>
              <th>
                <h1>Date</h1>
              </th>
              <th>
                <h1>Delevery Date</h1>
              </th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.service}</td>
                  <td>{element.name}</td>
                  <td>{element.date}</td>
                  <td>{element.deleveryDate}</td>
                  <td>{element.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Profile;
