function ProdutoCard({nome, preco, descricao}) {
    return (
        
        <div>
            <h2>{nome}</h2>
            <p>Preço: R${preco}</p>
            <p>Descrição: {descricao}</p>
        </div>
    )
}

export default ProdutoCard;