import React, {useState} from "react";

function PlantCard({plant, onDelete, onUpdate}) {

  const {id, name, image, price} = plant
  const [stockTog, setStockTog] = useState(true)
  const [newPrice, setnewPrice] = useState(price)

  function stockTogHandler(){
    setStockTog(!stockTog)
  }

  function handleDelete(){
    onDelete(id)
  }

  function submitHandler(event){
    event.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"price": newPrice})
      })
      .then((r) => r.json())
      .then(onUpdate)
    }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {stockTog ? (
        <button onClick={stockTogHandler} className="primary">In Stock</button>
      ) : (
        <button onClick={stockTogHandler}>Out of Stock</button>
      )}
      <button onClick={handleDelete} className="red">Delete</button>
      <form onSubmit={submitHandler}>
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          value={newPrice} 
          onChange={(e) => setnewPrice(parseFloat(e.target.value))}
          placeholder="Price" />
        <button type="submit">new price</button>
      </form>
    </li>
  );
}

export default PlantCard;
