function testes(){
    return new Promise((resolve,reject)=>{
        
        const erro = true

        resolve('A promise foi resolvida com sucesso!')

        if(erro){
            reject('Erro...')
        }else{
            resolve('A promisse foi resolvida com sucesso!')
        }
    })
}

testes().then(function(res){
    alert(res)
}).catch(function(err){
    alert(err)
})


async function testes2(){
    await testes2()
    alert('Ola')
}
testes2()