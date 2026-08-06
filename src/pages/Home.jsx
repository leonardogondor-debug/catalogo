import { useState, useEffect, useRef } from "react";
import ProdutoCard from "../components/ProdutoCard";

function Home() {
    const [imagem, setImagem] = useState("");
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);/*controla carregamento*/

    const filesInputRef = useRef(null);

    /*API*/
    useEffect(() => {
        setTimeout(() => {
            const dadosMockados = [
                { imagem: "src/assets/notebook.webp", nome: "Notebook", preco: 3500, descricao: "Notebook gamer RTX" },
                { imagem: "src/assets/celular.webp", nome: "Celular", preco: 2000, descricao: "Smartphone Android" },
                { imagem: "src/assets/tablet.webp", nome: "Tablet", preco: 1500, descricao: "Tablet 10 polegadas" },
            ];
            setProdutos(dadosMockados);
            setCarregando(false);
        }, 2000);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        /*cria produto*/
        const novoProduto = {
            imagem,
            nome,
            preco,
            descricao,
        };

        /*adiciona a lista*/
        setProdutos([...produtos, novoProduto]);

        /*limpa campos*/
        setImagem("");
        setNome("");
        setPreco("");
        setDescricao("");

        if (filesInputRef.current) {
            filesInputRef.current.value = "";
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="bg-gray-300 p-4 w-full gap-6 text-lg">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
                    {/*campo iamgem*/}
                    <input ref={filesInputRef} className="border-2 border-black p-2 bg-white rounded-md text-black" type="file" accept="image/*" onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                        setImagem(URL.createObjectURL(file));
                    }
                }}
                />

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
                    onChange={(e) => setPreco(Number(e.target.value))}
                    required
                />

                {/*campo descricao*/}
                <textarea className="border-2 border-black p-4 rounded-md text-black text-align-center"
                    placeholder="Digite a descrição do produto"
                    maxLength={35}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />

                {/*botao de envio*/}
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-black rounded-xl p-1 lg:mr-50 lg:ml-50 lg:h-10 w-full lg:h-full md:w-auto">Cadastrar</button>
            </div>
        </form >

            {/*lista de produtos */ }

    {
        carregando ? (
            <p className="font-bold m-5">Carregando...</p>
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 font-bold">
                {produtos.map((produto, index) => (
                    <ProdutoCard
                        key={index}
                        imagem={produto.imagem}
                        nome={produto.nome}
                        preco={produto.preco}
                        descricao={produto.descricao}
                    />
                ))}
            </div>
        )
    }
        </>
    );
}

export default Home;