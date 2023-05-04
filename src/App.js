/* src/App.js */
/*
  Implementar:
    - Las paginas Flota, Vehiculos, y Reportes
    - Abrir una pagina nueva al seleccionar cada Boton
  Solucion:
    - Instalar la libreria react-router-dom e importar los components 
    Switch y Route en App.js.
 
*/
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import { FaTruck } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { BsTable} from "react-icons/bs";
import { FaCarSide} from "react-icons/fa";

import { Link } from "react-router-dom";
import { I18n } from "aws-amplify";
import { Amplify } from "aws-amplify";
import {
  Divider,
  translations,
  withAuthenticator,
  Button,
  Heading,
  Flex,
  ButtonGroup,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import React from "react";

import awsExports from "./aws-exports";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib3NjYXJpc21hZWwiLCJhIjoiY2xmbGYycDB2MDE5aTNybzRsNGMwZmM0cCJ9.QdwZE-SVTNUx6AfnHFEWog";

Amplify.configure(awsExports);
// Configurar a Lenguaje Espanol
I18n.putVocabularies(translations);
I18n.setLanguage("es");

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  mainContainer: { paddingTop: "150px" },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
  btnSign: { textAlign: "right" },
};

function App({ signOut, user }) {
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
      >
        <Heading level={4}>Hola {user.username}</Heading>
        <Button style={styles.btnSign} onClick={signOut}>
         <FaSignOutAlt />
          Salir
        </Button>
      </Flex>

      <Flex direction="column">
        <Divider size="large" orientation="horizontal" />
      </Flex>

      <div style={styles.mainContainer}>
        <ButtonGroup
          variation="primary"
          size="large"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Link to="/flota" style={{ textDecoration: "none" }}>
            <Button gap="0.3rem" variation="primary">  
            <FaTruck/> <FaTruck/> 
            Flota</Button>
            

          </Link>

          <Link to="/vehiculo" style={{ textDecoration: "none" }}>
            <Button gap="0.3rem" variation="primary">
              <FaCarSide/>
              Vehiculo</Button>
          </Link>

          <Link to="/reportes" style={{ textDecoration: "none" }}>
            <Button gap="0.3rem" variation="primary"> 
             <BsTable/>Reportes </Button>
          </Link>
        </ButtonGroup>
      </div>
    </>
  );
}
export default withAuthenticator(App);
