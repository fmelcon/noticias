import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  //definir la categoria y noticias
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=5277b260f61845c6b306e55d8adc22f9`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="contenedor">
        <div className="container white">
          <Formulario setCategoria={setCategoria} />
        </div>
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
