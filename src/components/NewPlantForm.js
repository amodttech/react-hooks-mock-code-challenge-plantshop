import React, {useState} from "react";

function NewPlantForm({newPlant}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function onSubmit(event){
    event.preventDefault()
    console.log('submittt')
    
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then(response => newPlant(response))
  }

  function onChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={onChange}
          placeholder="Plant name" />
        <input 
          type="text" 
          name="image" 
          value={formData.image} 
          onChange={onChange}
          placeholder="Image URL" />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          value={formData.price} 
          onChange={onChange}
          placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
