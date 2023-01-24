import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    return props.colaboradores.length > 0 ? (
        <section
            className="time"
            style={{ backgroundColor: props.time.corSecundaria }}
        >
            <h3>{props.time.nome}</h3>
            <div
                className="borda"
                style={{ borderColor: props.time.corPrimaria }}
            ></div>
            <div className="lista">
                {props.colaboradores.map((colaborador) => (
                    <Colaborador
                        colaborador={colaborador}
                        key={colaborador.nome}
                        corDeFundo={props.time.corPrimaria}
                    />
                ))}
            </div>
        </section>
    ) : (
        ""
    );
};

export default Time;
