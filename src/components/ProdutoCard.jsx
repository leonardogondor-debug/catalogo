function ProdutoCard({nome, preco, descricao, imagem}) {
    return (
        
        <div className="border-2 border-black m-2 p-5 rounded-xl shadow-xl">
            <img src={imagem} alt={nome} className="w-full mb-2 rounded-xl"></img>
            <h2>{nome}</h2>
            <p>Preço: R${preco}</p>
            <p>Descrição: {descricao}</p>
        </div>
    )
}

export default ProdutoCard;