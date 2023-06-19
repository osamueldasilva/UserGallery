import "./styles.css";
import { ImagemDelete, ImagemVisibility } from "../../assets/image/index";
import { ComponentModal } from "../Modal/index";
import { useState } from "react";

function Table() {
  const [isOpen, setIsOpen] = useState(false);

  // useState com valor false porque os modais estao fechados
  // POrem os dois sets dentro da funcao do button precisa ser true
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

  return (
    <>
      <div className="upload">
        {/*  */}
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
            <tr>
              <td>1</td>
              <td>Arquivo1</td>
              <td>.txt</td>
              <td>10KB</td>
              <td>01/01/2023</td>
              <td className="iconAcao">
                <button
                    className="view"
                    onClick={() => {
                    openModal();
                    teste(false);
                  }}
                >
                  <ImagemVisibility />
                </button>
                <button className="delete">
                  <ImagemDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <ComponentModal isOpen={isOpen} closeModal={closeModal}>

          {isUpload === false ? (

            <section className="modal">
              <div className="imageModal">
                <img
                  className="imgModal"
                  src="https://img.freepik.com/fotos-gratis/apoio-a-voces-boa-sorte-feliz-alegre-atrevida-garota-atraente-piscando-aprovacao-como-mostrar-polegar-sorrindo-amplamente-satisfeito-festa-incrivel-parabenizando-amigo-bem-feito-fundo-amarelo_1258-56655.jpg?size=626&ext=jpg&ga=GA1.1.329630417.1684154870&semt=ais"
                  alt=""
                />
              </div>
              <button className="btnModal" onClick={closeModal}>
                Fechar
              </button>
            </section>
          ) : (
            <div className="uploadModal">
              <label htmlFor="aruivo">
                <input type="file" name="arquivo" id="arquivo" />
              </label>
              

              <div className="btnUploadModal">
                <button className="btnModalCadastro">Cadastrar</button>
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
