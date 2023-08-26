import React, { useEffect, useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
const ToyAPI = "http://localhost:3000/toys"



function App() {
  const [showForm, setShowForm] = useState(true);
const[toys, setToys] = useState([]);
  
useEffect(()=> {
    fetch(ToyAPI)
    .then(res => res.json())
    .then(setToys);
  }, [])
    
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
function addNewToy(name, image){
  const newToy = {
    name,
    image,
    likes: 0,
  };



  
  fetch(ToyAPI, {
    method: 'POST',
    headers: {
      Accepts: 'application/json',
      'Content-type': 'application/json',

    },

    body: JSON.stringify(newToy), 
  })
  .then(res => res.json())
  .then(toy => setToys([...toys, toy]));
}
  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmit={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
