import "./styles.css";
import { ImagemDelete, ImagemVisibility } from "../../assets/image/index";
import { ComponentModal } from "../Modal/index";
import { useState } from "react";
import { api } from "../../service/api";
import { NavLink } from "react-router-dom";

function Table(props) {
  // * Estado pra abrir e fechar modal de visualização
  const [isOpen, setIsOpen] = useState(false);

  // * Estado pra abrir e fechar modal de upload
  const [isUpload, setIsUpload] = useState(false);

  // * Estado pra fazer Upload da imagem
  const [imageUpload, setImageUpload] = useState();

  // * Estado pra visualizar imagem
  const [imageView, setImageView] = useState();

  // *  Função pra abrir o modal
  function openModal() {
    setIsOpen(true);
  }

  // * Função pra fechar o modal
  function closeModal() {
    setIsOpen(false);
  }

  function teste(isUpload) {
    setIsUpload(isUpload);
  }

  // * Função que faz requisição para deletar imagem da tabela e carrocel
  async function handleDelete(idDelete) {
    try {
      // *  Abre uma menssagem pra poder confirmar se realmente quer exluir imagem
      const confirmed = window.confirm(
        "Certeza que quer excluir imagem da tabela?"
      );

      // *  Se o usuario quiser excluir a função sera executada
      if (confirmed == true) {
        window.location.reload();
        await api.delete(`image/${idDelete}`);
        console.log(props.image);
        const updatedImage = props.image.filter(({ id }) => id !== idDelete);
        props.setImage(updatedImage);
      }
    } catch (error) {}
  }

  // *  Função que faz o upload da imagem
  async function handleUpload() {
    //  * Cria um objeto FormData para armazenar os dados do formulário
    const formData = new FormData();
    formData.append("image", imageUpload);
    // *Adiciona imagem ao FormData
    try {
      const { data } = await api.post("/image/upload", formData);
      // * Atualiza o estado da imagem e adiciona a nova imagem 
      props.setImage((prevState) => [...prevState, data]);
      setIsOpen(false);
    } catch (error) {
      alert("Erro ao cadastrar imagem: " + error);
    }
  }
  
  // * Função que vai ser aberto o modal de visualização e apresentara a devida imagem
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
              <label htmlFor="arquivo">
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
