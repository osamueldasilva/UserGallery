import "./styles.css";
import { ImagemGaleria, ImagemList } from "../../assets/image/index";
import CarrosselReact from '../../CarrosselReact/index';
import Header from "../../components/Header/index";
import Table from "../../components/Table/index";

import { useState } from "react";

function Carrocel() {
  

  const [toggle, setToggle] = useState(true);

  const title = toggle === true ? "Carrossel" : "Tabela";

  function switchToggle(props) {
    setToggle(props);
  }

  
 

  return (
    <section className="carrocel">
      <Header />
      <div className="toogle">
        <div className="div"></div>
        <h1>{title}</h1>
        <div className="btn">
          <button onClick={() => switchToggle(true)} className="btn-toogle1">
            <ImagemGaleria />
          </button>

          <button onClick={() => switchToggle(false)} className="btn-toogle2">
            <ImagemList />
          </button>
        </div>
      </div>
      

      {toggle === true ? <CarrosselReact /> : <Table />}
    </section>
  );
}

export default Carrocel;
