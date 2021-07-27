import React from "react";
import styles from "./Formulario.module.css";

const Formulario = () => {
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col- s12 m8 offset-m2">
        <form>
          <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
          <div className="inpout-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} waves-effect waves-purple btn-large`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
