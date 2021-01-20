/* Search filter */
const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

/* update DOM with updated record */
function handleUpdatePlant(updatedPlant) {
    const updatedPlantsArray = plants.map((plant) => {
      if (plant.id === updatedPlant.id) {
        return updatedPlant;
      } else {
        return plant;
      }
    });
    setPlants(updatedPlantsArray);
  }