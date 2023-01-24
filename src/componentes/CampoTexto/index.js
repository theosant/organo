import "./CampoTexto.css";

const CampoTexto = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.required}
                type="text"
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default CampoTexto;
