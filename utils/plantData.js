import {useState, useEffect} from 'react';
import Tabletop from 'tabletop';

async function updateData(updatePlants){
  const dataKey = '1UA0TT7tY6u654sjbd9K4TADpuKQ_2-a3QGulTKWDFAY';
  
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