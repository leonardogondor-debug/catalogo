import { useState, useEffect, useRef } from "react";
import ProdutoCard from "../components/ProdutoCard";
import { GridConteiner } from "../components/CardProduto.styled";
import { FormContainer, Input, InputImg, TextArea, SubmitButton, AlertCarregando } from "../components/Form.styled";
import notebookImg from "../assets/notebook.webp";
import celularImg from "../assets/celular.webp";
import tabletImg from "../assets/tablet.webp";

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
                { imagem: notebookImg, nome: "Notebook", preco: 3500, descricao: "Notebook gamer RTX" },
                { imagem: celularImg, nome: "Celular", preco: 2000, descricao: "Smartphone Android" },
                { imagem: tabletImg, nome: "Tablet", preco: 1500, descricao: "Tablet 10 polegadas" },
            ];
            setProdutos(dadosMockados);
            setCarregando(false);
        }, 2000);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const nomeTrim = nome.trim();

        if (!nomeTrim) {
            alert("O nome não pode ser vazio ou só espaço!")
            return;
        }

        if (preco < 0) {
            alert("O preço não pode ser negativo!");
            return;
        }

        if (produtos.some(p => p.nome.toLowerCase() === nomeTrim.toLowerCase())) {
            alert("Já existe um produto com esse nome!");
            return;
        }

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
            <FormContainer onSubmit={handleSubmit}>
                
                    {/*campo iamgem*/}
                    <InputImg ref={filesInputRef} type="file" accept="image/*" onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            setImagem(URL.createObjectURL(file));
                        }
                    }}
                    />

                    {/*campo nome */}
                    <Input
                        type="text"
                        placeholder="Digite o nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />

                    {/*campo preco*/}
                    <Input
                        type="number"
                        placeholder="Digite o preço"
                        value={preco}
                        onChange={(e) => setPreco(Number(e.target.value))}
                        min="0"
                        required
                    />

                    {/*campo descricao*/}
                    <TextArea
                        placeholder="Digite a descrição do produto"
                        maxLength={35}
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />

                    {/*botao de envio*/}
                    <SubmitButton type="submit">Cadastrar</SubmitButton>
                
            </FormContainer >

            {/*lista de produtos */}

            {
                carregando ? (
                    <AlertCarregando>Carregando...</AlertCarregando>
                ) : (
                    <GridConteiner>
                        {produtos.map((produto, index) => (
                            <ProdutoCard
                                key={index}
                                imagem={produto.imagem}
                                nome={produto.nome}
                                preco={produto.preco}
                                descricao={produto.descricao}
                            />
                        ))}
                    </GridConteiner>
                )
            }
        </>
    );
}

export default Home; 