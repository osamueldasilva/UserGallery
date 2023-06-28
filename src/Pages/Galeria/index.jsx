import "./styles.css";
import { ImagemGaleria, ImagemList } from "../../assets/image/index";
import CarrosselReact from "../../CarrosselReact/index";
import Header from "../../components/Header/index";
import Table from "../../components/Table/index";
import { api } from "../../service/api";
import { useState, useEffect } from "react";

function Carrocel() {

  //* Estados de click do botão Toggle
  const [toggle, setToggle] = useState(true);
  
  // * Estado para armazenar a imagem no carrocel
  const [image, setImage] = useState([]);
  //
  const title = toggle === true ? "Carrossel" : "Tabela";
  
  function switchToggle(props) {
    setToggle(props);
  }

  useEffect(() => {
    getData();
  }, []);


  async function getData() {
    try {
      const { data } = await api.get("/image");
      setImage(data);
    } catch (error) {
      console.error(error);
    }
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

      {toggle === true &&  image.length ? (
        <CarrosselReact image={image} />
      ) : (
        <Table image={image} setImage={setImage}/>
      )}
    </section>
  );
}

export default Carrocel;
