import { useState } from "react";
import { GridConteiner, Card, Imagem, NomeProduto, Valor, Descricao, Botao } from "./CardProduto.styled";

function ProdutoCard({ nome, preco, descricao, imagem }) {
    const [adicionado, setAdicionado] = useState(false);

    return (
       
            <Card>
                <Imagem src={imagem} alt={nome}></Imagem>
                <NomeProduto>{nome}</NomeProduto>
                <Valor>Preço: R${preco}</Valor>
                <Descricao>Descrição: {descricao}</Descricao>
                <Botao adicionado={adicionado} onClick={() => setAdicionado(!adicionado)}>
                    {adicionado ? "Adicionado!" : "Adicionar ao Carrinho"}
                </Botao>
            </Card>
    )
}

export default ProdutoCard;