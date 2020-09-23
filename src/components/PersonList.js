import React from "react";
import Person from "./Person";
import "./Person.styles.css";
const PersonList = () => {
  return (
    <div className="person-list">
      <Person img="21" name="Daniel" job="developer" />
      <Person img="22" name="Ovidiu" job="developer">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus, mollitia!
        </p>
      </Person>
      <Person img="23" name="Rares" job="developer" />
    </div>
  );
};

export default PersonList;
