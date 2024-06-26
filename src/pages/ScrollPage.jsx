import { IrHome } from "../components/IrHome"
import {useState} from 'react'

export const ScrollPage = () => {
  const [backgroundColor, setBackgroundColor] = useState("white"); //estado inicializado en blanco
 

  //Funcion que se ejecuta cuando el usuario hace scroll
  const handleScroll = (event) => {
      const { scrollTop, clientHeight } = event.target; 
      const scrollRatio = scrollTop / clientHeight
      console.log(scrollRatio)

      //evalua que cuando el radio sea mayor a 0.5, se ejecute la funcion seteadora y cambie el color
      //en caso contrario debe permanecer en blanco
      if (scrollRatio > 0.5) {
          setBackgroundColor("#B451B5");
      } else {
          setBackgroundColor("white");
      }
  };
  
  return (
      <div
         
          style={{
              height: "100vh",
              width: "100%",
              overflowY: "scroll",
              backgroundColor: backgroundColor,
              transition: "background-color 0.5s ease",
              margin: 0
          }}
          onScroll={handleScroll}
      >
            <IrHome/>

            {/* //el padding crea espacio entre cada parrafo,  para poder hacer scroll */}
          <p style={{ paddingTop: "200px", textAlign: "center" }}>
              Baja
          </p>
          <p style={{ paddingTop: "500px", textAlign: "center" }}>
              Sigue bajando...
          </p>
          <p style={{ paddingTop: "800px", textAlign: "center" }}>
              Cambió el color
          </p>
      </div>
  );
}
