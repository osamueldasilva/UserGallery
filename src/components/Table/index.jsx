import "./styles.css";
import { ImagemDelete, ImagemVisibility } from "../../assets/image/index";
import { ComponentModal } from "../Modal/index";
import { useState } from "react";
import { api } from "../../service/api";
import { NavLink } from "react-router-dom";

function Table(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [isUpload, setIsUpload] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function teste(isUpload) {
    setIsUpload(isUpload);
  }

  async function handleDelete(idDelete) {
    try {
      const confirmed = window.confirm(
        "Certeza que quer excluir imagem da tabela?"
      );

      if (confirmed == true) {
        window.location.reload();
        await api.delete(`image/${idDelete}`);
        console.log(props.image);
        const updatedImage = props.image.filter(({ id }) => id !== idDelete);
        props.setImage(updatedImage);
      }
    } catch (error) {}
  }

  const [imageUpload, setImageUpload] = useState();

  async function handleUpload() {
    const formData = new FormData();
    formData.append("image", imageUpload);
    try {
      const { data } = await api.post("/image/upload", formData);
      props.setImage((prevState) => [...prevState, data]);
      setIsOpen(false);
    } catch (error) {
      alert("Erro ao cadastrar imagem: " + error);
    }
  }

  const [imageView, setImageView] = useState();

  const getImageByid = async (id) => {
    try {
      const { data } = await api.get(`/image/${id}`);
      setImageView(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="upload">
        <button
          onClick={() => {
            openModal();
            teste(true);
          }}
          className="btnUpload"
        >
          Upload de imagem
        </button>
      </div>

      <section className="tabela">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Extensão</th>
              <th>Tamanho</th>
              <th>Data de Criação</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {props.image.map(({ id, name, extension, vlSize, createdAt }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{extension}</td>
                <td>{vlSize}</td>
                <td>{createdAt}</td>
                <td className="iconAcao">
                  <button
                    className="view"
                    onClick={() => {
                      openModal();
                      teste(false);
                      getImageByid(id);
                    }}
                  >
                    <ImagemVisibility />
                  </button>
                  <button
                    className="delete"
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    <ImagemDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ComponentModal isOpen={isOpen} closeModal={closeModal}>
          {isUpload === false ? (
            <section className="modal">
              <div className="imageModal">
                <img
                  className="imageVisibility"
                  src={`data:image/${
                    imageView?.extension.split("/")[1]
                  };base64, ${imageView?.data}`}
                />
              </div>
              <button className="btnModal" onClick={closeModal}>
                Fechar
              </button>
            </section>
          ) : (
            <div className="uploadModal">
              <label htmlFor="aruivo">
                <input
                  type="file"
                  name="arquivo"
                  id="arquivo"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    setImageUpload(file);
                  }}
                />
              </label>

              <div className="btnUploadModal">
                <NavLink to="/home">
                  <button className="btnModalCadastro" onClick={handleUpload}>
                    Cadastrar
                  </button>
                </NavLink>

                <button className="btnModalCancelar" onClick={closeModal}>
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </ComponentModal>
      </section>
    </>
  );
}

export default Table;
