import React, { useState } from "react";

function ToyForm({handleSubmit}) {
const [name, setName ] = useState('');
const [image, setImage ] = useState('');

function submitForm(e){
  e.preventDefault()
  handleSubmit(name, image)
  setImage(''  )
  setName(''  )
}
  return (
    <div className="container">
      <form onSubmit={submitForm} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  )};
export default ToyForm;
