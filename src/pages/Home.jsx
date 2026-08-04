import { useState } from "react";

function Home() {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Produto cadastrado: ${nome}, preço: R$${preco}, descrição: ${descricao}`);
        setNome("");
        setPreco("");
        setDescricao("");
    };


    return (
        <form onSubmit={handleSubmit}>
            {/*campo nome */}
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />

        /*campo preco*/
            <input
                type="number"
                placeholder="Digite o preço"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
            />

            {/*campo descricao*/}
            <textarea
                placeholder="Digite a descrição do produto"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
            />

            {/*botao de envio*/}
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default Home;