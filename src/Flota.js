/*  - Para usar los iconos . Primero hay que instalarlos de la siguiente forma:
    npm install react-icons --save

    - Luego ir a la siguiente pagina: 
      https://react-icons.github.io/react-icons/

      y buscar el icono que deseas

      - el atributo gap="0.3rem" te permite aunmentar la distancia 
      entre el icono y el texto. Mientras mayor sea el numero mayor sera la distancia.

*/

import {
  Flex,
  Button,
  Heading,
  TextField,
  withAuthenticator,
  FieldGroupIcon,
} from "@aws-amplify/ui-react";

import Coordenadas from "./coordenadas.json";
import { FaArrowLeft } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaMapMarkedAlt, FaCar } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { Amplify } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import awsExports from "./aws-exports";

Amplify.configure(awsExports);

mapboxgl.accessToken =
  "pk.eyJ1Ijoib3NjYXJpc21hZWwiLCJhIjoiY2xmbGYycDB2MDE5aTNybzRsNGMwZmM0cCJ9.QdwZE-SVTNUx6AfnHFEWog";

const Flota = ({ signOut }) => {
  let navigate = useNavigate();
  const goMainPage = () => {
    navigate("/");
  };

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-77.02344417415036);
  const [lat, setLat] = useState(-12.054010087308075);
  const [zoom, setZoom] = useState(14);

  function mostrarRuta() {
    // Si no hay alguna linea dibujada en el mapa dibujamos
    // la linea y los marcadores
    if (!map.current.getLayer("mapa-rutas-linea")) {
      map.current.addLayer({
        id: "mapa-rutas-linea",
        type: "line",
        source: "mapa-rutas",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#4e8ff8",
          "line-width": 6,
        },
      });

      map.current.addLayer({
        id: "mapa-rutas-puntos",
        type: "circle",
        source: "mapa-rutas",
        paint: {
          "circle-radius": 6,
          "circle-color": "#B42222",
        },
        // esta propiedad permite extraer SOLAMENTE las coordenadas de los marcadores. Estas coordenadas se encuentran en el archivo coordenadas.json
        filter: ["==", "$type", "Point"],
      });
    } else {
      // Si hay una linea dibujada entonces
      // borramos linea y marcadores
      map.current.removeLayer("mapa-rutas-linea");
      map.current.removeLayer("mapa-rutas-puntos");
    }
  }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("load", () => {
      map.current.addSource("mapa-rutas", {
        type: "geojson",
        data: Coordenadas, // Coordenadas es un archivo json cen formato geojson donde almaceno coordenadas de las lineas y los marcadores
      });
    });
  });

  return (
    <div>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignContent="center"
      >
        <Button gap="0.2rem" onClick={goMainPage} variation="primary">
          <FaArrowLeft />
          Regresar
        </Button>

        <Heading level={4}>Flota Vehiculos</Heading>
        <Button gap="0.2rem" onClick={signOut} variation="primary">
          <FaSignOutAlt />
          Salir
        </Button>
      </Flex>

      <Flex
        // as="form"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <TextField
          isRequired={true}
          placeholder="ex: LU12345"
          label="Numero de placa"
          errorMessage="hay un error"
          innerEndComponent={
            <FieldGroupIcon ariaLabel="">
              {/** Accessibility tip: pass empty ariaLabel for decorative icons. */}
              <FaCar />
            </FieldGroupIcon>
          }
        />

        <TextField
          isRequired={true}
          placeholder="01/02/20223"
          label="Fecha"
          errorMessage="hay un error"
          innerEndComponent={
            <FieldGroupIcon ariaLabel="">
              <MdCalendarMonth />
            </FieldGroupIcon>
          }
        />

        <Button
          type="submit"
          gap="0.3rem"
          variation="primary"
          className="color-submit-button"
          onClick={mostrarRuta}
        >
          <FaMapMarkedAlt />
          Mostrar ruta
        </Button>
      </Flex>

      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default withAuthenticator(Flota);
