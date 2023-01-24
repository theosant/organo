import "./Colaborador.css";

const Colaborador = ({ colaborador, corDeFundo }) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img
                    src={colaborador.imagem}
                    alt={"Imagem de perfil de " + colaborador.nome}
                />
            </div>
            <div className="rodape-card">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    );
};

export default Colaborador;
