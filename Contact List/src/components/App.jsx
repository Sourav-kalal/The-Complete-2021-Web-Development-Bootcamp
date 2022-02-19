import React from "react";
import Card from "./card";
import Heading from "./heading";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      name={contact.name}
      img={contact.imgURL}
      email={contact.email}
      phone={contact.phone}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
