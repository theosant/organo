import "./Rodape.css";

const Rodape = () => {
    return (
        <section className="rodape">
            <div className="links">
                <a href="">
                    <img src="/imagens/fb.png" alt="Logo do Facebook" />
                </a>
                <a href="">
                    <img src="/imagens/ig.png" alt="Logo do Instagran" />
                </a>
                <a href="">
                    <img src="/imagens/tw.png" alt="Logo do Twitter" />
                </a>
            </div>
            <img
                src="/imagens/logo.png"
                alt="Logo do Organo"
                className="logo"
            />
            <p className="descricao">Desenvolvido por Théo + Alura.</p>
        </section>
    );
};

export default Rodape;
