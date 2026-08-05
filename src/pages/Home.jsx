import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";

function Home() {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);/*controla carregamento*/

    /*API*/
    useEffect(() => {
        setTimeout(() => {
            const dadosMockados = [
                { nome: "Notebook", preco: 3500, descricao: "Notebook gamer RTX" },
                { nome: "Celular", preco: 2000, descricao: "Smartphone Android" },
                { nome: "Tablet", preco: 1500, descricao: "Tablet 10 polegadas" },
            ];
            setProdutos(dadosMockados);
            setCarregando(false);
        }, 2000);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        /*cria produto*/
        const novoProduto = {
            nome,
            preco,
            descricao,
        };

        /*adiciona a lista*/
        setProdutos([...produtos, novoProduto]);

        /*limpa campos*/
        setNome("");
        setPreco("");
        setDescricao("");
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="bg-gray-300 p-4 w-full gap-6 text-lg">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                    {/*campo nome */}
                    <input className="border-2 border-black p-4  rounded-md text-black"
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />

                    {/*campo preco*/}
                    <input className="border-2 border-black p-4 rounded-md text-black"
                        type="number"
                        placeholder="Digite o preço"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        required
                    />

                    {/*campo descricao*/}
                    <textarea className="border-2 border-black p-4 rounded-md text-black text-align-center"
                        placeholder="Digite a descrição do produto"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />

                    {/*botao de envio*/}
                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-black rounded-xl p-1  mt-2 mb-5 lg:mr-50 lg:ml-50 lg:h-10 w-full md:w-auto">Cadastrar</button>
                </div>
            </form>

            {/*lista de produtos */}

            {carregando ? (
                <p>Carregando...</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {produtos.map((produto, index) => (
                        <ProdutoCard
                            key={index}
                            nome={produto.nome}
                            preco={produto.preco}
                            descricao={produto.descricao}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default Home;