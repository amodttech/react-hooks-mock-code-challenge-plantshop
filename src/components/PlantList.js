import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData, onDelete, onUpdate}) {

  const plantComponent = plantData.map((plant) => 
    <PlantCard 
      key={plant.id} 
      plant={plant} 
      onDelete={onDelete} 
      onUpdate={onUpdate}
    />)

  return (
    <ul className="cards">{plantComponent}</ul>
  );
}

export default PlantList;
