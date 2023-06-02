import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import db from "./data/db.json";

const listComp = () => {
  return db.charArray.map((item, i) => (
    <Character
      key={i}
      id={i}
      name={item.name}
      race={item.race}
      status={item.status}
      comment={item.comment}
      location= {item.location}
      stamnia= { item.stamnia}
      gold={item.gold}
      health={item.health}
    />
  ));
};

export default function App() {




  // change the title of the website
  const [title, setTitle] = useState("Player HUD");
  useEffect(() => {
    document.title = title;
  });




  // read data from server 5000
  useEffect(() => {
   const getPerson =async()=>{
    fetchPerson();
    // const personFromServer = await fetchPerson();
  // setPerson(personFromServer)
   }
   getPerson();
   
  }, []);
  // fetch data from db.json. request 
  const fetchPerson = async () => {
    const res = await fetch("http://localhost:5000/charArray");
    const data = await res.json();
   return data;
  };

  return (
    <div className="App">
      <label htmlFor="titleChange">Change page title</label>
      <input
        type="text"
        id="titleChange"
        onChange={(e) => setTitle(e.target.value)}
      />
      <hr />
      <header className="App-header">{listComp()}</header>
    </div>
  );
}
