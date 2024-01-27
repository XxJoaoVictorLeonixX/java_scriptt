var items = []

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]').value
    var precoProduto = document.querySelector('input[name=valor_produto]')

    items.push({
       nome: nomeProduto.value,
       valor: precoProduto.value
    })

    let listaProdutos = document.querySelector('.lista-Produtos')
    let soma = 0
    listaProdutos.innerHTML = ""
    items.map(function(val){
        soma+=parseInt(val.valor)
        listaProdutos.innerHTML+=`
            <div class="lista-produto-single">
                <h3>`+val.nome+`</h3>
                <h3 class="valor-produto"><span>R$`+val.valor+`</span></h3>
        </div>
    `
    })

    nomeProduto.value = ""
    precoProduto.value = ""

})