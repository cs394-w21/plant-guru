import {useState, useEffect} from 'react';
import Tabletop from 'tabletop';

async function updateData(updatePlants){
  //REPLACE THE FOLLOWING WITH YOUR GOOGLE SHEETS ID
  const dataKey = 'abcd1234';
  
  const plantData = await Tabletop.init({
    key: dataKey,
    simpleSheet: true
  });
  
  updatePlants(plantData);
}

const getPlantData = () => {
  const [plants, updatePlants] = useState([]);

  useEffect(() => {
    updateData(updatePlants)
  }, [updateData, updatePlants])

  return plants;
}

export default getPlantData;