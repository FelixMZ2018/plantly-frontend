function SensorName(params) {
  switch (params) {
    case "soil_moisture":
      return "Soil Moisture";
      break;
    case "light":
      return "Light";
      break;
    case "humidity":
      return "Humidity";
      break;
    case "temperature":
      return "Temperature";
      break;
    default :
      return "Error";
      break
  }
}

export default SensorName;
