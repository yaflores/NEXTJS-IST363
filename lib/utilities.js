export function filterAllVehicleTypes(vehiclesData) {
    const uniqueVehicleTypes = new Set();
  
    vehiclesData.forEach((vehicle) => {
      const { vehicleTypes } = vehicle.node.vehicleInformation;
      vehicleTypes.forEach((vehicleType) => uniqueVehicleTypes.add(vehicleType));
    });
  
    return Array.from(uniqueVehicleTypes);
}
  
export function convertPriceToFormattedString(price) {
    return '$' + price.toLocaleString();
}
  