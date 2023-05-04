import { Table, TableCell, TableHead, TableBody, TableRow } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
const Reportes = () => {
    return (
      <div>
        <h2 >Reporte de vehiculos</h2>
        
<Table
  caption=""
  highlightOnHover={false}
  variation="striped">
  <TableHead>
    <TableRow>
      <TableCell as="th">Vehiculo</TableCell>
      <TableCell as="th">Recorrido(Km)</TableCell>
      <TableCell as="th">Tiempo(hrs)</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Honda</TableCell>
      <TableCell>10Km</TableCell>
      <TableCell>5hrs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Toyota</TableCell>
      <TableCell>14Km</TableCell>
      <TableCell>12.5hrs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Volvo</TableCell>
      <TableCell>35Km</TableCell>
      <TableCell>20hrs</TableCell>
    </TableRow>
  </TableBody>
</Table>
  
        
    </div>
    )}

  export default Reportes;