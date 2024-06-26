import { IrHome } from "../components/IrHome"
import { useState } from "react";


export const TwoColorsPage = () => {
  //estado inicial, un objeto con dos propiedades cuy valor es blanco 
  const [backgroundColor, setBackgroundColor] = useState({
    up: "white",
    down: "white",
  });
//Funcion para setear el valor inicial, al mover el mouse.
  const changeColor = (e) => {
    const coordenadasY = window.innerHeight / 2 - e.clientY;
    (coordenadasY <= 0)
      ? setBackgroundColor({ down: "#B227E3", up: "white" })
      : setBackgroundColor({ down: "white", up: "#B227E3" });
  };
  //condicion: down: abajo , up: arriba

  return (
    <>
        <IrHome/>
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "48px",
        fontFamily: "Lato, sans-serif",
        fontWeight: 600,
        textTransform: "upperCase",
      }}
      >
    
      <div
        onMouseMove={changeColor}
        style={{
          width: "100%",
          height: "50vh",
          backgroundColor: backgroundColor.up,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <p>color 1</p>
      </div>
      <div
        onMouseMove={changeColor}
        style={{
          width: "100%",
          height: "50vh",
          backgroundColor: backgroundColor.down,
          display: "grid",
          placeContent: "center",
        }}
      >
   
        <p>color 2</p>
   
      </div>
    </div>
    </>
  );
};


