import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantData, setPlantData] = useState([])
  const [query, setQuery] = useState("")

  const url = `http://localhost:6001/plants`

  useEffect(() => {
    fetch(url)
    .then((r) => r.json())
    .then(setPlantData)
  }, [])

  function handleNewPlant(newPlant){
    setPlantData([...plantData, newPlant])
  }

  function handleUpdatePlant(newPlant){
    const updatedPlants = plantData.map((p) => {
      if (p.id === newPlant.id){
        return newPlant
      } else {
        return p
      }
    })
      setPlantData(updatedPlants)
  }

  const displayPlants = plantData.filter((plant) => {
    return plant.name.toLowerCase().includes(query.toLowerCase())
  })

  function onDelete(id){
    fetch(`${url}/${id}`, {
      method: "DELETE"
    })
    const updatedPlants = plantData.filter((p) => p.id !== id)
    setPlantData(updatedPlants)
  }


  return (
    <main>
      <NewPlantForm 
        newPlant={handleNewPlant}
      />
      <Search 
        searchTerm={query} 
        onSearchChange={setQuery}/>
      <PlantList 
        plantData={displayPlants}
        onDelete={onDelete}
        onUpdate={handleUpdatePlant}
      />
    </main>
  );
}

export default PlantPage;
