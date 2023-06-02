import React, { useState } from "react";
import "./Character.css";

const Character = (props) => {
  //name

  const [name, setName] = useState(props.name);
  const [health, setHealth] = useState("150");
  const [stamnia, setStamnia] = useState("50");
  const [gold, setGold] = useState("75");
  const [location, setLocation] = useState("vancoucer");


//   update the database:


  return (
    <div>
      <h2>{name}'s Bio:</h2>
      <p>Race: {props.race}</p>
      <p>
        Status: <br />
        Health at {health}
        <br />
        Stamina at {stamnia}
      </p>
      <p>Gold : {gold}</p>
      <p className={props.comment ? "visible" : "hidden"}>
        Comment: {props.comment}
      </p>
      <p>Location: {location}</p>
      <button
        onClick={() => {
          setHealth(parseInt(health) + 10);
          setGold(parseInt(gold) - 2);
        }}
      >
        Add 10 Health (costs 2 Gold)
      </button>
      <br />
      <button
        onClick={() => {
          setStamnia(parseInt(stamnia) + 5);
          setGold(parseInt(gold) - 1);
        }}
      >
        Add 5 Stamina (costs 1 Gold)
      </button>
      <br />

      <button
        onClick={() => {
          setStamnia(parseInt(stamnia) - 5);
          setHealth(parseInt(health) - 10);
          setGold(parseInt(gold) + 3);
        }}
      >
        Add 3 Gold (costs 10 Health and 5 Stamina)
      </button>
      <br />

      <button
        onClick={() => {
          setGold(parseInt(gold) - 3);
        }}
      >
        Change Location: (costs 3 Gold)
      </button>
      <br />

      <label htmlFor="nameChange">Change Player's Name: </label>
      <br />
      <input
        type="text"
        id="nameChange"
        onChange={(e) => setName(e.target.value)}
      /><br/>
      <label htmlFor="locationChange">Change location: </label>
      <br />
      <input
        type="text"
        id="locationChange"
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
};

export default Character;
