import { getAllVehicles } from '../../lib/api';
import { useState } from 'react';


import Layout from '../../components/Layout';

import Grid from '../../components/Grid';
import Tabs from '../../components/Tabs';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import {filterAllVehicleTypes} from '../../lib/utilities';

export async function getStaticProps() {
  const vehiclesData = await getAllVehicles();
  return {
    props: {
      vehiclesData
    }, // will be passed to the page component as props
  }
}

const VehiclesPage = ({vehiclesData}) => {
  const [activeVehicleType, setActiveVehicleType] = useState("all");
  const vehicleTypes = ["all",...filterAllVehicleTypes(vehiclesData)];
  
  const filteredVehicles = vehiclesData.filter((vehicle) => {
    const { vehicleTypes } = vehicle.node.vehicleInformation;
    return activeVehicleType === "all" || vehicleTypes.includes(activeVehicleType)
  });
  return (
      <Layout>
        <Container>
          <Heading 
            level={1} 
            textAlign="center"
          >
            Vehicles
          </Heading>
          <Tabs 
            items={vehicleTypes}
            activeItem={activeVehicleType}
            changeHandler={setActiveVehicleType}
          />
          <Grid items={filteredVehicles}/>
        </Container> 
      </Layout>
  )
}
export default VehiclesPage
