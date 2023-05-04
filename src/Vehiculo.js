import { MapView } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

const Vehiculo = () => {
    return (
      <div>
        <h3>Rastreo de un vehiculo</h3>
    
        <MapView 
           initialViewState={{
            latitude: -12.059246,
            longitude: -77.034727,
            zoom: 15,
          }}
          />
      </div>
    );
  };
  
  export default Vehiculo;